import React, { Component } from 'react'
import dropbox from '../components/dropbox'

class Authorize extends Component {
	state = {
		url: ''
	}
	authUrl = async () => {
		const url = await dropbox.getAuthorizationUrl()
		this.setState({ url })
	}
	componentDidMount() {
		this.authUrl()
	}
	render = () => (
		<main>
			<h1>Authorization Required</h1>
			<div id="content-wrapper">{this.state.url && <a href={this.state.url}>Click here to authorize.</a>}</div>
		</main>
	)
}

export default Authorize