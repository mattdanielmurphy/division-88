import React from 'react'
import YouTube from 'react-youtube'
import { FaPlay } from 'react-icons/fa'
import Image from './Image'
import ReactResizeDetector from 'react-resize-detector'

export default class Video extends React.Component {
	getVideoId = () => {
		if (this.props.videoSrc) {
			const matches = /\?v=(.*)\?/.exec(this.props.videoSrc)
			return matches ? matches[1] : ''
		} else return ''
	}
	state = {
		videoId: this.getVideoId(),
		opts: {
			playerVars: {
				// https://developers.google.com/youtube/player_parameters
				autoplay: this.props.imgSrc ? 1 : 0,
				modestbranding: 1
			}
		}
	}
	onPlayerReady(e) {
		if (this.state.userPressedPlayButton) this.player.playVideo()
		const playButton = document.getElementById(`play-video-${this.state.videoId}`)
		playButton.addEventListener('click', () => (this.props.isPreview ? null : this.player.playVideo()))
	}
	handlePressPlayAndLoadVideo() {
		if (this.props.isPreview) return
		console.log(this.state.videoId)
		this.setState({ userPressedPlayButton: true })
	}
	getStyle = () => ({
		cursor: this.props.isPreview ? 'default' : 'pointer',
		display: this.state.userPressedPlayButton ? 'none' : 'block'
	})
	_onReady(e) {
		// don't autoplay if video has just been rerendered because of resizing but was paused
		this.setState({ videoReady: true })
		if (this.state.playing) e.target.playVideo()
	}
	onPlay = (e) => this.setState({ playing: true })
	onPause = (e) => this.setState({ playing: false })
	getHeight = () => this.containerEl.clientHeight
	getWidth = () => this.containerEl.clientWidth
	setVideoDimensions = () => {
		this.setState({
			outerWidth: this.getWidth(),
			opts: Object.assign(this.state.opts, {
				height: this.getHeight(),
				width: this.getWidth()
			})
		})
	}
	updateVideoDimensions = ({ height, width }) => {
		this.getIFrame().height = height
		this.getIFrame().width = width
	}
	getIFrame = () => this.containerEl.firstElementChild.firstElementChild.firstElementChild
	getIFrameDimensions = () => ({
		height: this.getIFrame().clientHeight,
		width: this.getIFrame().clientWidth
	})
	getHeightOfGridItem = () => this.containerEl.parentElement.clientHeight
	handleResize = (width) => {
		if (this.state.mounted && this.state.videoReady) {
			const gridItemHeight = this.getHeightOfGridItem()
			this.updateVideoDimensions({
				height: gridItemHeight,
				width
			})
		}
	}
	componentDidMount = () => {
		console.log('Video.jsx has mounted')
		this.setState({ mounted: true })
		this.setVideoDimensions()
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('Video.jsx updated')
		const currentWidth = this.getWidth()
		if (currentWidth !== this.state.outerWidth) {
			this.setVideoDimensions()
		}

		if (this.props.videoSrc !== prevProps.videoSrc) this.setState({ videoId: this.getVideoId() })

		if (this.props.imgSrc !== prevProps.imgSrc) {
			// show placeholder image again if it's been updated but the user has played the video previously
			if (this.state.userPressedPlayButton) this.setState({ userPressedPlayButton: false })

			if (this.props.imgSrc && !this.state.opts.playerVars.autoplay) {
				console.log('setting autoplay to true')
				const opts = this.state.opts
				opts.playerVars.autoplay = 1
				this.setState({ opts })
			} else if (!this.props.imgSrc && this.state.opts.playerVars.autoplay) {
				console.log('setting autoplay to false')
				const opts = this.state.opts
				opts.playerVars.autoplay = 0
				this.setState({ opts })
			}
		}
	}
	render = () => (
		<ReactResizeDetector handleWidth onResize={(e) => this.handleResize(e)}>
			{({ width }) => (
				<div
					ref={(containerEl) => {
						this.containerEl = containerEl
					}}
				>
					{!this.props.videoSrc ? (
						<div>Waiting for a URL</div>
					) : !this.props.imgSrc || this.state.userPressedPlayButton ? (
						<div
							className="video"
							style={{
								position: 'relative',
								height: this.props.height || '30rem'
							}}
						>
							{this.state.mounted && (
								<YouTube
									videoId={this.state.videoId}
									opts={this.state.opts}
									onReady={(e) => this._onReady(e)}
									onPlay={(e) => this.onPlay(e)}
									onPause={(e) => this.onPause(e)}
									onError={(error) => console.log('Youtube error', error)}
								/>
							)}
						</div>
					) : (
						<div
							onClick={() => this.handlePressPlayAndLoadVideo()}
							id={`play-video-${this.state.videoId}`}
							style={this.getStyle()}
							className={`video-link wrapper`}
						>
							<Image src={this.props.imgSrc} selected={this.props.selected} />
							<div className="icon-wrapper">
								<FaPlay className="icon" size="2rem" />
							</div>
						</div>
					)}
				</div>
			)}
		</ReactResizeDetector>
	)
}
