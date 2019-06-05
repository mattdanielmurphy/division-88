require('hammerjs')
let Muuri = require('muuri')
let grid = new Muuri('.grid', {
	dragEnabled: true,
	layoutOnInit: false
}).on('move', function() {
	saveLayout(grid)
})

var layout = window.localStorage.getItem('layout')
if (layout) {
	loadLayout(grid, layout)
} else {
	grid.layout(true)
}
// }

function serializeLayout(grid) {
	var itemIds = grid.getItems().map(function(item) {
		return item.getElement().getAttribute('data-id')
	})
	return JSON.stringify(itemIds)
}

function saveLayout(grid) {
	var layout = serializeLayout(grid)
	window.localStorage.setItem('layout', layout)
}

function loadLayout(grid, serializedLayout) {
	var layout = JSON.parse(serializedLayout)
	var currentItems = grid.getItems()
	var currentItemIds = currentItems.map(function(item) {
		return item.getElement().getAttribute('data-id')
	})
	var newItems = []
	var itemId
	var itemIndex

	for (var i = 0; i < layout.length; i++) {
		itemId = layout[i]
		itemIndex = currentItemIds.indexOf(itemId)
		if (itemIndex > -1) {
			newItems.push(currentItems[itemIndex])
		}
	}

	grid.sort(newItems, { layout: 'instant' })
}

function makeResizable() {
	// needs work
	let allItems = document.getElementsByClassName('item')
	for (let i = 0; i < allItems.length; i++) {
		let item = allItems[i]
		console.log(item)
		item.addEventListener('drag', (e) => {})
		item.addEventListener('click', (e) => {
			let block = e.target.parentNode
			let dragging = block.classList.contains('muuri-item-releasing')
			if (!dragging) {
				block.classList.toggle('item-lg')
				grid.refreshItems()
				grid.layout(true)
			}
		})
	}
}

class AddNewBlockButtons {
	get nextId() {
		return grid.getItems().length + 1
	}
	deleteBlock(e) {
		grid.remove([ e.target.parentNode ], { removeElements: true })
	}
	createDeleteButton(id) {
		let button = document.createElement('button')
		button.innerText = `delete`
		button.className = 'delete'
		button.addEventListener('click', (e) => this.deleteBlock(e))
		return button
	}
	addNewBlock(w, h) {
		let blockId = this.nextId
		let itemContainer = document.createElement('div')
		itemContainer.className = `item w-${w} h-${h}`
		itemContainer.setAttribute('data-id', this.nextId)

		let itemContent = document.createElement('div')
		itemContent.innerText = blockId
		itemContent.className = 'item-content'
		itemContainer.appendChild(itemContent)
		itemContainer.appendChild(this.createDeleteButton(blockId))

		document.getElementsByClassName('grid')[0].appendChild(itemContainer)

		grid.add(itemContainer)
		grid.refreshItems()
		grid.layout(true)
	}
	createButton(w, h) {
		let button = document.createElement('button')
		button.innerText = `Add ${w}x${h}`
		button.addEventListener('click', () => this.addNewBlock(w, h))
		return button
	}
	createButtons() {
		let container = document.getElementById('add-blocks')
		container.appendChild(this.createButton(1, 1))
		container.appendChild(this.createButton(1, 2))
		container.appendChild(this.createButton(2, 1))
		container.appendChild(this.createButton(2, 2))
	}
}

class AddBlock {
	constructor() {
		this.genGrid()
		this.startX
		this.endX
		this.startY
		this.endY
	}
	get nextId() {
		return grid.getItems().length + 1
	}
	deleteBlock(e) {
		grid.remove([ e.target.parentNode ], { removeElements: true })
	}
	createDeleteButton(id) {
		let button = document.createElement('button')
		button.innerText = `delete`
		button.className = 'delete'
		button.addEventListener('click', (e) => this.deleteBlock(e))
		return button
	}
	addNewBlock(w, h) {
		let blockId = this.nextId
		let itemContainer = document.createElement('div')
		itemContainer.className = `item w-${w} h-${h}`
		itemContainer.setAttribute('data-id', this.nextId)

		let itemContent = document.createElement('div')
		itemContent.innerText = blockId
		itemContent.className = 'item-content'
		itemContainer.appendChild(itemContent)
		itemContainer.appendChild(this.createDeleteButton(blockId))

		document.getElementsByClassName('grid')[0].appendChild(itemContainer)

		grid.add(itemContainer)
		grid.refreshItems()
		grid.layout(true)
	}
	handleMouseDown(x, y) {
		this.startX = x
		this.startY = y
		e.target.classList.add('active')
	}
	handleMouseUp(x, y) {
		this.endX = x
		this.endY = y
		const w = this.endX - this.startX + 1
		const h = this.endY - this.startY + 1
		this.addNewBlock(w, h)
		let gridItems = document.getElementsByClassName('grid-item')
		for (let i = 0; i < gridItems.length; i++) {
			gridItems[i].classList.remove('active')
		}
	}
	handleMouseOver(e) {
		e.target.classList.add('hover')
	}
	handleMouseLeave(e) {
		e.target.classList.remove('hover')
	}
	genGrid() {
		let container = document.getElementById('add-block')
		for (let y = 1; y < 6; y++) {
			let row = document.createElement('div')
			row.className = 'grid-row'
			for (let x = 1; x < 6; x++) {
				let div = document.createElement('div')
				div.className = `grid-item ${x}${y}`
				div.addEventListener('mousedown', () => this.handleMouseDown(x, y))
				div.addEventListener('mouseup', () => this.handleMouseUp(x, y))
				div.addEventListener('mouseover', (e) => this.handleMouseOver(e))
				div.addEventListener('mouseleave', (e) => this.handleMouseLeave(e))
				row.appendChild(div)
			}
			container.appendChild(row)
		}
	}
}

let addBlock = new AddBlock()
addBlock.addNewBlock(1, 1)
addBlock.addNewBlock(1, 1)
addBlock.addNewBlock(1, 1)
addBlock.addNewBlock(1, 1)
addBlock.addNewBlock(1, 1)

let clearAllButton = document.getElementById('clear-all')
clearAllButton.addEventListener('click', () => {
	let items = grid.getItems()
	grid.remove(items, { removeElements: true })
})
