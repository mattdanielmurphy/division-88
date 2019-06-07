class Grid {
	constructor() {
		// these will change when centering grid on screen (for large desktop views)
		this.pxXMin = 0
		this.pxYMin = 0
		this.pxXMax = window.innerWidth
		this.pxYMax = window.innerHeight

		this.pxWidth = this.pxXMax - this.pxXMin
		this.pxHeight = this.pxYMax - this.pxYMin
		this.xMaxCells = 9
		this.yMaxCells = 9
		this.cellWidth = this.pxWidth / this.xMaxCells
		this.cellHeight = this.pxHeight / this.yMaxCells

		this.sections = []
		this.selectedSectionIndex = undefined
		this.createGrid(this.xMaxCells, this.yMaxCells)
		Object.assign(this, { dragging: false, x0: undefined, y0: undefined, sections: [] })
		let colors = '#f3d762 #bf9651 #769a55 #cb5e31 #8e393d #7a4962 #5e4531 #8ec3cf #867696 #456e51 #3d6286 #353d5a #232e32 #41292d #110b11'.split(
			' '
		)
		this.colors = this.shuffle(colors)
		this.selectedCells = []
		this.gridCells = []
		this.colorGrid()
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
	calculateEdgesOfSection(section) {
		let { x0, y0, x1, y1 } = section
		const findEdges = (start, end, cellLength) => [ start * cellLength, (end + 1) * cellLength ]
		section.edges = { x: findEdges(x0, x1, this.cellWidth), y: findEdges(y0, y1, this.cellHeight) }
		return section
	}
	get container() {
		return document.getElementsByClassName('grid')[0]
	}
	colorGrid() {
		for (let x = 0; x < this.xMaxCells; x++) {
			for (let y = 0; y < this.yMaxCells; y++) {
				const cell = document.getElementById(`${x},${y}`)
				if (this.dragging && this.selectedCells[x] && this.selectedCells[x][y]) cell.classList.add('selected')
				else if (this.gridCells[x] && this.gridCells[x][y] !== undefined) {
					const sectionIndex = this.gridCells[x][y]

					if (sectionIndex === this.selectedSectionIndex) cell.classList.add('selected-section')
					else if (cell.classList.contains('selected-section')) cell.classList.remove('selected-section')

					cell.style.backgroundColor = this.sections[sectionIndex].color
				} else cell.classList.remove('selected')
			}
		}
	}
	clearSelection() {
		this.selectedCells = []
	}
	makeSelection(x1, y1) {
		this.clearSelection()
		for (let x = this.x0; x <= x1; x++)
			for (let y = this.y0; y <= y1; y++) {
				if (!this.selectedCells[x]) this.selectedCells[x] = []
				this.selectedCells[x][y] = true
			}
		this.colorGrid()
	}
	handleXResizeHover(e) {
		e.target.style.cursor = 'ew-resize'
		this.resizingX = true
		this.x1 = e.target.getAttribute('x')
		this.y1 = e.target.getAttribute('y')
	}
	handleYResizing(e) {
		e.target.style.cursor = 'ns-resize'
		this.resizingY = true
	}
	setNotResizing(e) {
		e.target.style.cursor = 'pointer'
		this.resizingX = false
		this.resizingY = false
	}
	handleResize(e, cursorX, cursorY) {
		// just worry about x for now
		// need to handle: if section is bigger or smaller
		// x-axis edges of section show min and max
		const sectionX0 = this.selectedSection.x0
		const sectionX1 = this.selectedSection.x1
		const sectionY0 = this.selectedSection.y0
		const sectionY1 = this.selectedSection.y1

		const cursorOnXEdge = this.cursorOnXEdge(e)
		const cursorOnYEdge = this.cursorOnYEdge(e)
		// only count resizing into another grid cell if cursor has moved past original edge (otherwise can resize just by clicking outside original section near edge)
		if ((this.resizingX && !cursorOnXEdge) || (this.resizingY && !cursorOnYEdge)) {
			if (!this.gridCells[cursorX]) this.gridCells[cursorX] = []
			this.gridCells[cursorX][cursorY] = this.selectedSectionIndex

			const modifiedSection = this.selectedSection

			if (this.resizingX) {
				if (cursorX > sectionX1) modifiedSection.x1 = cursorX
				else if (cursorX < sectionX0) modifiedSection.x0 = cursorX
			}

			if (this.resizingY) {
				if (cursorY > sectionY1) modifiedSection.y1 = cursorY
				else if (cursorY < sectionY0) modifiedSection.y0 = cursorY
			}

			this.selectedSection.createSection()
			this.selectedSection = this.calculateEdgesOfSection(modifiedSection)
		}
		this.colorGrid()
		this.setNotResizing(e)
	}
	cursorOnXEdge(e) {
		return this.currentSectionEdges.x.some((edge) => Math.abs(edge - e.pageX) < 20)
	}
	cursorOnYEdge(e) {
		return this.currentSectionEdges.y.some((edge) => Math.abs(edge - e.pageY) < 20)
	}
	handleMouseMove(e) {
		// must be on x edge but within y bounds and vice versa
		const withinYBounds = e.pageY >= this.currentSectionEdges.y[0] && e.pageY <= this.currentSectionEdges.y[1]
		const withinXBounds = e.pageX >= this.currentSectionEdges.x[0] && e.pageX <= this.currentSectionEdges.x[1]
		const cursorOnXEdge = this.cursorOnXEdge(e)
		const cursorOnYEdge = this.cursorOnYEdge(e)
		if (cursorOnXEdge && withinYBounds) this.handleXResizeHover(e)
		else if (cursorOnYEdge && withinXBounds) this.handleYResizing(e)
		else if (!this.dragging) this.setNotResizing(e)
	}
	handleMouseOver(e) {
		// e.target.style.cursor = 'pointer'
		const x = e.target.getAttribute('x')
		const y = e.target.getAttribute('y')
		if (this.dragging) {
			if (!this.resizingX && !this.resizingY) this.makeSelection(x, y)
			else {
				console.log(x, y)
			}
		}
	}
	handleMouseLeave(e) {
		e.target.style.cursor = 'default'
	}
	handleMouseDown(e) {
		this.dragging = true
		this.x0 = Number(e.target.getAttribute('x'))
		this.y0 = Number(e.target.getAttribute('y'))

		if (this.resizingX || this.resizingY) console.log('resizing')
		else if (this.gridCells[this.x0] && this.gridCells[this.x0][this.y0] !== undefined) {
			this.selectingSection = this.gridCells[this.x0][this.y0]
			console.log('selecting grid section', this.gridCells[this.x0][this.y0])
		} else this.makeSelection(e.target.getAttribute('x'), e.target.getAttribute('y'))
	}
	createSection(x1, y1) {
		console.log('creating section...')
		const sectionOptions = {
			x0: this.x0,
			y0: this.y0,
			x1,
			y1,
			color: this.colors.shift(),
			id: !this.sections[0] ? 0 : this.sections.length,
			gridCells: this.gridCells
		}
		const sectionWithEdges = this.calculateEdgesOfSection(new Section(sectionOptions))
		this.selectedSectionIndex = !this.sections[0] ? 0 : this.sections.length
		this.sections.push(sectionWithEdges)

		this.gridCells = sectionWithEdges.gridCells
	}
	handleMouseUp(e) {
		const x1 = Number(e.target.getAttribute('x'))
		const y1 = Number(e.target.getAttribute('y'))

		if (this.dragging) {
			this.dragging = false

			// if currently selecting something and isn't dragging (start pos==end pos)
			if (this.selectingSection !== undefined && this.x0 === x1 && this.y0 === y1) {
				this.selectedSectionIndex = this.selectingSection
				this.selectingSection = undefined
				console.log('select section')
			} else if (this.resizingX || this.resizingY) this.handleResize(e, x1, y1)
			else this.createSection(x1, y1)
			this.colorGrid()
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
	stopDraggingIfMouseLeavesPage() {
		this.container.onmouseleave = (e) => {
			if (this.dragging) this.clearSelection
			this.dragging = false
		}
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
	}
}

class Section {
	constructor(options) {
		Object.assign(this, options)
		this.createSection()
	}
	createSection() {
		for (let x = this.x0; x <= this.x1; x++) {
			for (let y = this.y0; y <= this.y1; y++) {
				if (!this.gridCells[x]) this.gridCells[x] = []
				this.gridCells[x][y] = this.id
			}
		}
	}
	handleMouseOver(e) {}
}

new Grid()
