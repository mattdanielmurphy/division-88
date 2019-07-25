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

class CellEditor extends React.Component {
	state = {}
	getCell = async (index) => {
		return await axios.get(`${env.apiUrl}/grids/index/cells/${index}`).then((r) => r.data)
	}
	updateCell = async (index, cell) => {
		const result = await axios.post(`${env.apiUrl}/grids/index/cells/${index}`, cell).then((r) => {
			this.setState({ cellFromDatabase: cell })
			return r.data
		})
		return result
	}

	handleKeyPress = (e) => {
		// e.preventDefault()
		if (e.key !== 'Enter') return
		// just submit this modified value
		const cell = this.state.cellFromDatabase
		let id = e.target.id
		let value = e.target.value
		cell[id] = value
		this.updateCell(this.props.index, cell)
	}

	handleRealTimeInputChange = (e) => {
		const cell = this.state.cell
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
		this.props.updateCell(this.props.index, cell)
		// if (this.inputChangeInterval) clearInterval(this.inputChangeInterval)
		// this.inputChangeInterval = setInterval(() => {
		// 	valueToEdit = value
		// 	this.updateCell(cell)
		// }, 500)
	}
	handleInputChange = (e) => {
		const cell = this.state.cell
		let id = e.target.id
		let value = e.target.value
		cell[id] = value
		this.props.updateCell(this.props.index, cell)
		this.setState({ cell })
	}
	componentDidMount = async () => {
		const cell = await this.getCell(this.props.index)
		this.setState({ cell, cellFromDatabase: cell })
	}
	componentDidUpdate = async (prevProps) => {
		if (this.props.index !== prevProps.index) {
			const cell = await this.getCell(this.props.index)
			this.setState({ cell, cellFromDatabase: cell })
		}
	}
	render = () =>
		this.state.cell ? (
			<div id="cell-editor">
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
				<div className="cell-property-input">
					<label>backgroundText: heading</label>
					<input
						onChange={(e) => this.handleRealTimeInputChange(e)}
						type="text"
						id="backgroundText.heading"
						value={this.state.cell.backgroundText ? this.state.cell.backgroundText.heading || '' : ''}
					/>
				</div>
				<div className="cell-property-input">
					<label>backgroundText: subheading</label>
					<input
						onChange={(e) => this.handleRealTimeInputChange(e)}
						type="text"
						id="backgroundText.subheading"
						value={this.state.cell.backgroundText ? this.state.cell.backgroundText.subheading || '' : ''}
					/>
				</div>
			</div>
		) : (
			<div>loading...</div>
		)
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
	addSpaceToTopOfBody() {
		const body = document.getElementsByTagName('body')[0]
		body.style.marginTop = '6rem'
	}
	selectCell(index) {
		this.setState({ selectedCell: index })
	}
	updateCell(index, cell) {
		this.setState({ updatedCell: { index, cell } })
	}

	componentDidMount() {
		this.addSpaceToTopOfBody()
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
						toggleEditingMode={this.toggleEditingMode}
						editingModeEnabled={this.state.editingModeEnabled}
						updatedCell={this.state.updatedCell}
						selectCell={(index) => this.selectCell(index)}
					/>
					<CellEditor
						updateCell={(index, cell) => this.updateCell(index, cell)}
						index={this.state.selectedCell}
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
