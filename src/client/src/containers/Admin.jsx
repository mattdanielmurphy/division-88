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
import Posts from '../pages/posts'
import Post from '../pages/post'

const pages = {
	index: Index,
	artists: Artists,
	artist: Artist,
	'producer-tools': ProducerTools,
	'producer-tool': ProducerTool,
	about: About,
	posts: Posts,
	post: Post
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
		selectedHeading: undefined
	}
	setScale = (scale) => this.setState({ scale })
	setView = (view) => this.setState({ view })
	updateGrid = ({ layouts, cells }) => {
		if (layouts && cells) this.setState({ layouts, cells })
		else if (layouts) this.setState({ layouts })
		else if (cells) this.setState({ cells })
	}
	refreshGrid = ({ cells }) => {
		const { cellsTemp } = this.state
		// only refresh if not currently refreshing (otherwise will wipe out value)
		if (cellsTemp) this.setState({ cellsTemp: {}, cells: cellsTemp })
		else this.setState({ cells: {}, cellsTemp: cells })
	}
	updateArtists = (index, artist) => {
		const { artists, artistsTemp } = this.state
		if (artistsTemp) {
			artistsTemp[index] = artist
			this.setState({ artistsTemp, artists: artists })
		} else {
			artists[index] = artist
			this.setState({ artists, artistsTemp })
		}
	}
	refreshArtists = (index, artist, newIndex) => {
		const { artists, artistsTemp } = this.state
		// only refresh if not currently refreshing (otherwise will wipe out value)
		if (artistsTemp) {
			artistsTemp[index] = artist
			this.setState({ artistsTemp: undefined, artists: artistsTemp })
		} else {
			artists[index] = artist
			this.setState({ artists: undefined, artistsTemp: artists })
		}
		if (newIndex !== undefined) {
			window.location.reload()
			this.setState({ selectedArtist: newIndex })
		}
	}
	updateTools = (index, tool) => {
		const { tools, toolsTemp } = this.state
		if (toolsTemp) {
			toolsTemp[index] = tool
			this.setState({ toolsTemp, tools })
		} else {
			tools[index] = tool
			this.setState({ tools, toolsTemp })
		}
	}
	refreshTools = (index, tool, newIndex) => {
		const { tools, toolsTemp } = this.state
		// only refresh if not currently refreshing (otherwise will wipe out value)
		if (toolsTemp) {
			toolsTemp[index] = tool
			this.setState({ toolsTemp: undefined, tools: toolsTemp })
		} else {
			tools[index] = tool
			this.setState({ tools: undefined, toolsTemp: tools })
		}
		if (newIndex !== undefined) {
			this.setState({ selectedtool: newIndex })
			console.log('new index')
			window.location.reload()
		}
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
		this.setState({ pageName: page })

		if (page === 'artists') return await this.getArtistsFromDatabase()
		else if (page === 'artist') return await this.getArtistFromDatabase()
		else if (page === 'producer-tools') return await this.getProducerToolsFromDatabase()
		else if (page === 'index') return await this.getGridFromDatabase()
		else if (page === 'about') return await this.getAboutTextFromDatabase()
		else if (page === 'posts') return await this.getPostName()
	}
	getDataForPage = async (pageName) => {
		const getHeadingData = new Promise((res, rej) => this.getHeadingBackgroundImage().then((r) => res(r)))
		const getPageData = new Promise((res, rej) => this.getPageData(pageName).then((r) => res(r)))
		await Promise.all([ getHeadingData, getPageData ])
		this.setState({ dataReady: true })
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.props.match.params.page !== prevProps.match.params.page) {
			this.setState({
				dataReady: false,
				selectedArtist: undefined,
				selectedTool: undefined,
				selectedCell: undefined,
				selectedHeading: undefined
			})
			this.getDataForPage()
			// bring values back from temp storage once component updated (used to properly refresh data... unfortunately necessary)
		} else if (this.state.cellsTemp) this.setState({ cells: this.state.cellsTemp, cellsTemp: undefined })
		else if (this.state.artistsTemp) this.setState({ artists: this.state.artistsTemp, artistsTemp: undefined })
		else if (this.state.toolsTemp) this.setState({ tools: this.state.toolsTemp, toolsTemp: undefined })
	}
	signOut = () => firebase.auth().signOut()
	getPageName = () => this.props.match.params.page
	getPostName = () => this.props.match.params.post
	handleClickSignIn(e) {
		e.preventDefault()
		this.props.signInWithGoogle()
	}
	componentDidMount() {
		console.log('admin, props', this.props)
		this.getDataForPage()
		this.addSpaceToTopOfBody()
		this.setKeyBindings()
		this.setBodyBackground()
	}
	render = () =>
		!!!this.props.user ? (
			<Page heading="Authorization Required">
				<section className="text sign-in-prompt">
					<p>
						<button onClick={(e) => this.handleClickSignIn(e)}>sign in</button>
					</p>
				</section>
			</Page>
		) : (
			<div id="admin-root">
				<AdminControls
					setScale={(scale) => this.setScale(scale)}
					setView={(view) => this.setView(view)}
					pageName={() => this.getPageName()}
					undoLayoutChange={() => this.undoLayoutChange()}
					redoLayoutChange={() => this.redoLayoutChange()}
					signOut={() => this.props.signOut()}
				/>
				{this.state.dataReady ? (
					<PagePreview
						postName={this.getPostName()}
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
					refreshArtists={(index, artist, newIndex) => this.refreshArtists(index, artist, newIndex)}
					updateGrid={({ layouts, cells }) => this.updateGrid({ layouts, cells })}
					refreshGrid={({ cells }) => this.refreshGrid({ cells })}
					updateTools={(index, tool) => this.updateTools(index, tool)}
					refreshTools={(index, tool, newIndex) => this.refreshTools(index, tool, newIndex)}
				/>
			</div>
		)
}

export default withFirebaseAuth({
	providers,
	firebaseAppAuth
})(Admin)
