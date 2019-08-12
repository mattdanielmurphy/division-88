import React, { Component } from 'react'
import firebase from 'firebase'
import FileUploader from 'react-firebase-file-uploader'

import Artist from '../components/jsx/Artist'
import Page from '../components/jsx/Page'
import axios from 'axios'
import env from '../client-env'

class ProfilePage extends Component {
	state = {
		username: '',
		avatar: '',
		isUploading: false,
		progress: 0,
		avatarURL: ''
	}

	handleChangeUsername = (event) => this.setState({ username: event.target.value })
	handleUploadStart = () => this.setState({ isUploading: true, progress: 0 })
	handleProgress = (progress) => this.setState({ progress })
	handleUploadError = (error) => {
		this.setState({ isUploading: false })
		console.error(error)
	}
	handleUploadSuccess = (filename) => {
		this.setState({ avatar: filename, progress: 100, isUploading: false })
		firebase
			.storage()
			.ref('images')
			.child(filename)
			.getDownloadURL()
			.then((url) => this.setState({ avatarURL: url }))
	}

	render() {
		return (
			<div>
				<form>
					<label>Username:</label>
					<input
						type='text'
						value={this.state.username}
						name='username'
						onChange={this.handleChangeUsername}
					/>
					<label>Avatar:</label>
					{this.state.isUploading && <p>Progress: {this.state.progress}</p>}
					{this.state.avatarURL && <img src={this.state.avatarURL} />}
					<FileUploader
						accept='image/*'
						name='avatar'
						randomizeFilename
						storageRef={firebase.storage().ref('images')}
						onUploadStart={this.handleUploadStart}
						onUploadError={this.handleUploadError}
						onUploadSuccess={this.handleUploadSuccess}
						onProgress={this.handleProgress}
					/>
				</form>
			</div>
		)
	}
}

export default class extends React.Component {
	state = {}
	componentDidMount = async () => {
		if (this.props.artists) {
			this.setState({ artists: this.props.artists })
		} else {
			let artists = await axios.get(`${env.apiUrl}/artists`).then((r) => r.data)
			this.setState({ artists })
		}
	}
	componentDidUpdate(prevProps) {
		if (this.props.artists && JSON.stringify(prevProps.artists) !== JSON.stringify(this.props.artists)) {
			this.setState({ artists: this.props.artists })
		}
	}
	render = () => {
		return this.state.artists ? (
			<Page
				headingBackgroundImage='images/trees.jpg'
				headingSelected={this.props.headingSelected}
				selectHeading={() => this.props.selectHeading('artists')}
				isPreview={this.props.isPreview}
				pageName='artists'
			>
				{/* {this.state.artists.map((artist, index) => {
					return (
						<Artist
							key={index}
							index={index}
							isPreview={this.props.isPreview}
							{...artist}
							selectArtist={() => this.props.selectArtist(index)}
							selected={this.props.selectedArtist === index}
						/>
					)
				})} */}
				<ProfilePage />
			</Page>
		) : (
			<div />
		)
	}
}
