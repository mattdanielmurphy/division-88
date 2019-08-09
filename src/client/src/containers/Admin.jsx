import React from 'react'
import { useRouteData } from 'react-static'
import axios from 'axios'
import Auth0Lock from 'auth0-lock'

const env = require('client-env')

import AdminControls from 'components/jsx/admin/AdminControls'
import PagePreview from 'components/jsx/admin/PagePreview'
import CellEditor from 'components/jsx/admin/CellEditor'
import ArtistEditor from 'components/jsx/admin/ArtistEditor'
import ToolEditor from 'components/jsx/admin/ToolEditor'
import HeadingEditor from 'components/jsx/admin/HeadingEditor'

import Index from './AdminIndex'
import Artists from 'pages/artists'
import Artist from 'containers/Artist'
import ProducerTools from 'pages/producer-tools'
import ProducerTool from 'pages/producer-tool'
import About from 'pages/about'

class Editor extends React.Component {
	render = () => {
		console.log(this.props.selectedHeading)
		if (this.props.selectedHeading)
			return (
				<HeadingEditor
					pageName={this.props.pageName}
					selectedHeading={this.props.selectedHeading}
					updateHeading={(heading) => this.props.updateHeading(heading)}
				/>
			)
		else if (this.props.pageName === 'artists')
			return (
				<ArtistEditor
					index={this.props.selectedArtist}
					updateArtists={(index, artist) => this.props.updateArtists(index, artist)}
					refreshArtists={(index, artist) => this.props.refreshArtists(index, artist)}
				/>
			)
		else if (this.props.pageName === 'index')
			return (
				<CellEditor
					index={this.props.selectedCell}
					updateGrid={({ layouts, cells }) => this.props.updateGrid({ layouts, cells })}
					refreshGrid={({ cells }) => this.props.refreshGrid({ cells })}
					videoMode={this.props.selectedCell.video}
				/>
			)
		else if (this.props.pageName === 'producer-tools')
			return (
				<ToolEditor
					index={this.props.selectedTool}
					updateTools={(index, tool) => this.props.updateTools(index, tool)}
					refreshTools={(index, tool) => this.props.refreshTools(index, tool)}
				/>
			)
		else if (this.props.pageName === 'about') return <div>about editor</div>
		else return <div />
	}
}

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
		selectedTool: 0,
		dataReady: false,
		selectedHeading: undefined,
		authenticated: true // REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION
	}
	// auth
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

	setScale = (scale) => this.setState({ scale })
	setView = (view) => this.setState({ view })
	authenticate() {
		this.lock = new Auth0Lock('kWHysVBkljt5AhDWF62CKNK46HQSCkkw', 'dvsn88.auth0.com', {
			allowSignUp: false,
			responseType: 'code'
		})
		this.setTokenIfProvided()
		this.startCountdown()
	}
	updateGrid = ({ layouts, cells }) => {
		if (layouts && cells) this.setState({ layouts, cells })
		else if (layouts) this.setState({ layouts })
		else if (cells) this.setState({ cells })
	}
	refreshGrid = ({ cells }) => {
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
	updateTools = (index, tool) => {
		const tools = this.state.tools
		tools[index] = tool
		this.setState({ tools })
	}
	refreshTools = (index, tool) => {
		const tools = this.state.tools
		tools[index] = tool
		this.setState({ tools: undefined, toolsTemp: tools })
	}
	updateHeading = (heading) => {
		this.setState({ headingBackgroundImage: heading.headingBackgroundImage })
	}
	addSpaceToTopOfBody() {
		const body = document.getElementsByTagName('body')[0]
		body.style.marginTop = '6rem'
	}
	selectCell = (index) => this.setState({ selectedCell: index, selectedHeading: undefined })
	selectArtist = (index) => this.setState({ selectedArtist: index, selectedHeading: undefined })
	selectTool = (index) => this.setState({ selectedTool: index, selectedHeading: undefined })
	selectHeading = (pageName) => {
		console.log('select heading', pageName)
		this.setState({
			selectedHeading: pageName,
			selectedCell: undefined,
			selectedArtist: undefined,
			selectedTool: undefined
		})
	}
	updateCell = (index, cell) => this.setState({ updatedCell: { index, cell } })
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
		if (!this.layoutsUndone) return
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
		document.onkeydown = (e) => {
			if (
				e.target.hasAttribute('data-slate-editor') ||
				e.target.tagName === 'INPUT' ||
				e.target.tagName === 'TEXTAREA'
			)
				return
			else if (e.key === 'u') this.undoLayoutChange()
			else if (e.key === 'r') this.redoLayoutChange()
			else if (e.key === 'm') this.setView('mobile')
			else if (e.key === 't') this.setView('tablet')
			else if (e.key === 'd') this.setView('desktop')
		}
	}

	// get data from database
	getArtistsFromDatabase = async () => {
		const artists = await axios.get(`${env.apiUrl}/artists`).then((r) => r.data)
		this.setState({ artists })
		return artists
	}
	getArtistFromDatabase = async (index) => {
		const artist = await axios.get(`${env.apiUrl}/artist/index/${index}`).then((r) => r.data)
		this.setState({ artist })
		return artist
	}
	getProducerToolsFromDatabase = async (index) => {
		const tools = await axios.get(`${env.apiUrl}/producer-tools`).then((r) => r.data)
		this.setState({ tools })
		return tools
	}
	getGridFromDatabase = async () => {
		const layouts = await axios.get(`${env.apiUrl}/grids/index/layouts`).then((r) => r.data)
		const cells = await axios.get(`${env.apiUrl}/grids/index/cells`).then((r) => r.data)
		this.setState({ cells, layouts })
		this.layoutsHistory = [ layouts ]
		this.layoutsUndone = []
		return cells
	}
	getAboutTextFromDatabase = async (index) => {
		const aboutText = await axios.get(`${env.apiUrl}/about/text`).then((r) => r.data)
		this.setState({ aboutText })
		return aboutText
	}
	getHeadingBackgroundImage = async () => {
		const headingBackgroundImage = await axios
			.get(`${env.apiUrl}/page-info/${this.props.pageName}`)
			.then((r) => r.data.headingBackgroundImage)
		this.setState({ headingBackgroundImage })
		return headingBackgroundImage
	}
	getPageData = async (pageName) => {
		if (pageName === 'artists') return await this.getArtistsFromDatabase()
		else if (pageName === 'artist') return await this.getArtistFromDatabase()
		else if (pageName === 'producer-tools') return await this.getProducerToolsFromDatabase()
		else if (pageName === 'index') return await this.getGridFromDatabase()
		else if (pageName === 'about') return await this.getAboutTextFromDatabase()
	}
	getDataForPage = async () => {
		const getHeadingData = new Promise((res, rej) => this.getHeadingBackgroundImage().then((r) => res(r)))
		const getPageData = new Promise((res, rej) => this.getPageData().then((r) => res(r)))
		await Promise.all([ getHeadingData, getPageData ])
		this.setState({ dataReady: true })
	}
	componentDidUpdate(prevProps) {
		if (this.props.pageName !== prevProps.pageName) {
			this.setState({
				dataReady: false,
				selectedArtist: undefined,
				selectedTool: undefined,
				selectedCell: undefined,
				selectedHeading: undefined
			})
			this.getDataForPage()
			// bring values back from temp storage once component updated (used to properly refresh data... unfortunately necessary)
		} else if (this.state.cellsTemp) {
			this.setState({ cells: this.state.cellsTemp, cellsTemp: undefined })
		} else if (this.state.artistsTemp) {
			this.setState({ artists: this.state.artistsTemp, artistsTemp: undefined })
		} else if (this.state.toolsTemp) {
			this.setState({ tools: this.state.toolsTemp, toolsTemp: undefined })
		}
	}
	componentDidMount() {
		this.getDataForPage()
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
							pageName={this.props.pageName}
							page={this.props.page}
							view={this.state.view}
							scale={this.state.scale}
							// Heading
							headingBackgroundImage={this.state.headingBackgroundImage}
							selectHeading={(pageName) => this.selectHeading(pageName)}
							headingSelected={this.state.selectedHeading}
							// Grid
							selectCell={(index) => this.selectCell(index)}
							selectedCell={this.state.selectedCell}
							layouts={this.state.layouts}
							cells={this.state.cells}
							onLayoutChange={(layout, layouts) => this.onLayoutChange(layout, layouts)}
							// Artists
							selectArtist={(artist) => this.selectArtist(artist)}
							selectedArtist={this.state.selectedArtist}
							artists={this.state.artists}
							// Producer Tools
							selectTool={(tool) => this.selectTool(tool)}
							selectedTool={this.state.selectedTool}
							tools={this.state.tools}
							// About
							aboutText={this.state.aboutText}
						/>
					)}
					<Editor
						{...this.props}
						{...this.state}
						selectedHeading={this.state.selectedHeading}
						updateHeading={(heading) => this.updateHeading(heading)}
						updateArtists={(index, artist) => this.updateArtists(index, artist)}
						refreshArtists={(index, artist) => this.refreshArtists(index, artist)}
						updateGrid={({ layouts, cells }) => this.updateGrid({ layouts, cells })}
						refreshGrid={({ cells }) => this.refreshGrid({ cells })}
						updateTools={(index, tool) => this.updateTools(index, tool)}
						refreshTools={(index, tool) => this.refreshTools(index, tool)}
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
	const { page, index } = useRouteData()

	return <Admin page={pages[page]} pageName={page} index={index} />
}
