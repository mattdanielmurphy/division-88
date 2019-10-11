import React, { Component } from 'react'
import ImageUploader from './ImageUploader'

export default class VideoPicker extends Component {
	state = {
		videoSrc: this.props.videoSrc,
		youtubeId: this.props.youtubeId,
		imgSrc: this.props.imgSrc
	}
	getYoutubeId = (videoSrc) => {
		const matches = /\?v=([^?]*)/.exec(videoSrc)
		return matches ? matches[1] : ''
	}
	getYoutubeThumbnail = (videoId) => `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`
	handleVideoSrcChange = (videoSrc) => {
		const youtubeId = this.getYoutubeId(videoSrc)
		const imgSrc = this.getYoutubeThumbnail(youtubeId)
		this.setState({ youtubeId, videoSrc, imgSrc })
		this.props.updateState({ youtubeId, videoSrc, imgSrc })
	}
	handleImgSrcChange = (imgSrc) => {
		if (!imgSrc) this.handleVideoSrcChange(this.state.videoSrc)
		this.props.updateState({ imgSrc })
	}
	componentDidMount() {
		console.log('state', this.state.videoSrc)
		console.log('state', this.props)
	}
	componentDidUpdate(prevProps) {
		console.log('update VideoPicker', this.props.youtubeId)
		if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
			console.log('new props')
			this.setState({
				videoSrc: this.props.videoSrc,
				youtubeId: this.props.youtubeId,
				imgSrc: this.props.imgSrc
			})
		}
	}
	render = () => (
		<div>
			<div className="property-input">
				<label>video URL:</label>
				<input
					onChange={(e) => this.handleVideoSrcChange(e.target.value)}
					type="text"
					value={this.state.videoSrc}
					placeholder="example: https://www.youtube.com/watch?v=zyG8Vlw5aAw"
				/>
			</div>
			<div className="property-input">
				<label>video placeholder image:</label>
				<ImageUploader
					AdminAPI={this.props.AdminAPI}
					image={this.state.imgSrc}
					setImage={(url) => this.handleImgSrcChange(url)}
				/>
			</div>
		</div>
	)
}
