import React from 'react'
import axios from 'axios'
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app'
import 'firebase/auth'

import env from '../client-env'

import Page from '../components/jsx/Page'
import AdminControls from '../components/jsx/admin/AdminControls'
import PagePreview from '../components/jsx/admin/PagePreview'
import Editor from '../components/jsx/admin/editor/Editor'

import Index from './AdminIndex'
import Artists from '../pages/artists'
import Artist from '../pages/artist'
import ProducerTools from '../pages/producer-tools'
import ProducerTool from '../pages/producer-tool'
import About from '../pages/about'

const pages = {
	index: Index,
	artists: Artists,
	artist: Artist,
	'producer-tools': ProducerTools,
	'producer-tool': ProducerTool,
	about: About
}

const firebaseConfig = {
	apiKey: 'AIzaSyBSdDsj2JJuAI_9V-z5-qwW45YDdQmBoyE',
	authDomain: 'division-88-6430e.firebaseapp.com',
	databaseURL: 'https://division-88-6430e.firebaseio.com',
	projectId: 'division-88-6430e',
	storageBucket: 'division-88-6430e.appspot.com',
	messagingSenderId: '1059847851928'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const firebaseAppAuth = firebaseApp.auth()
const providers = {
	googleProvider: new firebase.auth.GoogleAuthProvider()
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
	setScale = (scale) => this.setState({ scale })
	setView = (view) => this.setState({ view })
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
			.get(`${env.apiUrl}/page-info/${this.props.match.params.page}`)
			.then((r) => r.data.headingBackgroundImage)
		this.setState({ headingBackgroundImage })
		return headingBackgroundImage
	}
	getPageData = async () => {
		const page = this.getPageName()

		if (page === 'artists') return await this.getArtistsFromDatabase()
		else if (page === 'artist') return await this.getArtistFromDatabase()
		else if (page === 'producer-tools') return await this.getProducerToolsFromDatabase()
		else if (page === 'index') return await this.getGridFromDatabase()
		else if (page === 'about') return await this.getAboutTextFromDatabase()
	}
	getDataForPage = async (pageName) => {
		const getHeadingData = new Promise((res, rej) => this.getHeadingBackgroundImage().then((r) => res(r)))
		const getPageData = new Promise((res, rej) => this.getPageData(pageName).then((r) => res(r)))
		await Promise.all([ getHeadingData, getPageData ])
		this.setState({ dataReady: true })
	}
	componentDidUpdate(prevProps) {
		// if (this.props.match.params.page !== this.state.pageName) {
		// 	this.setState({
		// 		dataReady: false,
		// 		selectedArtist: undefined,
		// 		selectedTool: undefined,
		// 		selectedCell: undefined,
		// 		selectedHeading: undefined
		// 	})
		// 	this.getDataForPage()
		// 	// bring values back from temp storage once component updated (used to properly refresh data... unfortunately necessary)
		// } else if (this.state.cellsTemp) {
		// 	this.setState({ cells: this.state.cellsTemp, cellsTemp: undefined })
		// } else if (this.state.artistsTemp) {
		// 	this.setState({ artists: this.state.artistsTemp, artistsTemp: undefined })
		// } else if (this.state.toolsTemp) {
		// 	this.setState({ tools: this.state.toolsTemp, toolsTemp: undefined })
		// }
	}
	setUpFirebaseAuthUI() {
		// const ui = new firebaseui.auth.AuthUI(firebase.auth())
		// const uiConfig = {
		// 	callbacks: {
		// 		signInSuccessWithAuthResult: (authResult, redirectUrl) => {
		// 			this.setState({ authenticated: true })
		// 			return true
		// 		},
		// 		uiShown: () => (document.getElementById('loader').style.display = 'none')
		// 	},
		// 	signInFlow: 'popup',
		// 	signInSuccessUrl: `${env.appUrl}/admin`,
		// 	signInOptions: [ firebase.auth.GoogleAuthProvider.PROVIDER_ID ]
		// }
		// ui.start('#firebaseui-auth-container', uiConfig)
		// firebase
		// 	.auth()
		// 	.onAuthStateChanged(
		// 		(user) => (user ? this.setState({ authenticated: true }) : this.setState({ authenticated: false }))
		// 	)
	}
	o
	signOut = () => firebase.auth().signOut()
	getPageName = () => this.props.match.params.page
	componentDidMount() {
		this.getDataForPage()
		this.addSpaceToTopOfBody()
		this.setKeyBindings()
		this.setBodyBackground()
		this.setUpFirebaseAuthUI()
	}
	render = () => {
		const { user, signOut, signInWithGoogle } = this.props

		return !!!user ? (
			<Page>
				<h1>Please sign in:</h1>
				<button onClick={signInWithGoogle}>Sign in</button>
			</Page>
		) : (
			<div id='admin-root'>
				<AdminControls
					setScale={(scale) => this.setScale(scale)}
					setView={(view) => this.setView(view)}
					pageName={this.getPageName()}
					undoLayoutChange={() => this.undoLayoutChange()}
					redoLayoutChange={() => this.redoLayoutChange()}
					signOut={signOut}
				/>
				{this.state.dataReady ? (
					<PagePreview
						pageName={this.getPageName()}
						page={pages[this.getPageName()]}
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
				) : (
					<div>loading...</div>
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
	}
}

export default withFirebaseAuth({
	providers,
	firebaseAppAuth
})(Admin)
