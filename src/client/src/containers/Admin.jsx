import React from 'react'
import { useRouteData } from 'react-static'
import axios from 'axios'
import Auth0Lock from 'auth0-lock'

const env = require('../client-env')

import AdminControls from 'components/jsx/admin/AdminControls'
import PagePreview from 'components/jsx/admin/PagePreview'
import CellEditor from 'components/jsx/admin/CellEditor'
import ArtistEditor from 'components/jsx/admin/ArtistEditor'

import Index from './AdminIndex'
import Artists from 'pages/artists'
import Artist from 'containers/Artist'
import ProducerTools from '../pages/producer-tools'
import ProducerTool from 'containers/ProducerTool'
import About from '../pages/about'

const pages = {
	index: Index,
	artists: Artists,
	artist: Artist,
	'producer-tools': ProducerTools,
	'producer-tool': ProducerTool,
	about: About
}

class Admin extends React.Component {
	state = {
		view: 'mobile',
		scale: 1,
		countdown: 2,
		selectedCell: 0,
		selectedArtist: 0,
		dataReady: false
		// authenticated: true // REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION
	}
	getGridFromDatabase = async () => {
		const layouts = await axios.get(`${env.apiUrl}/grids/index/layouts`).then((r) => r.data)
		const cells = await axios.get(`${env.apiUrl}/grids/index/cells`).then((r) => r.data)
		return { layouts, cells }
	}
	getArtistsFromDatabase = async () => {
		return await axios.get(`${env.apiUrl}/artists`).then((r) => r.data)
	}
	getArtistFromDatabase = async (index) => {
		const artists = await axios.get(`${env.apiUrl}/artist/index/${index}`).then((r) => r.data)
		return artists
	}
	getProducerToolsFromDatabase = async (index) => {
		const artists = await axios.get(`${env.apiUrl}/producer-tools`).then((r) => r.data)
		return artists
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
	updateReceived = () => this.setState({ updateSent: false })
	updateGrid = ({ layouts, cells }) => {
		if (layouts && cells) this.setState({ layouts, cells, updateSent: true })
		else if (layouts) this.setState({ layouts, updateSent: true })
		else if (cells) this.setState({ cells, updateSent: true })
		console.log(cells)
	}
	refreshGrid = ({ cells }) => {
		console.log('refresh grid')
		this.setState({ cells: {}, cellsTemp: cells })
	}
	updateArtists = (index, artist) => {
		const artists = this.state.artists
		artists[index] = artist
		this.setState({ artists })
	}
	refreshArtists = (index, artist) => {
		const artists = this.state.artists
		artists[index] = artist
		this.setState({ artists: undefined, artistsTemp: artists })
	}
	addSpaceToTopOfBody() {
		const body = document.getElementsByTagName('body')[0]
		body.style.marginTop = '6rem'
	}
	selectCell(index) {
		this.setState({ selectedCell: index })
	}
	selectArtist(index) {
		this.setState({ selectedArtist: index })
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
			else if (e.key === 'u') this.undoLayoutChange()
			else if (e.key === 'r') this.redoLayoutChange()
			else if (e.key === 'm') this.setView('mobile')
			else if (e.key === 't') this.setView('tablet')
			else if (e.key === 'd') this.setView('desktop')
		}
	}
	selectArtist(index) {
		this.setState({ selectedArtist: index })
	}
	getDataForPage() {
		if (this.props.pageName === 'artists') {
			console.log('getting data for artists...')
			this.getArtistsFromDatabase().then((artists) => {
				this.setState({ artists, dataReady: true })
			})
		} else if (this.props.pageName === 'artist') {
			console.log('getting data for artist...')
			this.getArtistsFromDatabase().then((artists) => {
				this.setState({ artists, dataReady: true })
			})
		} else if (this.props.pageName === 'producer-tools') {
			console.log('getting data for producer-tools...')
			this.getProducerToolsFromDatabase().then((tools) => {
				this.setState({ tools, dataReady: true })
			})
		} else if (this.props.pageName === 'index') {
			console.log('getting data for index...')
			this.getGridFromDatabase().then(({ cells, layouts }) => {
				this.setState({ cells, layouts, dataReady: true })
				this.layoutsHistory = [ layouts ]
				this.layoutsUndone = []
			})
		}
	}
	componentWillMount() {
		this.getDataForPage()
	}
	componentDidUpdate(prevProps) {
		if (this.props.pageName !== prevProps.pageName) {
			this.getDataForPage()
		} else if (this.state.cellsTemp) {
			this.setState({ cells: this.state.cellsTemp, cellsTemp: undefined })
		} else if (this.state.artistsTemp) {
			this.setState({ artists: this.state.artistsTemp, artistsTemp: undefined })
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
						pageName={this.props.pageName}
						undoLayoutChange={() => this.undoLayoutChange()}
						redoLayoutChange={() => this.redoLayoutChange()}
					/>
					{this.state.dataReady && (
						<PagePreview
							page={this.props.page}
							view={this.state.view}
							scale={this.state.scale}
							selectCell={(index) => this.selectCell(index)}
							selectedCell={this.state.selectedCell}
							layouts={this.state.layouts}
							cells={this.state.cells}
							onLayoutChange={(layout, layouts) => this.onLayoutChange(layout, layouts)}
							selectArtist={(artist) => this.selectArtist(artist)}
							selectedArtist={this.state.selectedArtist}
							artists={this.state.artists}
							updateSent={this.state.updateSent}
							updateReceived={() => this.updateReceived()}
						/>
					)}
					{this.props.pageName === 'artists' && (
						<ArtistEditor
							index={this.state.selectedArtist}
							updateArtists={(index, artist) => this.updateArtists(index, artist)}
							refreshArtists={(index, artist) => this.refreshArtists(index, artist)}
						/>
					)}
					{this.props.pageName === 'index' && (
						<CellEditor
							videoMode={this.state.selectedCell.video}
							updateGrid={({ layouts, cells }) => this.updateGrid({ layouts, cells })}
							index={this.state.selectedCell}
							refreshGrid={({ cells }) => this.refreshGrid({ cells })}
						/>
					)}
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
	const { page, index } = useRouteData()
	console.log(page, index)
	return <Admin page={pages[page]} pageName={page} index={index} />
}
