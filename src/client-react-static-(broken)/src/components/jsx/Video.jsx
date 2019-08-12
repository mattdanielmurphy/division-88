import React from 'react'
import { FaPlay } from 'react-icons/fa'
import Image from './Image'

class VideoEl extends React.Component {
	render = () => {
		return (
			<div
				className="video"
				style={{
					position: 'relative',
					height: '100%',
					display: this.props.loaded ? 'block' : 'none'
				}}
			>
				<iframe
					id={`video-${this.props.videoId}`}
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%'
					}}
					webkitallowfullscreen="true"
					mozallowfullscreen="true"
					allowFullScreen
					src={`https://www.youtube.com/embed/${this.props
						.videoId}?enablejsapi=1&modestbranding=1?&origin=http://localhost:3000`}
					frameBorder="0"
				/>
			</div>
		)
	}
}

export default class Video extends React.Component {
	state = { videoId: this.props.videoSrc ? /\?v=(.*)/.exec(this.props.videoSrc)[1] : '' }
	onPlayerReady(event) {
		if (this.state.videoLoaded) this.player.playVideo()
		const playButton = document.getElementById(`play-video-${this.state.videoId}`)
		playButton.addEventListener('click', () => (this.props.isPreview ? null : this.player.playVideo()))
	}
	loadVideo() {
		if (this.props.isPreview) return
		this.setState({ videoLoaded: true })
	}
	getStyle = () => ({
		cursor: this.props.isPreview ? 'default' : 'pointer',
		display: this.state.videoLoaded ? 'none' : 'block'
	})
	componentDidMount = () => {
		if (!this.props.isPreview) {
			this.player = new YT.Player(`video-${this.state.videoId}`, {
				events: {
					onReady: () => this.onPlayerReady()
				}
			})
		}
	}
	render = () => (
		<div>
			{this.state.videoLoaded && !this.props.isPreview ? (
				<VideoEl videoId={this.state.videoId} loaded={this.state.videoLoaded} />
			) : (
				<div
					onClick={() => this.loadVideo()}
					id={`play-video-${this.state.videoId}`}
					style={this.getStyle()}
					className={`video-link wrapper`}
				>
					<Image src={this.props.imgSrc} selected={this.props.selected} />
					<div className="icon-wrapper">
						<FaPlay className="icon" />
					</div>
				</div>
			)}
		</div>
	)
}