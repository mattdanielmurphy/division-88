import React from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app'
import 'firebase/auth'
import Spinner from 'react-spinkit'
import env from 'client-env'

import axios from 'axios/index'

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
import AdminPost from '../pages/admin-post'
import AdminAbout from '../pages/admin-about'
import AdminPosts from '../pages/admin-posts'
import AdminProducerTool from 'pages/admin-producer-tool'
import Publish from 'pages/publish'

const pages = {
  index: Index,
  artists: Artists,
  artist: Artist,
  'producer-tools': ProducerTools,
  'producer-tool': ProducerTool,
  about: About,
  posts: Posts,
  post: Post,
}

const firebaseConfig = {
  apiKey: env.apiKey,
  messagingSenderId: env.messagingSenderId,
  authDomain: 'division-88-6430e.firebaseapp.com',
  databaseURL: 'https://division-88-6430e.firebaseio.com',
  projectId: 'division-88-6430e',
  storageBucket: 'division-88-6430e.appspot.com',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const firebaseAppAuth = firebaseApp.auth()
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
}

class Admin extends React.Component {
  state = {
    view: 'mobile',
    scale: 1,
    countdown: 2,
    selectedCell: 0,
    selectedArtist: 0,
    selectedTool: 0,
    loading: true,
    dataReady: false,
    selectedHeading: undefined,
  }
  checkForChangesMade() {
    console.log('checking for chagnes made')
    this.props.AdminAPI.get('/info/changes').then((r) => {
      if (r.data && r.data.changesMade) this.setChangesMade(true)
    })
  }
  setChangesMade(changesMade) {
    console.log('setting changes made to', changesMade)
    this.setState({ changesMade })
  }
  setScale = (scale) => this.setState({ scale })
  setView = (view) => this.setState({ view })
  updateGrid = ({ layouts, cells }) => {
    if (layouts && cells) this.setState({ layouts, cells, changesMade: true })
    else if (layouts) this.setState({ layouts, changesMade: true })
    else if (cells) this.setState({ cells, changesMade: true })
  }
  refreshGrid = ({ cells }) => {
    const { cellsTemp } = this.state
    // only refresh if not currently refreshing (otherwise will wipe out value)
    if (cellsTemp)
      this.setState({ cellsTemp: {}, cells: cellsTemp, changesMade: true })
    else this.setState({ cells: {}, cellsTemp: cells, changesMade: true })
  }
  updateArtists = (index, artist) => {
    const { artists, artistsTemp } = this.state
    if (artistsTemp) {
      artistsTemp[index] = artist
      this.setState({ artistsTemp, artists: artists, changesMade: true })
    } else {
      artists[index] = artist
      this.setState({ artists, artistsTemp, changesMade: true })
    }
  }
  refreshArtists = (index, artist, newIndex) => {
    const { artists, artistsTemp } = this.state
    // only refresh if not currently refreshing (otherwise will wipe out value)
    if (artistsTemp) {
      artistsTemp[index] = artist
      this.setState({
        artistsTemp: undefined,
        artists: artistsTemp,
        changesMade: true,
      })
    } else {
      artists[index] = artist
      this.setState({
        artists: undefined,
        artistsTemp: artists,
        changesMade: true,
      })
    }
    if (newIndex !== undefined) {
      window.location.reload()
      this.setState({ selectedArtist: newIndex, changesMade: true })
    }
  }
  updateTools = (index, tool) => {
    const { tools, toolsTemp } = this.state
    if (toolsTemp) {
      toolsTemp[index] = tool
      this.setState({ toolsTemp, tools, changesMade: true })
    } else {
      tools[index] = tool
      this.setState({ tools, toolsTemp, changesMade: true })
    }
  }
  refreshTools = (index, tool, newIndex) => {
    const { tools, toolsTemp } = this.state
    // only refresh if not currently refreshing (otherwise will wipe out value)
    if (toolsTemp) {
      toolsTemp[index] = tool
      this.setState({
        toolsTemp: undefined,
        tools: toolsTemp,
        changesMade: true,
      })
    } else {
      tools[index] = tool
      this.setState({ tools: undefined, toolsTemp: tools, changesMade: true })
    }
    if (newIndex !== undefined) {
      this.setState({ selectedtool: newIndex, changesMade: true })
      window.location.reload()
    }
  }
  updateHeading = (heading) => {
    this.setState({
      headingBackgroundImage: heading.headingBackgroundImage,
      changesMade: true,
    })
  }
  updateCell = (index, cell) =>
    this.setState({ updatedCell: { index, cell }, changesMade: true })
  selectCell = (index) => {
    this.setState({ selectedCell: index, selectedHeading: undefined })
  }
  selectArtist = (index) =>
    this.setState({ selectedArtist: index, selectedHeading: undefined })
  selectTool = (index) =>
    this.setState({ selectedTool: index, selectedHeading: undefined })
  selectHeading = (pageName) => {
    this.setState({
      selectedHeading: pageName,
      selectedCell: undefined,
      selectedArtist: undefined,
      selectedTool: undefined,
    })
  }
  setBodyStyle = () => {
    const bodyStyle = document.getElementsByTagName('body')[0].style
    bodyStyle.backgroundColor = '#151515'
    bodyStyle.marginTop = '3.5rem'
  }
  // grid-specific
  undoLayoutChange() {
    const layouts = this.layoutsHistory[this.layoutsHistory.length - 2]
    if (layouts) {
      this.layoutsUndone.push(
        this.layoutsHistory[this.layoutsHistory.length - 1],
      )
      this.layoutsHistory = this.layoutsHistory.slice(
        0,
        this.layoutsHistory.length - 2,
      )
      this.setState({ layouts })
    }
  }
  redoLayoutChange() {
    if (!this.layoutsUndone) return
    const layouts = this.layoutsUndone[this.layoutsUndone.length - 1]
    if (layouts) {
      this.layoutsUndone = this.layoutsUndone.slice(
        0,
        this.layoutsUndone.length - 1,
      )
      this.setState({ layouts })
    }
  }
  onLayoutChange(layout, layouts) {
    if (JSON.stringify(layout) === JSON.stringify(this.lastLayoutChange)) return
    this.setState({ layouts, changesMade: true })
    this.lastLayoutChange = layout
    if (!this.layoutsHistory) this.layoutsHistory = [layout]
    this.layoutsHistory.push(layouts)
    console.log('updateGrid: localhost/api/grids/index', { layouts })
    this.props.AdminAPI.post('/grids/index', { layouts })
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
    const artists = await this.props.AdminAPI.get('/artists').then(
      (r) => r.data,
    )
    this.setState({ artists })
    return artists
  }
  getArtistFromDatabase = async (index) => {
    const artist = await this.props.AdminAPI.get(`/artist/index/${index}`).then(
      (r) => r.data,
    )
    this.setState({ artist })
    return artist
  }
  getProducerToolsFromDatabase = async (index) => {
    const tools = await this.props.AdminAPI.get('/producer-tools').then(
      (r) => r.data,
    )
    this.setState({ tools })
    return tools
  }
  getGridFromDatabase = async () => {
    const layouts = await this.props.AdminAPI.get('/grids/index/layouts').then(
      (r) => r.data,
    )
    const cells = await this.props.AdminAPI.get('/grids/index/cells').then(
      (r) => r.data,
    )
    this.setState({ cells, layouts })
    this.layoutsHistory = [layouts]
    this.layoutsUndone = []
    return cells
  }
  getAboutTextFromDatabase = async (index) => {
    const aboutText = await this.props.AdminAPI.get('/about/text').then(
      (r) => r.data,
    )
    this.setState({ aboutText })
    return aboutText
  }
  getHeadingBackgroundImage = async () => {
    const headingBackgroundImage = await this.props.AdminAPI.get(
      `/page-info/${this.props.match.params.page}`,
    ).then((r) => r.data.headingBackgroundImage)
    this.setState({ headingBackgroundImage })
    return headingBackgroundImage
  }
  getPageData = async () => {
    const page = this.getPageName()
    this.setState({ pageName: page })

    if (page === 'artists') return await this.getArtistsFromDatabase()
    else if (page === 'artist') return await this.getArtistFromDatabase()
    else if (page === 'producer-tools')
      return await this.getProducerToolsFromDatabase()
    else if (page === 'index') return await this.getGridFromDatabase()
    else if (page === 'about') return await this.getAboutTextFromDatabase()
    else if (page === 'posts') return await this.getPostName()
  }
  getDataForPage = async (pageName) => {
    const getHeadingData = new Promise((res, rej) =>
      this.getHeadingBackgroundImage().then((r) => res(r)),
    )
    const getPageData = new Promise((res, rej) =>
      this.getPageData(pageName).then((r) => res(r)),
    )
    await Promise.all([getHeadingData, getPageData])
    this.setState({ dataReady: true })
  }
  setToken() {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then((idToken) => {
        this.setState({ idToken })
      })
      .catch((error) => console.log(error))
  }
  setDataNotReady = () => {
    this.setState({
      dataReady: false,
      selectedArtist: undefined,
      selectedTool: undefined,
      selectedCell: undefined,
      selectedHeading: undefined,
    })
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.changesMade !== prevState.changesMade) {
      console.log('changes made has changed values')
      this.props.AdminAPI.post('/info', { changesMade: this.state.changesMade })
    }
    if (this.props.user !== prevProps.user) {
      if (this.props.user) {
        this.setToken()
        this.setState({ userVerified: this.verifyUser(this.props.user) })
      }
      this.setState({ loading: false })
    }
    if (this.props.match.params.page !== prevProps.match.params.page) {
      this.setDataNotReady()
      this.getDataForPage()
      // bring values back from temp storage once component updated (used to properly refresh data... unfortunately necessary)
    } else if (this.state.cellsTemp)
      this.setState({ cells: this.state.cellsTemp, cellsTemp: undefined })
    else if (this.state.artistsTemp)
      this.setState({
        artists: this.state.artistsTemp,
        artistsTemp: undefined,
      })
    else if (this.state.toolsTemp)
      this.setState({ tools: this.state.toolsTemp, toolsTemp: undefined })
  }
  signOut = () => firebase.auth().signOut()
  getPageName = () => this.props.match.params.page
  getPostName = () => this.props.match.params.post
  getToolName = () => this.props.match.params.tool
  handleClickSignIn(e) {
    e.preventDefault()
    this.props.signInWithGoogle()
  }
  componentDidMount() {
    this.getDataForPage()
    this.setKeyBindings()
    this.setBodyStyle()
  }
  verifyUser = (user) => {
    console.log('verifying user', user && user.uid)
    const admins = [
      {
        name: 'Matt',
        uid: 'a7rpLoSNreZDcIFvmmQfTCNM60F2',
      },
      {
        name: 'Billy',
        uid: 'V0pFoeI8Labgt2GKG4s8V7jZ8NU2',
      },
    ]
    const isAdmin = user && admins.find((admin) => admin.uid === user.uid)
    // && (await this.verifyToken(user.getIdToken()))

    if (isAdmin) {
      this.checkForChangesMade()
      if (this.state.signInFailed) this.setState({ signInFailed: false })
    } else {
      console.log('not isAdmin', isAdmin)
      this.setState({ signInFailed: true })
    }

    return isAdmin
  }
  render = () =>
    this.state.loading ? (
      <Spinner className='loading text-center' name='ball-clip-rotate' />
    ) : this.props.user && this.state.signInFailed ? (
      <Page heading='Authentication Failed'>
        <section className='text sign-in-prompt'>
          <p>
            The account <em>{this.props.user.email}</em> is not one of our admin
            accounts. Sign out at{' '}
            <a href='https://google.com' target='_blank' without rel="noopener noreferrer">
              google.com
            </a>{' '}
            and sign in with another account to try again.
          </p>
          <p>
            <button
              onClick={(e) => {
                this.setState({ signInFailed: false }, () => {
                  this.props.signOut()
                  // Location.reload()
                  this.handleClickSignIn(e)
                })
              }}
            >
              Try again to sign in with Google
            </button>
          </p>
        </section>
      </Page>
    ) : !this.props.user || !this.state.userVerified ? (
      <Page heading='Authorization Required'>
        <section className='text sign-in-prompt'>
          <p>
            <button onClick={(e) => this.handleClickSignIn(e)}>
              Sign in with Google
            </button>
          </p>
        </section>
      </Page>
    ) : (
      <div>
        <AdminControls
          AdminAPI={this.props.AdminAPI}
          changesMade={this.state.changesMade}
          setChangesMade={(changesMade) => this.setChangesMade(changesMade)}
          setScale={(scale) => this.setScale(scale)}
          setView={(view) => this.setView(view)}
          view={this.state.view}
          pageName={this.getPageName()}
          undoLayoutChange={() => this.undoLayoutChange()}
          redoLayoutChange={() => this.redoLayoutChange()}
          signOut={() => this.props.signOut()}
        />
        {this.getPageName() === 'publish' ? (
          <Publish
            setChangesMade={(changesMade) => this.setChangesMade(changesMade)}
            AdminAPI={this.props.AdminAPI}
          />
        ) : this.getPageName() === 'posts' ? (
          <AdminPosts
            AdminAPI={this.props.AdminAPI}
            setChangesMade={(changesMade) => this.setChangesMade(changesMade)}
          />
        ) : this.getPageName() === 'post' ? (
          <AdminPost
            setChangesMade={(changesMade) => this.setChangesMade(changesMade)}
            history={this.props.history}
            AdminAPI={this.props.AdminAPI}
            postName={this.props.match.params.post}
          />
        ) : this.getPageName() === 'producer-tool' ? (
          <AdminProducerTool
            setChangesMade={(changesMade) => this.setChangesMade(changesMade)}
            history={this.props.history}
            AdminAPI={this.props.AdminAPI}
            toolName={this.props.match.params.tool}
          />
        ) : this.getPageName() === 'about' ? (
          <AdminAbout
            setChangesMade={(changesMade) => this.setChangesMade(changesMade)}
            headingBackgroundImage={this.state.headingBackgroundImage}
            history={this.props.history}
            AdminAPI={this.props.AdminAPI}
            postName={this.props.match.params.post}
            updateHeading={(heading) => this.updateHeading(heading)}
          />
        ) : (
          <div id='admin-root'>
            {this.state.dataReady ? (
              <PagePreview
                AdminAPI={this.props.AdminAPI}
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
                onLayoutChange={(layout, layouts) =>
                  this.onLayoutChange(layout, layouts)
                }
                // Artists
                selectArtist={(artist) => this.selectArtist(artist)}
                selectedArtist={this.state.selectedArtist}
                artists={this.state.artists}
                // Producer Tools
                selectTool={(tool) => this.selectTool(tool)}
                selectedTool={this.state.selectedTool}
                tools={this.state.tools}
                toolName={this.getToolName()}
                // Posts
                postName={this.getPostName()}
                // About
                aboutText={this.state.aboutText}
              />
            ) : (
              <div>loading...</div>
            )}
            <Editor
							setChangesMade={(changesMade) => this.setChangesMade(changesMade)}
              AdminAPI={this.props.AdminAPI}
              {...this.props}
              {...this.state}
              selectCell={(index) => this.selectCell(index)}
              selectedHeading={this.state.selectedHeading}
              updateHeading={(heading) => this.updateHeading(heading)}
              updateArtists={(index, artist) =>
                this.updateArtists(index, artist)
              }
              refreshArtists={(index, artist, newIndex) =>
                this.refreshArtists(index, artist, newIndex)
              }
              updateGrid={({ layouts, cells }) =>
                this.updateGrid({ layouts, cells })
              }
              refreshGrid={({ cells }) => this.refreshGrid({ cells })}
              updateTools={(index, tool) => this.updateTools(index, tool)}
              refreshTools={(index, tool, newIndex) =>
                this.refreshTools(index, tool, newIndex)
              }
            />
          </div>
        )}
      </div>
    )
}

class Auth extends React.Component {
  state = {}
  getIdToken = async () =>
    await firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .catch((error) => console.log(error))

  AdminAPI = axios.create({
    baseURL: `${env.apiUrl}/admin`,
    headers: { 'access-token': this.state.idToken },
  })
  componentDidMount() {
    this.AdminAPI.interceptors.request.use(
      async (options) => {
        options.headers['access-token'] = await this.state.idToken
        return options
      },
      function(error) {
        console.log('Request error: ', error)
        return Promise.reject(error)
      },
    )
  }
  componentDidUpdate = async (prevProps) => {
    if (this.props.user !== prevProps.user) {
      if (this.props.user) {
        const idToken = await this.getIdToken()
        console.log(idToken)
        const idTokenPromise = new Promise((resolve) => resolve(idToken))
        this.setState({ idToken: idTokenPromise })
      }
    }
  }

  render = () => <Admin {...this.props} AdminAPI={this.AdminAPI} />
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Auth)
