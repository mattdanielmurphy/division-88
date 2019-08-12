import React from 'react'
import axios from 'axios'
import env from '../../../../client-env'
import firebase from 'firebase'
import FileUploader from 'react-firebase-file-uploader'

export default class ImageUploader extends React.Component {
	state = {
		image: '',
		isUploading: false,
		progress: 0,
		imageUrl: this.props.image
	}
	saveImageToDB(url, filename) {
		axios
			.post(`${env.apiUrl}/images/new`, { url, filename })
			.then((result) => console.log('result', result))
			.catch((err) => console.log(err))
	}
	handleUploadStart = () => this.setState({ isUploading: true, progress: 0 })
	handleProgress = (progress) => this.setState({ progress })
	handleUploadError = (error) => {
		this.setState({ isUploading: false })
		console.error(error)
	}
	handleUploadSuccess = (filename) => {
		this.setState({ image: filename, progress: 100, isUploading: false })
		firebase.storage().ref('images').child(filename).getDownloadURL().then((url) => {
			this.saveImageToDB(url, filename)
			this.setState({ imageUrl: url })
			this.props.setImage(url)
		})
	}
	handleChange(e) {
		const url = e.target.value
		this.setState({ imageUrl: url })
		this.props.setImage(url)
	}

	render() {
		return (
			<div>
				<form>
					<label>Image preview:</label>
					{this.state.isUploading && <p>Progress: {this.state.progress}</p>}
					{this.state.imageUrl && <img className="image-uploader-preview" src={this.state.imageUrl} />}
					<input type="text" value={this.state.imageUrl} onChange={(e) => this.handleChange(e)} />
					<FileUploader
						accept="image/*"
						name="image"
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
