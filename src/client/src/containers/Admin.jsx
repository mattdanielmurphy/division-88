import React from 'react'
import { useRouteData } from 'react-static'
import axios from 'axios'
import Auth0Lock from 'auth0-lock'

const env = require('../client-env')

import AdminControls from 'components/jsx/admin/AdminControls'
import PagePreview from 'components/jsx/admin/PagePreview'
import CellEditor from 'components/jsx/admin/CellEditor'

import Index from './AdminIndex'
import Artists from 'pages/artists'
import ProducerTools from '../pages/producer-tools'
import About from '../pages/about'

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
		editingModeEnabled: false,
		selectedCell: 0,

		authenticated: true // REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION
	}
	getGridFromDatabase = async () => {
		const layouts = await axios.get(`${env.apiUrl}/grids/index/layouts`).then((r) => r.data)
		const cells = await axios.get(`${env.apiUrl}/grids/index/cells`).then((r) => r.data)
		return { layouts, cells }
	}
	constructor(props) {
		super(props)
		this.getGridFromDatabase().then(({ cells, layouts }) => {
			this.setState({ cells, layouts, layoutsLoaded: true })
			this.layoutsHistory = [ layouts ]
			this.layoutsUndone = []
		})
	}
	setScale = (scale) => this.setState({ scale })
	setView = (view) => this.setState({ view })
	signIn() {
		this.cancelCountdown()
		this.lock.show()
	}
	startCountdown() {
		if (this.interval) return
		this.interval = setInterval(() => {
			this.setState({ countdown: this.state.countdown - 1 })
			if (this.state.countdown === 0) this.signIn()
		}, 1000)
	}
	cancelCountdown = () => clearInterval(this.interval)
	setTokenIfProvided() {
		this.lock.on('authenticated', ({ accessToken }) => {
			this.setState({ authenticated: true })
			this.cancelCountdown()
		})
	}
	authenticate() {
		this.lock = new Auth0Lock('kWHysVBkljt5AhDWF62CKNK46HQSCkkw', 'dvsn88.auth0.com', { allowSignUp: false })
		this.setTokenIfProvided()
		this.startCountdown()
	}
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
	setBodyBackground = () => (document.getElementsByTagName('body')[0].style.backgroundColor = '#222')

	// grid-specific
	undoLayoutChange() {
		const layouts = this.layoutsHistory[this.layoutsHistory.length - 2]
		if (layouts) {
			this.layoutsUndone.push(this.layoutsHistory[this.layoutsHistory.length - 1])
			this.layoutsHistory = this.layoutsHistory.slice(0, this.layoutsHistory.length - 2)
			this.setState({ layouts })
		}
	}
	redoLayoutChange() {
		const layouts = this.layoutsUndone[this.layoutsUndone.length - 1]
		if (layouts) {
			this.layoutsUndone = this.layoutsUndone.slice(0, this.layoutsUndone.length - 1)
			this.setState({ layouts })
		}
	}
	onLayoutChange(layout, layouts) {
		if (JSON.stringify(layout) === JSON.stringify(this.lastLayoutChange)) return
		this.setState({ layouts })
		this.lastLayoutChange = layout
		if (!this.layoutsHistory) this.layoutsHistory = [ layout ]
		this.layoutsHistory.push(layouts)
		axios.post(`${env.apiUrl}/grids/index`, { layouts })
	}

	setKeyBindings = () => {
		document.onkeypress = (e) => {
			if (e.target.tagName === 'INPUT') return
			else if (e.key === 'e') this.toggleEditingMode()
			else if (e.key === 'u') this.undoLayoutChange()
			else if (e.key === 'r') this.redoLayoutChange()
		}
	}
	componentDidMount() {
		this.addSpaceToTopOfBody()
		this.setKeyBindings()
		this.setBodyBackground()
	}
	render = () => {
		if (this.state.authenticated) {
			return (
				<div id="admin-root">
					<AdminControls
						setScale={(scale) => this.setScale(scale)}
						setView={(view) => this.setView(view)}
						toggleEditingMode={this.toggleEditingMode}
						editingModeEnabled={this.state.editingModeEnabled}
						undoLayoutChange={() => this.undoLayoutChange()}
						redoLayoutChange={() => this.redoLayoutChange()}
					/>
					<PagePreview
						page={this.props.page}
						view={this.state.view}
						scale={this.state.scale}
						toggleEditingMode={this.toggleEditingMode}
						editingModeEnabled={this.state.editingModeEnabled}
						selectCell={(index) => this.selectCell(index)}
						selectedCell={this.state.selectedCell}
						layouts={this.state.layouts}
						cells={this.state.cells}
						onLayoutChange={(layout, layouts) => this.onLayoutChange(layout, layouts)}
					/>
					<CellEditor
						videoMode={this.state.selectedCell.video}
						updateGrid={({ layouts, cells }) => this.updateGrid({ layouts, cells })}
						index={this.state.selectedCell}
						refreshGrid={() => this.refreshGrid()}
					/>
				</div>
			)
		} else {
			this.authenticate()
			return (
				<div>
					not authenticated
					<button onClick={() => this.signIn()}>Sign in</button>
					<div>Signing in automatically in {this.state.countdown}...</div>
				</div>
			)
		}
	}
}
export default () => {
	const { page } = useRouteData()
	return <Admin page={pages[page]} />
}
