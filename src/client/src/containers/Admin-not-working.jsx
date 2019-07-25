import React from 'react'
import Auth0Lock from 'auth0-lock'
import { setConfiguration } from 'react-grid-system'
import { addPrefetchExcludes } from 'react-static'

import NonAdminRoot from 'components/jsx/root/NonAdminRoot'
import AdminControls from 'components/jsx/admin-controls/AdminControls'
import PagePreview from 'components/jsx/index/PagePreview'

// import * as log from 'loglevel'
// log.warn('ultra-compatible')

import 'styles/app.scss'

setConfiguration({ gutterWidth: 0 })
addPrefetchExcludes([ 'admin' ])

class App extends React.Component {
	state = {
		view: 'mobile',
		scale: 1,
		countdown: 2,
		editingModeEnabled: true,
		authenticated: true // REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION REMOVE FOR PRODUCTION
	}
	setScale = (scale) => this.setState({ scale })
	setView = (view) => this.setState({ view })
	isPreview = () => window.location.pathname === '/index-preview'
	signIn() {
		this.cancelCountdown()
		this.lock.show()
	}
	startCountdown() {
		if (this.interval) return
		this.interval = setInterval(() => {
			if (this.state.countdown > 0) this.setState({ countdown: this.state.countdown - 1 })
			else this.signIn()
		}, 1000)
	}
	cancelCountdown = () => clearInterval(this.interval)
	setTokenIfProvided() {
		this.lock.on('authenticated', ({ accessToken }) => {
			// localStorage.setItem('accessToken', accessToken)
			this.setState({ authenticated: true })
			this.cancelCountdown()
		})
	}
	authenticate() {
		this.lock = new Auth0Lock('kWHysVBkljt5AhDWF62CKNK46HQSCkkw', 'dvsn88.auth0.com', { allowSignUp: false })
		this.setTokenIfProvided()
		this.startCountdown()
		// let accessToken = localStorage.getItem('accessToken')
	}
	toggleEditingMode = () => {
		this.setState({ editingModeEnabled: !this.state.editingModeEnabled })
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
					<div>Page here</div>
					{/* <PagePreview
						toggleEditingMode={this.toggleEditingMode}
						editingModeEnabled={this.state.editingModeEnabled}
						scale={this.state.scale}
						view={this.state.view}
					/> */}
				</div>
			)
		} else {
			this.authenticate()
			return (
				<div>
					<button onClick={() => this.signIn()}>Sign in</button>
					<div>Signing in automatically in {this.state.countdown}...</div>
				</div>
			)
		}
	}
}

export default App
