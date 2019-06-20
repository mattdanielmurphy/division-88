// TODO
// 1. fix resizing bug (see screen recording on Desktop)
let SimpleMDE = require('simplemde')

class Grid {
	constructor() {
		this.xMaxCells = 9
		this.yMaxCells = 9

		this.sections = { length: () => this.sections.length }
		this.selectedSectionIndex = undefined
		this.createGrid(this.xMaxCells, this.yMaxCells)
		Object.assign(this, { dragging: false, x0: undefined, y0: undefined, sections: [] })
		let colors = '#ffffff #6df7c1 #11adc1 #606c81 #393457 #1e8875 #5bb361 #a1e55a #f7e476 #f99252 #cb4d68 #6a3771 #c92464 #f48cb6 #f7b69e #9b9c82'.split(
			' '
		)
		this.colors = this.shuffle(colors)
		this.gridCells = []
		this.colorGrid()
		this.gridChanged = true
		this.handleResizingWindow()
	}
	get pxXMin() {
		return this.container.getBoundingClientRect().left
	}
	get pxYMin() {
		return this.container.getBoundingClientRect().top
	}
	get pxXMax() {
		return this.container.getBoundingClientRect().right
	}
	get pxYMax() {
		return this.container.getBoundingClientRect().bottom
	}
	get cellWidth() {
		return this.pxWidth / this.xMaxCells
	}
	get cellHeight() {
		return this.pxHeight / this.yMaxCells
	}
	get pxWidth() {
		return this.pxXMax - this.pxXMin
	}
	get pxHeight() {
		return this.pxYMax - this.pxYMin
	}
	shuffle(array) {
		let currentIndex = array.length
		while (0 !== currentIndex) {
			const randomIndex = Math.floor(Math.random() * currentIndex)
			currentIndex -= 1
			const temporaryValue = array[currentIndex]
			array[currentIndex] = array[randomIndex]
			array[randomIndex] = temporaryValue
		}
		return array
	}
	get selectedSection() {
		return this.sections[this.selectedSectionIndex]
	}
	set selectedSection(value) {
		this.sections[this.selectedSectionIndex] = value
	}
	get currentSectionEdges() {
		return this.selectedSection ? this.selectedSection.edges : { x: [], y: [] }
	}
	get container() {
		return document.getElementById('grid')
	}
	colorGrid() {
		let cells = document.getElementsByClassName('grid-cell')
		// reset
		this.nonSelectedSectionCells = {}
		for (let i = 0; i < cells.length; i++) {
			cells[i].style.backgroundColor = '#000'
			cells[i].removeAttribute('section-id')
			cells[i].classList.remove('selected')
		}

		Object.values(this.sections).forEach((section) => {
			section.gridCells.forEach((coordString) => {
				let [ x, y ] = coordString.split(',')
				const cell = document.getElementById(`${x},${y}`)
				cell.style.backgroundColor = section.color
				if (section.id == this.selectedSectionIndex) cell.classList.add('selected')
				else this.nonSelectedSectionCells[`${x},${y}`] = true
				cell.setAttribute('section-id', section.id)
			})
		})
	}
	setDefaultCursor(e) {
		e.target.style.cursor = 'pointer'
	}
	showResizeNWSECursor(e) {
		e.target.style.cursor = 'nwse-resize'
	}
	showResizeNESWCursor(e) {
		e.target.style.cursor = 'nesw-resize'
	}
	showResizeXCursor(e) {
		e.target.style.cursor = 'ew-resize'
	}
	showResizeYCursor(e) {
		e.target.style.cursor = 'ns-resize'
	}
	setNotResizing(e) {
		this.resizingX = undefined
		this.resizingY = undefined
	}
	handleResize(e) {
		const cursorX = Number(e.target.getAttribute('x'))
		const cursorY = Number(e.target.getAttribute('y'))

		if (!this.gridCells[cursorX]) this.gridCells[cursorX] = []
		this.gridCells[cursorX][cursorY] = this.selectedSectionIndex

		// only modify if expanding into legal space
		// modify the edge that was originally dragged
		const modifiedSection = this.selectedSection

		let x0 = this.x0
		let x1 = this.selectedSection.x1
		let y0 = this.y0
		let y1 = this.selectedSection.y1

		if (this.resizingX) {
			if (this.edgesBeingMoved.x === 1) x1 = cursorX
			else x0 = cursorX
			if (this.newSectionCanExistHere(x0, x1, y0, y1)) modifiedSection['x' + this.edgesBeingMoved.x] = cursorX
		}

		if (this.resizingY) {
			if (this.edgesBeingMoved.y === 1) y1 = cursorY
			else y0 = cursorY
			if (this.newSectionCanExistHere(x0, x1, y0, y1)) modifiedSection['y' + this.edgesBeingMoved.y] = cursorY
		}

		modifiedSection.generateCells()
		this.selectedSection = modifiedSection
		this.colorGrid()
	}
	cursorOnEdge(e, d) {
		// return edge or undefined
		const handleHoverMargin = this.cellWidth / 8
		let i = this.currentSectionEdges[d].findIndex(
			(edge) => Math.abs(edge - e['page' + d.toUpperCase()]) < handleHoverMargin
		)
		let pos = this.currentSectionEdges[d][i]
		return [ pos, i ]
	}
	sectionEdgesHoveredOver(e) {
		// returns -> { x: 123, y: 545, e }
		const edges = { e }

		const withinYBounds = e.pageY >= this.currentSectionEdges.y[0] && e.pageY <= this.currentSectionEdges.y[1]
		const withinXBounds = e.pageX >= this.currentSectionEdges.x[0] && e.pageX <= this.currentSectionEdges.x[1]
		const [ cursorOnXEdgePos, cursorOnXEdgeId ] = this.cursorOnEdge(e, 'x')
		const [ cursorOnYEdgePos, cursorOnYEdgeId ] = this.cursorOnEdge(e, 'y')

		if (cursorOnXEdgePos !== undefined && withinYBounds) {
			edges.x = { pos: cursorOnXEdgePos, id: cursorOnXEdgeId }
		}

		if (cursorOnYEdgePos !== undefined && withinXBounds) {
			edges.y = { pos: cursorOnYEdgePos, id: cursorOnYEdgeId }
		}
		return edges
	}
	// TRANSLATION
	getNewCellsAfterTranslating(x0, x1, y0, y1, xDifference, yDifference) {
		// if xDifference
		if (xDifference) {
			xDifference === -1 ? (x1 = x0) : (x0 = x1)
		} else {
			yDifference === -1 ? (y1 = y0) : (y0 = y1)
		}
		return { x0, x1, y0, y1 }
	}
	newSectionCanExistHere(x0, x1, y0, y1) {
		for (let x = x0; x <= x1; x++)
			for (let y = y0; y <= y1; y++) if (this.nonSelectedSectionCells[`${x},${y}`]) return false
		return true
	}
	translateSection(e) {
		this.x1 = Number(e.target.getAttribute('x'))
		this.y1 = Number(e.target.getAttribute('y'))
		let xDifference = this.x1 - this.x0
		let yDifference = this.y1 - this.y0
		let { x0, x1, y0, y1 } = this.selectedSection

		// do nothing if no difference
		if (xDifference === 0 && yDifference === 0) return

		// Move in direction if can do so without going off screen
		if (x0 + xDifference >= 0 && x1 + xDifference < this.xMaxCells) {
			x0 += xDifference
			x1 += xDifference
		}
		if (y0 + yDifference >= 0 && y1 + yDifference < this.yMaxCells) {
			y0 += yDifference
			y1 += yDifference
		}

		if (this.newSectionCanExistHere(x0, x1, y0, y1)) {
			this.selectedSection.generateCells({ x0, x1, y0, y1 })
			this.x0 = this.x1
			this.y0 = this.y1
			this.colorGrid()
		}
	}

