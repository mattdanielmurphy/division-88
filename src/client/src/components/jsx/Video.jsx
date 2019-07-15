import React from 'react'
import { FaPlay } from 'react-icons/fa'

const VideoEl = ({ videoId }) => {
	return (
		<div
			className="video"
			style={{
				position: 'relative',
				height: '100%'
			}}
		>
			<iframe
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%'
				}}
				src={`https://www.youtube.com/embed/${videoId}`}
				frameBorder="0"
			/>
		</div>
	)
}

export default class Video extends React.Component {
	state = {}
	playVideo() {
		if (this.props.editingModeEnabled) return
		const videoId = /\?v=(.*)/.exec(this.props.videoSrc)[1]
		this.setState({ videoId })
	}
	getStyle = () => ({
		cursor: this.props.editingModeEnabled ? 'default' : 'pointer'
	})
	render = () => {
		return this.state.videoId ? (
			<VideoEl videoId={this.state.videoId} />
		) : (
			<div onClick={() => this.playVideo()} style={this.getStyle()} className="video-link wrapper">
				<img src={this.props.imgSrc} onMouseDown={(e) => e.preventDefault()} alt="image" />
				<div className="icon-wrapper">
					<FaPlay className="icon" />
			</div>
			</div>
		)
	}
}
