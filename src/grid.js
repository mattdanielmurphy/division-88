// TODO
// 1. fix resizing bug (see screen recording on Desktop)
let Quill = require('quill')
let { ContentGrid } = require('./ContentGrid')

class Grid {
	constructor() {
		this.xMaxCells = 9
		this.yMaxPageCells = 9
		this.yCells = 9

		this.sections = { length: () => this.sections.length }
		this.selectedSectionIndex = undefined
		this.createGrid(this.xMaxCells, this.yMaxPageCells)
		Object.assign(this, { dragging: false, x0: undefined, y0: undefined, sections: [] })
		let colors = '#ffffff #6df7c1 #11adc1 #606c81 #393457 #1e8875 #5bb361 #a1e55a #f7e476 #f99252 #cb4d68 #6a3771 #c92464 #f48cb6 #f7b69e #9b9c82'.split(
			' '
		)
		this.colors = this.shuffle(colors)
		this.colorGrid()
		this.handleResizingWindow()
		this.stopDraggingIfMouseLeavesPage()
		this.genRowsOnScroll()
		this.highestYCells = []
		this.setUpClickAnywhere()
	}
	setUpClickAnywhere() {
		const handleClickAnywhere = (e) => {
			// deselect all sections
			if (toggleEditMode.mode === 'grid') return
			this.contentGrid.selectSection()
			if (this.contentGrid.selectedSection) this.contentGrid.selectedSection.selected = false
			this.contentGrid.selectedSectionIndex = undefined
		}
		document.body.addEventListener('click', () => handleClickAnywhere(), true)
	}
	get nextSectionId() {
		this.nextSectionIdNumber = this.nextSectionIdNumber ? this.nextSectionIdNumber + 1 : 0
		return this.nextSectionIdNumber
	}
	addRows() {
		// add 3 rows
		const cols = this.yMaxPageCells
		const totalRows = this.yCells + 3
		for (this.yCells; this.yCells < totalRows; this.yCells++)
			for (let x = 0; x < cols; x++) this.createGridCell(x, this.yCells)

		this.container.style.height = `${this.yCells * this.cellWidth}px`
		this.colorGrid()
	}
	genRowsOnScroll() {
		window.onscroll = (ev) => {
			if (toggleEditMode.mode === 'grid' && window.innerHeight + window.scrollY >= document.body.offsetHeight)
				this.addRows()
		}
	}
	get pxXMin() {
		return this.container.getBoundingClientRect().left
	}
	get pxYMin() {
		// return 35
		return this.container.getBoundingClientRect().top
	}
	get pxXMax() {
		return this.container.getBoundingClientRect().right
	}
	get pxYMax() {
		return window.innerHeight
		// return this.container.getBoundingClientRect().bottom
	}
	get cellWidth() {
		return this.pxWidth / this.xMaxCells
	}
	get cellHeight() {
		return this.pxHeight / this.yMaxPageCells
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
			cells[i].removeAttribute('section-index')
			cells[i].classList.remove('selected', 'section-cell')
		}

		Object.values(this.sections).forEach((section) => {
			section.gridCells.forEach((coordString) => {
				let [ x, y ] = coordString.split(',')
				const cell = document.getElementById(`${x},${y}`)
				cell.style.backgroundColor = section.color
				cell.classList.add('section-cell')

				if (section.index == this.selectedSectionIndex) cell.classList.add('selected')
				else this.nonSelectedSectionCells[`${x},${y}`] = true
				cell.setAttribute('section-index', section.index)
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
			if (this.newSectionCanExistHere(x0, x1, y0, y1)) {
				modifiedSection['y' + this.edgesBeingMoved.y] = cursorY
				console.log(y1)
				if (y1 > this.yMaxPageCells) this.highestYCells.push(`${x1},${y1}`)
			}
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
			edges.x = { pos: cursorOnXEdgePos, index: cursorOnXEdgeId }
		}

		if (cursorOnYEdgePos !== undefined && withinXBounds) {
			edges.y = { pos: cursorOnYEdgePos, index: cursorOnYEdgeId }
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
		if (y0 + yDifference >= 0 && y1 + yDifference < this.yCells) {
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
			if (edges.x.index === edges.y.index) this.showResizeNWSECursor(e)
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
				this.edgesBeingMoved.x = edges.x.index
				this.resizingX = edges
			}

			if (edges.y) {
				this.edgesBeingMoved.y = edges.y.index
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
		return this.getCell(this.x0, this.y0).getAttribute('section-index')
	}
	selectSectionByCell(x, y) {
		this.selectSection(Number(this.getCell(x, y).getAttribute('section-index')))
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
			index: !this.sections[0] ? 0 : this.sections.length,
			id: this.nextSectionId
		})
		this.selectedSectionIndex = !this.sections[0] ? 0 : this.sections.length
		this.sections[sectionOptions.index] = new Section(sectionOptions)
		this.resizingX = true
		this.resizingY = true
		this.edgesBeingMoved = { y: 1, x: 1 }
		this.colorGrid()
		if (y1 >= this.yMaxPageCells) this.highestYCells.push(`${x1},${y1}`)
		console.log(this.highestYCells)
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
		for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) this.createGridCell(x, y)

		let colString = ''
		for (let i = 0; i < this.xMaxCells; i++) colString += '1fr '
		this.container.style.gridTemplateColumns = colString
		let rowString = ''
		for (let i = 0; i < this.yCells; i++) rowString += `${this.cellHeight}px `
		this.container.style.gridTemplateRows = rowString
		console.log(this.yCells)
		this.container.style.height = `${this.yCells * this.cellWidth}px`
		document.onkeydown = (e) => this.handleKeyDown(e)
	}
	clearContainer() {
		while (this.container.lastChild) {
			this.container.removeChild(this.container.lastChild)
		}
	}
	setGridEditingMode() {
		this.clearContainer()
		this.createGrid(this.yCells, this.xMaxCells)
		this.colorGrid()
	}
	setContentEditingMode() {
		this.clearContainer()
		if (!this.contentGrid) this.contentGrid = new ContentGrid(this)
		else this.contentGrid.createDivs()
	}
	reCaclculateEdges() {
		grid.sections.forEach((section) => {
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
		grid.contentGrid.createSectionDiv()
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
	setUpTextEditor() {
		let editor = document.createElement('div')
		editor.index = 'editor'
		this.innerContent.appendChild(editor)
		this.quill = new Quill('#editor', {
			theme: 'snow'
		})
	}
}

class ToggleEditMode {
	constructor() {
		this.setUp()
		this.mode = 'grid'
	}
	trimUnusedRows() {
		let highestRowUsed = 9
		grid.highestYCells.forEach((cell) => {
			cell = document.getElementById(cell)

			let cellIsStillPartOfSection = cell.classList.contains('section-cell')
			if (cellIsStillPartOfSection) {
				let y = Number(cell.getAttribute('y'))
				if (highestRowUsed < y) highestRowUsed = y
			}
		})
		grid.yCells = highestRowUsed
		grid.createGrid(grid.yCells, grid.xMaxCells)
		console.log(highestRowUsed)
	}
	switchModes() {
		grid.container.classList.toggle('content-mode')
		if (this.mode === 'grid') {
			this.trimUnusedRows()
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

let toggleEditMode = new ToggleEditMode()
const grid = new Grid()

grid.x0 = 0
grid.y0 = 0
grid.createSection(6, 4)
grid.setNotResizing()

toggleEditMode.switchModes()