	// MOUSE EVENTS
	showResizeCursorIfOnAnEdge(e) {
		this.setDefaultCursor(e)
		let edges = this.sectionEdgesHoveredOver(e)
		if (edges.x && edges.y) {
			if (edges.x.id === edges.y.id) this.showResizeNWSECursor(e)
			else this.showResizeNESWCursor(e)
		} else if (edges.x) this.showResizeXCursor(e)
		else if (edges.y) this.showResizeYCursor(e)
	}
	handleMouseMove(e) {
		// must be on x edge but within y bounds and vice versa
		this.showResizeCursorIfOnAnEdge(e)
		if ((this.resizingX || this.resizingY) && this.notStartedResizing) {
			this.handleResize(e)
			this.notStartedResizing = false
		}
	}
	handleMouseOver(e) {
		if (this.dragging) {
			if (this.resizingX || this.resizingY) this.handleResize(e)
			else this.translateSection(e)
		}
	}
	handleMouseLeave(e) {
		e.target.style.cursor = 'default'
	}
	handleMouseUp(e) {
		const x1 = Number(e.target.getAttribute('x'))
		const y1 = Number(e.target.getAttribute('y'))

		if (this.dragging) {
			this.dragging = false
			const startPosEqualsEndPos = this.x0 === x1 && this.y0 === y1
			if (startPosEqualsEndPos && this.selectingASection) this.selectSectionByCell(x1, y1)
			this.colorGrid()
			this.setNotResizing()
		}
	}
	handleMouseDown(e) {
		e.preventDefault()
		this.dragging = true
		this.x0 = Number(e.target.getAttribute('x'))
		this.y0 = Number(e.target.getAttribute('y'))
		const edges = this.sectionEdgesHoveredOver(e)

		if (edges.x || edges.y) {
			this.notStartedResizing = true

			this.edgesBeingMoved = {}
			if (edges.x) {
				this.edgesBeingMoved.x = edges.x.id
				this.resizingX = edges
			}

			if (edges.y) {
				this.edgesBeingMoved.y = edges.y.id
				this.resizingY = edges
			}
		} else if (this.selectingASection) this.selectSectionByCell(this.x0, this.y1)
		else this.createSection(this.x0, this.y0)
	}
	deleteSection() {
		delete this.sections[this.selectedSectionIndex]
		this.selectedSectionIndex--
		this.selectSection(this.selectedSectionIndex)
		this.y1 = undefined
		this.x1 = undefined
		this.colorGrid()
	}
	toggleFullscreen() {
		this.container.classList.toggle('fullscreen')
	}
	handleKeyDown(e) {
		if (e.key === 'Tab') {
			e.preventDefault()
			toggleEditMode.switchModes()
		} else if (e.key === 'f') {
			this.toggleFullscreen()
		}
		if (toggleEditMode.mode === 'grid') {
			if (e.key === 'Backspace') this.deleteSection()
		}
	}
	getCell(x, y) {
		return document.getElementById(`${this.x0},${this.y0}`)
	}
	get selectingASection() {
		return this.getCell(this.x0, this.y0).getAttribute('section-id')
	}
	selectSectionByCell(x, y) {
		this.selectSection(Number(this.getCell(x, y).getAttribute('section-id')))
	}
	selectSection(index) {
		this.selectedSectionIndex = index
		this.colorGrid()
	}
	createSection(x1, y1) {
		let sectionOptions = {}
		// Necessary to override the assignment of /this/ to /sectionOptions/ of x1 and y1 because otherwise these
		// x1 and y1 values will be overwritten by the explicit undefined values once a section is deleted.
		Object.assign(sectionOptions, this)
		Object.assign(sectionOptions, {
			x1,
			y1,
			color: this.colors.shift(),
			id: !this.sections[0] ? 0 : this.sections.length
		})
		this.selectedSectionIndex = !this.sections[0] ? 0 : this.sections.length
		this.sections[sectionOptions.id] = new Section(sectionOptions)
		this.resizingX = true
		this.resizingY = true
		this.edgesBeingMoved = { y: 1, x: 1 }
		this.colorGrid()
	}
	stopDraggingIfMouseLeavesPage() {
		this.container.onmouseleave = (e) => {
			if (this.dragging) this.clearSelection
			this.dragging = false
		}
	}
	createGridCell(x, y) {
		let div = document.createElement('div')
		div.className = 'grid-cell'
		div.onmousemove = (e) => this.handleMouseMove(e)
		div.onmousedown = (e) => this.handleMouseDown(e)
		div.onmouseover = (e) => this.handleMouseOver(e)
		div.onmouseleave = (e) => this.handleMouseLeave(e)
		div.onmouseup = (e) => this.handleMouseUp(e)

		div.setAttribute('x', x)
		div.setAttribute('y', y)
		div.id = `${x},${y}`
		this.container.appendChild(div)
	}
	createGrid(rows, cols) {
		this.stopDraggingIfMouseLeavesPage()
		this.defaultCellArray = []
		for (let y = 0; y < rows; y++) {
			for (let x = 0; x < cols; x++) {
				this.createGridCell(x, y)
				this.defaultCellArray.push([])
			}
		}
		// grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
		// grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
		let colString = ''
		for (let i = 0; i < grid.xMaxCells; i++) {
			colString += '1fr '
		}
		let rowString = ''
		for (let i = 0; i < grid.yMaxCells; i++) {
			rowString += '1fr '
		}
		this.container.style.gridTemplateColumns = colString
		this.container.style.gridTemplateRows = rowString
		document.onkeydown = (e) => this.handleKeyDown(e)
	}
	clearContainer() {
		while (this.container.lastChild) {
			this.container.removeChild(this.container.lastChild)
		}
	}
	setGridEditingMode() {
		this.clearContainer()
		this.createGrid(this.yMaxCells, this.xMaxCells)
		this.colorGrid()
	}
	setContentEditingMode() {
		this.clearContainer()
		if (!this.contentGrid) this.contentGrid = new ContentGrid(this)
		else this.contentGrid.createDivs()
	}
	reCaclculateEdges() {
		grid.sections.forEach((section) => {
			console.log('recalc', section)
			section.calculateEdges()
		})
	}
	handleResizingWindow() {
		window.onresize = () => {
			if (this.timeout) window.clearTimeout(this.timeout)
			this.timeout = window.setTimeout(() => {
				this.reCaclculateEdges()
				this.timeout = undefined
			}, 500)
		}
	}
}

