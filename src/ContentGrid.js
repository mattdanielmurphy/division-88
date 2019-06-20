const iro = require('@jaames/iro').default
const colorPicker = new iro.ColorPicker('#color-picker-container')

class ContentGrid {
	constructor(grid) {
		this.grid = grid
		Object.assign(this, grid)
		this.introText = `# Headline\nBody text goes here`
		this.createDivs()
	}
	get selectedSection() {
		return this.sections[this.selectedSectionIndex]
	}
	topOfElement(element) {
		return (
			element.getBoundingClientRect().top + window.pageYOffset - element.ownerDocument.documentElement.clientTop
		)
	}
	createDivs() {
		this.sections.forEach((section) => this.createSectionDiv(section))
	}
	deleteNode(node) {
		this.grid.container.removeChild(node)
	}
	selectSection(selectedSection) {
		this.sections.forEach((section) => {
			section.element.classList.remove('selected')
			if (selectedSection) section.element.classList.add('not-selected')
			else section.element.classList.remove('not-selected')
		})
		if (selectedSection) {
			selectedSection.element.classList.remove('not-selected')
			selectedSection.element.classList.add('selected')
			this.selectedSectionIndex = selectedSection.index
		}
	}
	handleClickSection(e, section) {
		e.preventDefault()
		this.selectSection(section)
		if (e.target.tagName !== 'TEXTAREA') this.selected = false
	}
	handleTextareaClick(e) {
		if (!this.textareaMoved) {
			// if selected a second click edits the text
			if (this.selected) {
				this.inputSelected = true
				e.target.select()
				e.target.style.cursor = 'text'
			} else {
				this.selected = true
				console.log(e.target)
			}
		}
	}
	handleTextareaMouseDown(e) {
		if (!this.selected) {
			this.textareaMoved = false
			e.preventDefault()
			this.movingTextarea = e.target
			this.startingPos = e.pageY
		}
	}
	handleTextareaMouseOver(e) {
		if (!this.selected) e.target.style.cursor = 'move'
	}
	handleSectionMouseMove(e, section) {
		if (this.movingTextarea) {
			let cursorPosFromTopOfSection = e.pageY - this.topOfElement(section.element)
			let textContainer = this.movingTextarea.parentNode
			if (!this.textareaMoved) this.cursorPosFromTopOfTextContainer = e.pageY - this.topOfElement(textContainer)
			let sectionHeight = section.element.offsetHeight
			let top = cursorPosFromTopOfSection - this.cursorPosFromTopOfTextContainer
			// since setting the value of the top of the section (and not where the cursor actually is grabbing)
			// need to subtract distance from top of textbox
			const topPercentage = top / sectionHeight * 100 + '%'
			textContainer.style.top = topPercentage
			textContainer.style.transform = 'none'
			this.textareaMoved = true
			// set section.content to this section element
			let newSectionEl = e.target.parentNode.parentNode
			this.selectedSection.content = newSectionEl
		}
	}
	handleSectionMouseUp(e) {
		this.movingTextarea = false
	}
	displayContent(section) {
		return section.content
	}
	createTextarea(innerText, className) {
		const el = this.createElement('textarea', innerText, className)
		el.onclick = (e) => this.handleTextareaClick(e)
		el.onmousedown = (e) => this.handleTextareaMouseDown(e)
		el.onmouseover = (e) => this.handleTextareaMouseOver(e)
		return el
	}
	setTemplate(section, template) {
		const div = document.createElement('div')
		this.templateSet = true

		div.onmousemove = (e) => this.handleSectionMouseMove(e, section)
		div.onmouseup = (e) => this.handleSectionMouseUp(e)

		let textNodes = []

		if (template === 'text-1') {
			let h1 = this.createTextarea('LITTLE FUX', `h1 section-${section.id}`)
			textNodes.push(h1)
			div.className = 'template text-1'
		} else if (template === 'text-2') {
			let h1 = this.createTextarea('LITTLE FUX', `h1 section-${section.id}`)
			let h2 = this.createTextarea('ALBUM RELEASED', `h2 section-${section.id}`)
			textNodes.push(h1, h2)
			div.className = 'template text-2'
		} else {
			div.className = 'template'
		}

		if (textNodes) {
			let textContainer = document.createElement('div')
			textContainer.className = 'text-container'
			textNodes.forEach((child) => textContainer.appendChild(child))
			div.appendChild(textContainer)
		}

		section.content = div

		for (let i = 0; i < section.element.childNodes.length; i++) {
			if (section.element.childNodes[i].classList.contains('ask-template')) {
				section.element.removeChild(section.element.childNodes[i])
			}
		}
		section.element.prepend(div)
	}
	askTemplate(section) {
		const div = document.createElement('div')
		div.innerHTML = `
    <h3>Choose a template:</h3>
    `
		div.className = 'ask-template'
		const template0 = document.createElement('div')
		template0.innerHTML = `<h4>Little Fux</h4>`
		template0.className = 'template text-1'
		template0.onclick = () => this.setTemplate(section, 'text-1')

		const template1 = document.createElement('div')
		template1.innerHTML = `<h4>Little Fux</h4><h5>Album released</h5>`
		template1.className = 'template text-2'
		template1.onclick = () => this.setTemplate(section, 'text-2')

		const template2 = document.createElement('div')
		template2.className = 'template-2'

		const template2Button = document.createElement('button')
		template2Button.innerText = 'No text'
		template2Button.className = 'button'
		template2Button.onclick = () => this.setTemplate(section, 'no-text')

		template2.appendChild(template2Button)

		div.appendChild(template0)
		div.appendChild(template1)
		div.appendChild(template2)
		return div
	}
	getSectionContent(section) {
		if (!section.content) {
			return this.askTemplate(section)
		} else {
			return this.displayContent(section)
		}
	}
	removeNodeFromElement(element, node) {
		element.removeChild(node)
	}
	async askBackgroundColor(section) {
		this.askColor(section, 'backgroundColor')
	}
	async askTextColor(section) {
		this.askColor(section, 'textColor')
	}
	updateColor(section, propertyName, color) {
		section[propertyName] = color
		this.applyToolbarOptions(section)
	}
	async askColor(section, propertyName) {
		let askColor = document.getElementById('ask-color')
		askColor.classList.remove('hidden')

		let cancelAskColor = document.getElementById('cancel-ask-color')
		cancelAskColor.onclick = () => this.removeNodeFromElement(section.element, askColor)
		colorPicker.on('color:change', () => {
			console.log(propertyName)
			this.updateColor(section, propertyName, colorPicker.color.hexString)
		})

		let form = document.getElementById('ask-color-form')
		let hexInput = document.getElementById('hex-input')
		hexInput.oninput = (e) => this.updateColor(section, propertyName, `#${e.target.value}`)

		let color = await new Promise((resolve, reject) => {
			form.onsubmit = (e) => {
				e.preventDefault()
				resolve()
			}
		})
		colorPicker.off('color:change')
		askColor.classList.add('hidden')
		return color
	}
	selectBackgroundImage(section) {
		section.backgroundColor = 'blue'
		this.applyToolbarOptions(section)
	}
	applyToolbarOptions(section) {
		if (section.backgroundColor) section.element.style.backgroundColor = section.backgroundColor
		if (section.textColor) section.element.style.color = section.textColor
		// let textareas = document.getElementsByClassName(`section-${section.id}`)
		// console.log(textareas)
		// for (let i = 0; i < textareas.length; i++) {
		// 	textareas[i].style.color = section.textColor
		// }
		// let styleEl = this.createElement(
		// 	'style',
		// 	`#section-${section.id} textarea { color:${section.textColor} }`,
		// 	{ type: 'text/css' }
		// )
		// document.head.appendChild(styleEl)
		// console.log(document.head.childNodes)
		// for (let i = 0; i < section.element.childNodes.length; i++) {
		// 	let template = section.element.childNodes[i]
		// 	if (template.classList.contains('template')) {
		// 		for (i = 0; i < template.childNodes.length; i++) {
		// 			console.log(template.childNodes[i])
		// 		}
		// 	}
		// }
	}
	createElement(elementName, innerHTML, properties) {
		let el = document.createElement(elementName)
		if (innerHTML) el.innerHTML = innerHTML
		if (properties) Object.entries(properties).forEach(([ property, value ]) => (el[property] = value))
		return el
	}
	createButton(innerHTML, onclick) {
		return this.createElement('button', innerHTML, { onclick })
	}
	createSectionToolbar(section) {
		let toolbar = document.createElement('div')
		toolbar.className = 'toolbar'
		let setBgColorButton = this.createButton('set bg color', () => this.askBackgroundColor(section))
		let setTextColorButton = this.createButton('set text color', () => this.askTextColor(section))
		let setBgImageButton = this.createButton('set bg image', () => this.selectBackgroundImage(section))
		toolbar.append(setBgColorButton, setTextColorButton, setBgImageButton)
		return toolbar
	}
	removeElementNodes(element) {
		while (element.lastChild) element.removeChild(element.lastChild)
	}
	clearContainer() {
		this.removeElementNodes(this.grid.container)
	}
	createSectionDiv(section = this.selectedSection) {
		let sectionEl = document.createElement('div')
		// if section is linked, wrap in a link tag rather than a div
		if (section.link) {
			sectionEl = document.createElement('a')
			sectionEl.setAttribute('href', section.link)
		}

		sectionEl.className = 'section'
		sectionEl.id = `section-${section.id}`
		sectionEl.style = ` grid-column-start: ${section.x0 + 1};
                  grid-column-end: ${section.x1 + 2};
                  grid-row-start: ${section.y0 + 1};
									grid-row-end: ${section.y1 + 2};`

		const innerContent = this.getSectionContent(section)

		sectionEl.appendChild(innerContent)
		const toolbar = this.createSectionToolbar(section)
		sectionEl.appendChild(toolbar)
		section.element = sectionEl
		sectionEl.onclick = (e) => this.handleClickSection(e, section)
		this.grid.container.onclick = () => {}
		this.grid.container.appendChild(sectionEl)

		this.applyToolbarOptions(section)

		// REMOVE
		if (!this.templateSet) this.setTemplate(section, 'text-1')
	}
}

module.exports = { ContentGrid }
