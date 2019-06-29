import React from 'react'
import { FaPlay } from 'react-icons/fa'

const VideoEl = ({ videoId }) => {
	console.log(videoId)
	return (
		<div
			className="video"
			style={{
				position: 'relative',
				paddingBottom: '56.25%' /* 16:9 */,
				paddingTop: 25,
				height: 0
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
		const videoId = /\?v=(.*)/.exec(this.props.videoSrc)[1]
		this.setState({ videoId })
	}
	componentDidMount() {}
	render = () => {
		return this.state.videoId ? (
			<VideoEl videoId={this.state.videoId} />
		) : (
			<div onClick={() => this.playVideo()} className="video-link wrapper">
				<img src={this.props.imgSrc} alt="image" />
				<FaPlay className="icon" />
			</div>
		)
	}
}