class Section {
	constructor(options) {
		Object.assign(this, options)
		this.generateCells()
		this.setUpOptionsButtons()
	}
	calculateEdges() {
		const findEdges = (start, end, cellLength, pxMin) => [
			pxMin + start * cellLength,
			pxMin + (end + 1) * cellLength
		]
		this.edges = {
			x: findEdges(this.x0, this.x1, grid.cellWidth, grid.pxXMin),
			y: findEdges(this.y0, this.y1, grid.cellHeight, grid.pxYMin)
		}
	}
	generateCells(coords) {
		if (coords) Object.assign(this, coords)
		this.gridCells = []
		this.x0 = Math.min(this.x0, this.x1)
		this.x1 = Math.max(this.x0, this.x1)
		this.y0 = Math.min(this.y0, this.y1)
		this.y1 = Math.max(this.y0, this.y1)
		for (let x = this.x0; x <= this.x1; x++) {
			for (let y = this.y0; y <= this.y1; y++) {
				this.gridCells.push(`${x},${y}`)
			}
		}
		this.width = this.x1 - this.x0 + 1
		this.height = this.y1 - this.y0 + 1
		Object.assign(this.gridCells, this.sectionCells)
		this.calculateEdges()
	}
	addLink(link) {
		grid.contentGrid.selectedSection.link = link
		grid.contentGrid.deleteNode(grid.contentGrid.selectedSection.element)
		grid.contentGrid.createDiv()
		grid.contentGrid.setHTMLForAllSections()
	}
	handleClickLink() {
		// const link = prompt('Enter URL')
		const link = 'www.google.com'
		let regex = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)\S+(?:[^\s`!\[\]{};:'".,?«»“”‘’]))/gi
		if (regex.test(link)) this.addLink(link)
		else alert("Error: That URL doesn't seem correct.")
	}
	setUpOptionsButtons() {
		document.getElementById('link').onclick = () => this.handleClickLink()
	}
	askContentType() {
		console.log('ask')
	}
}

class ToggleEditMode {
	constructor() {
		this.setUp()
		this.mode = 'grid'
	}
	switchModes() {
		if (this.mode === 'grid') {
			this.mode = 'content'
			grid.setContentEditingMode()
			grid.contentGrid.selectSection(grid.selectedSection)
		} else {
			this.mode = 'grid'
			grid.setGridEditingMode()
			grid.selectSection(grid.contentGrid.selectedSectionIndex)
		}
	}
	setUp() {
		let btn = document.getElementById('edit-mode-toggle')
		btn.onclick = (e) => {
			this.switchModes()
		}
	}
}

class ContentGrid {
	constructor(grid) {
		Object.assign(this, grid)
		this.introText = `# Headline\nBody text goes here`
		this.createDivs()
	}
	get selectedSection() {
		return this.sections[this.selectedSectionIndex]
	}
	createDivs() {
		this.sections.forEach((section) => this.createDiv(section))
		this.setHTMLForAllSections()
	}
	deleteNode(node) {
		grid.container.removeChild(node)
	}
	setHTMLForAllSections() {
		this.sections.forEach((section) => {
			if (!section.html) this.renderPreview(section, section.content)
			this.setHTML(section)
		})
	}
	setHTML(section) {
		section.innerContent.innerHTML = section.html
	}
	renderPreview(section = this.selectedSection, render = simplemde.value()) {
		section.html = simplemde.options.previewRender(render)
		this.setHTML(section)
	}
	selectSection(section = this.selectedSection) {
		if (!section) return
		this.sections.forEach((section) => section.element.classList.remove('selected'))
		section.element.classList.add('selected')
		this.selectedSectionIndex = section.id
		if (!section.contentType) section.askContentType()
		// this.setEditorToSelectedSection()
	}
	// setEditorToSelectedSection() {
	// 	simplemde.value(this.selectedSection.content)
	//   this.renderPreview()
	// }
	handleEdit() {
		if (simplemde.value()) {
			this.selectedSection.content = simplemde.value()
			this.renderPreview()
		}
	}
	handleClick(e, section) {
		e.preventDefault()
		this.selectSection(section)
	}
	createDiv(section = this.selectedSection) {
		let div = document.createElement('div')

		// if section is linked, wrap in a link tag rather than a div
		if (section.link) {
			div = document.createElement('a')
			div.setAttribute('href', section.link)
		}

		div.className = 'section'
		div.style = ` background-color: ${section.color};
                  grid-column-start: ${section.x0 + 1};
                  grid-column-end: ${section.x1 + 2};
                  grid-row-start: ${section.y0 + 1};
                  grid-row-end: ${section.y1 + 2};`

		let innerContentDiv = document.createElement('div')
		innerContentDiv.className = 'inner-content'
		section.innerContent = innerContentDiv
		div.appendChild(innerContentDiv)

		section.element = div
		div.onclick = (e) => this.handleClick(e, section)
		grid.container.onclick = () => {}
		grid.container.appendChild(div)

		// simplemde.codemirror.on('changes', () => this.handleEdit())
	}
}

const simplemde = new SimpleMDE({ element: document.getElementById('editor') })
let toggleEditMode = new ToggleEditMode()
const grid = new Grid()

grid.x0 = 0
grid.y0 = 0
// grid.createSection(6, 6)
console.log(grid.sections)

// toggleEditMode.switchModes()

class Preview {
	constructor() {
		this.setUpButton()
	}
	handleClick(e) {
		this.toggleFullscreen()
	}
	setUpButton() {
		const button = document.getElementById('preview')
		button.onclick = (e) => this.handleClick(e)
	}
	toggleFullscreen() {
		grid.container.classList.toggle('fullscreen')
	}
}

new Preview()
