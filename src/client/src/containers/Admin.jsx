import React from 'react'
import { useRouteData } from 'react-static'
// import Auth0Lock from 'auth0-lock'

import NonAdminRoot from 'components/jsx/root/NonAdminRoot'
import AdminControls from 'components/jsx/admin-controls/AdminControls'
import PagePreview from 'components/jsx/index/PagePreview'

// // import * as log from 'loglevel'
// // log.warn('ultra-compatible')

// import 'styles/app.scss'

import Index from './AdminIndex'
import Artists from 'pages/artists'
import ProducerTools from '../pages/producer-tools'
import About from '../pages/about'
import axios from 'axios'
const env = require('../client-env')

class CellEditor extends React.Component {
	state = {}
	getCell = async (index) => {
		return await axios.get(`${env.apiUrl}/grids/index/cells/${index}`).then((r) => r.data)
	}
	updateCell = async (index, cell) => {
		const result = await axios.post(`${env.apiUrl}/grids/index/cells/${index}`, cell).then((r) => {
			this.setState({ cellFromDatabase: cell })
			this.props.refreshGrid()
			return r.data
		})
		return result
	}

	handleSubmit = async (e) => {
		e.preventDefault()
		// just submit this modified value
		const result = await axios
			.post(`${env.apiUrl}/grids/index/cells/${this.state.index}`, this.state.cell)
			.then((r) => {
				this.setState({ cellFromDatabase: this.state.cell, unsavedChanges: false })
				const cells = this.state.cells.slice()
				console.log(cells, this.state.index, cells[this.state.index])
				cells[this.state.index] = this.state.cell
				console.log('CELLS', cells)
				this.props.updateGrid({ cells })
				return r.data
			})
		return result
	}
	// handleKeyPress = (e) => {
	// 	// e.preventDefault()
	// 	if (e.key !== 'Enter') return
	// 	// just submit this modified value
	// 	const cell = Object.assign({}, this.state.cellFromDatabase)
	// 	let id = e.target.id
	// 	let value = e.target.value
	// 	function set(path, value) {
	// 		var schema = cell // a moving reference to internal objects within obj
	// 		var pList = path.split('.')
	// 		var len = pList.length
	// 		for (var i = 0; i < len - 1; i++) {
	// 			var elem = pList[i]
	// 			if (!schema[elem]) schema[elem] = {}
	// 			schema = schema[elem]
	// 		}

	// 		schema[pList[len - 1]] = value
	// 	}
	// 	set(id, value)
	// 	this.updateCell(this.state.index, cell)
	// }

	// handleRealTimeInputChange = (e) => {
	// 	const cell = Object.assign({}, this.state.cell)
	// 	let id = e.target.id
	// 	let value = e.target.value
	// 	function set(path, value) {
	// 		var schema = cell // a moving reference to internal objects within obj
	// 		var pList = path.split('.')
	// 		var len = pList.length
	// 		for (var i = 0; i < len - 1; i++) {
	// 			var elem = pList[i]
	// 			if (!schema[elem]) schema[elem] = {}
	// 			schema = schema[elem]
	// 		}

	// 		schema[pList[len - 1]] = value
	// 	}
	// 	set(id, value)
	// 	this.props.updateCell(this.state.index, cell)
	// 	// if (this.inputChangeInterval) clearInterval(this.inputChangeInterval)
	// 	// this.inputChangeInterval = setInterval(() => {
	// 	// 	valueToEdit = value
	// 	// 	this.updateCell(cell)
	// 	// }, 500)
	// }
	handleInputChange = (e) => {
		const cell = Object.assign({}, this.state.cell)
		let id = e.target.id
		let value = e.target.value
		function set(path, value) {
			var schema = cell // a moving reference to internal objects within obj
			var pList = path.split('.')
			var len = pList.length
			for (var i = 0; i < len - 1; i++) {
				var elem = pList[i]
				if (!schema[elem]) schema[elem] = {}
				schema = schema[elem]
			}

			schema[pList[len - 1]] = value
		}
		set(id, value)
		this.setState({ cell, unsavedChanges: true })
	}
	getCellsFromDatabase = async () => {
		return await axios.get(`${env.apiUrl}/grids/index/cells`).then((r) => r.data)
	}
	componentDidMount = async () => {
		const cell = await this.getCell(this.props.index)
		const cells = await this.getCellsFromDatabase()
		this.setState({ index: this.props.index, cell, cellFromDatabase: cell, cells })
		window.onbeforeunload = null
	}
	changeIndex = async (index) => {
		const cell = await this.getCell(index)
		this.setState({ index, cell, cellFromDatabase: cell, unsavedChanges: false })
	}
	newCell() {
		console.log('new cell')
		const obj = {
			newLayouts: {
				desktop: { w: 12, h: 4, x: 0, y: 0 },
				tablet: { w: 12, h: 4, x: 0, y: 0 },
				mobile: { w: 12, h: 4, x: 0, y: 0 }
			},
			newCell: {
				imgSrc: '/images/trees.jpg'
			}
		}
		axios.post(`${env.apiUrl}/grids/index/layouts/newCell`, obj).then((r) => {
			const { layouts, cells } = r.data
			this.props.updateGrid({ layouts, cells })
			this.changeIndex(r.data.index)
		})
	}
	deleteCell() {
		axios.get(`${env.apiUrl}/grids/index/cells/${this.state.index}/delete`).then((r) => {
			const { layouts, cells } = r.data
			this.props.updateGrid({ layouts, cells })
		})
	}
	componentDidUpdate = async (prevProps) => {
		// update index when a new cell is selected
		if (this.props.index !== prevProps.index) {
			if (this.state.unsavedChanges) {
				const discardChanges = confirm("You've made unsaved changes for this cell. Proceed and discard?")
				if (discardChanges) this.changeIndex()
			} else this.changeIndex(this.props.index)
		}
	}
	render = () =>
		this.state.cell ? (
			<div id="cell-editor">
				<div id="create-new">
					<button onClick={() => this.newCell()}>New</button>
				</div>

				<br />

				<form onSubmit={(e) => this.handleSubmit(e)}>
					<div className="cell-property-input">
						<label>image url</label>
						<input
							onKeyPress={(e) => this.handleKeyPress(e)}
							onChange={(e) => this.handleInputChange(e)}
							type="text"
							id="imgSrc"
							value={this.state.cell.imgSrc || ''}
						/>
					</div>
					<br />
					<div className="cell-property-input">
						<label>backgroundText: heading</label>
						<input
							onKeyPress={(e) => this.handleKeyPress(e)}
							onChange={(e) => this.handleInputChange(e)}
							type="text"
							id="backgroundText.heading"
							value={this.state.cell.backgroundText ? this.state.cell.backgroundText.heading || '' : ''}
						/>
					</div>
					<div className="cell-property-input">
						<label>backgroundText: subheading</label>
						<input
							onKeyPress={(e) => this.handleKeyPress(e)}
							onChange={(e) => this.handleInputChange(e)}
							type="text"
							id="backgroundText.subheading"
							value={
								this.state.cell.backgroundText ? this.state.cell.backgroundText.subheading || '' : ''
							}
						/>
					</div>
					<br />
					<div className="cell-property-input">
						<label>link</label>
						<input
							onKeyPress={(e) => this.handleKeyPress(e)}
							onChange={(e) => this.handleInputChange(e)}
							type="text"
							id="link"
							value={this.state.cell.link || ''}
						/>
					</div>
					<br />
					<div className="cell-property-input">
						<label>bottomText: background color (HTML color value)</label>
						<input
							onKeyPress={(e) => this.handleKeyPress(e)}
							onChange={(e) => this.handleInputChange(e)}
							type="text"
							id="bottomText.backgroundColor"
							value={this.state.cell.bottomText ? this.state.cell.bottomText.backgroundColor || '' : ''}
						/>
					</div>
					<div className="cell-property-input">
						<label>bottomText: height (example: 10px)</label>
						<input
							onKeyPress={(e) => this.handleKeyPress(e)}
							onChange={(e) => this.handleInputChange(e)}
							type="text"
							id="bottomText.height"
							value={this.state.cell.bottomText ? this.state.cell.bottomText.height || '' : ''}
						/>
					</div>
					<div className="cell-property-input">
						<label>bottomText: text</label>
						<input
							onKeyPress={(e) => this.handleKeyPress(e)}
							onChange={(e) => this.handleInputChange(e)}
							type="text"
							id="bottomText.text"
							value={this.state.cell.bottomText ? this.state.cell.bottomText.text || '' : ''}
						/>
					</div>
					<br />
					<div className="cell-property-input">
						<label>Video link (turns into an embedded video):</label>
						<input
							onKeyPress={(e) => this.handleKeyPress(e)}
							onChange={(e) => this.handleInputChange(e)}
							type="text"
							id="videoSrc"
							value={this.state.cell.videoSrc || ''}
						/>
					</div>
					<button>Submit changes</button>
				</form>
				<button onClick={() => confirm('Are you sure?') && this.deleteCell()}>Delete cell</button>
			</div>
		) : (
			<div>loading...</div>
		)
}

const sampleCell = {
	backgroundText: { heading: 'Heading', subheading: 'Subheading' },
	imgSrc: '/images/trees.jpg',
	link: '/artists',
	bottomText: {
		backgroundColor: 'rgb(239,0,160)',
		height: '50px',
		text: 'Neon Bambi -- New Release'
	}
}

const pages = {
	index: Index,

	artists: Artists,
	'producer-tools': ProducerTools,
	about: About
}

class Admin extends React.Component {
	state = {
		view: 'mobile',
		scale: 1,
		countdown: 2,
		editingModeEnabled: true,
		selectedCell: 0,
		layouts: {},
		authenticated: true // REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION
	}
	setScale = (scale) => this.setState({ scale })
	setView = (view) => this.setState({ view })
	// isPreview = () => window.location.pathname === '/index-preview'
	// signIn() {
	// 	this.cancelCountdown()
	// 	this.lock.show()
	// }
	// startCountdown() {
	// 	if (this.interval) return
	// 	this.interval = setInterval(() => {
	// 		if (this.state.countdown > 0) this.setState({ countdown: this.state.countdown - 1 })
	// 		else this.signIn()
	// 	}, 1000)
	// }
	// cancelCountdown = () => clearInterval(this.interval)
	// setTokenIfProvided() {
	// 	this.lock.on('authenticated', ({ accessToken }) => {
	// 		// localStorage.setItem('accessToken', accessToken)
	// 		this.setState({ authenticated: true })
	// 		this.cancelCountdown()
	// 	})
	// }
	// authenticate() {
	// 	this.lock = new Auth0Lock('kWHysVBkljt5AhDWF62CKNK46HQSCkkw', 'dvsn88.auth0.com', { allowSignUp: false })
	// 	this.setTokenIfProvided()
	// 	this.startCountdown()
	// 	// let accessToken = localStorage.getItem('accessToken')
	// }
	toggleEditingMode = () => {
		this.setState({ editingModeEnabled: !this.state.editingModeEnabled })
	}
	updateGrid = ({ layouts, cells }) => {
		if (layouts) this.setState({ layouts })
		if (cells) this.setState({ cells })
	}
	addSpaceToTopOfBody() {
		const body = document.getElementsByTagName('body')[0]
		body.style.marginTop = '6rem'
	}
	selectCell(index) {
		this.setState({ selectedCell: index })
	}
	updateCell(index, cell) {
		console.log('update cell')
		this.setState({ updatedCell: { index, cell } })
	}

	componentDidMount() {
		this.addSpaceToTopOfBody()
	}
	refreshGrid() {
		console.log('refresh grid, if this fucking bullshit worked')
	}
	render = () => {
		if (this.state.authenticated) {
			return (
				<div id="admin-root">
					<AdminControls
						setScale={(scale) => this.setScale(scale)}
						setView={(view) => this.setView(view)}
						toggleEditingMode={this.toggleEditingMode}
					/>
					<PagePreview
						page={this.props.page}
						view={this.state.view}
						scale={this.state.scale}
						toggleEditingMode={this.toggleEditingMode}
						editingModeEnabled={this.state.editingModeEnabled}
						selectCell={(index) => this.selectCell(index)}
						layouts={this.state.layouts}
						cells={this.state.cells}
					/>
					<CellEditor
						updateGrid={({ layouts, cells }) => this.updateGrid({ layouts, cells })}
						index={this.state.selectedCell}
						refreshGrid={() => this.refreshGrid()}
					/>
				</div>
			)
		} else {
			// this.authenticate()
			return (
				<div>
					not authenticated
					{/* <button onClick={() => this.signIn()}>Sign in</button> */}
					{/* <div>Signing in automatically in {this.state.countdown}...</div> */}
				</div>
			)
		}
	}
}
export default () => {
	const { page } = useRouteData()
	return <Admin page={pages[page]} />
}
