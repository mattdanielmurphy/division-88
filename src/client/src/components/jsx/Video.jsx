import React from 'react'
import YouTube from 'react-youtube'
import { FaPlay } from 'react-icons/fa'
import Image from './Image'
import { SizeMe } from 'react-sizeme'

// class VideoEl extends React.Component {
// 	state = {}
// 	render = () => {
// 		return (
// 			<div
// 				className='video'
// 				style={{
// 					position: 'relative',
// 					height: '100%',
// 					display: this.props.loaded ? 'block' : 'none'
// 				}}
// 			>
// 				<YouTube videoId='2g811Eo7K8U' opts={opts} onReady={this._onReady} />
// 			</div>
// 		)
// 		{
// 			/* <iframe
// 					id={`video-${this.props.videoId}`}
// 					style={{
// 						position: 'absolute',
// 						top: 0,
// 						left: 0,
// 						width: '100%',
// 						height: '100%'
// 					}}
// 					webkitallowfullscreen='true'
// 					mozallowfullscreen='true'
// 					allowFullScreen
// 					src={`https://www.youtube.com/embed/${this.props
// 						.videoId}?enablejsapi=1&modestbranding=1?&origin=http://localhost:3000`}
// 					frameBorder='0'
// 				/> */
// 		}
// 	}
// }

export default class Video extends React.Component {
  state = {
    videoId: this.props.videoSrc ? /\?v=(.*)/.exec(this.props.videoSrc)[1] : '',
    opts: {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    },
  }
  onPlayerReady(e) {
    if (this.state.userPressedPlayButton) this.player.playVideo()
    const playButton = document.getElementById(
      `play-video-${this.state.videoId}`,
    )
    playButton.addEventListener('click', () =>
      this.props.isPreview ? null : this.player.playVideo(),
    )
  }
  handlePressPlayAndLoadVideo() {
    if (this.props.isPreview) return
    console.log(this.state.videoId)
    this.setState({ userPressedPlayButton: true })
  }
  getStyle = () => ({
    cursor: this.props.isPreview ? 'default' : 'pointer',
    display: this.state.userPressedPlayButton ? 'none' : 'block',
  })
  _onReady(e) {
    // don't autoplay if video has just been rerendered because of resizing but was paused
    this.setState({ videoReady: true })
    if (this.state.playing !== false) e.target.playVideo()
  }
  onPlay = (e) => this.setState({ playing: true })
  onPause = (e) => this.setState({ playing: false })
  getHeight = () => this.containerEl.clientHeight
  getWidth = () => this.containerEl.clientWidth
  setVideoDimensions = () => {
    this.setState({
      outerWidth: this.getWidth(),
      opts: {
        height: this.getHeight(),
        width: this.getWidth(),
      },
    })
  }
  updateVideoDimensions = ({ height, width }) => {
    this.getIFrame().height = height
    this.getIFrame().width = width
  }
  getIFrame = () =>
    this.containerEl.firstElementChild.firstElementChild.firstElementChild
  getIFrameDimensions = () => ({
    height: this.getIFrame().clientHeight,
    width: this.getIFrame().clientWidth,
  })
  getHeightOfGridItem = () => this.containerEl.parentElement.clientHeight
  getWidthOfGridItem = () => this.containerEl.parentElement.clientWidth
  componentDidMount = () => {
    this.setState({ mounted: true })
    // this.setVideoDimensions()
  }
  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log(this.size)
    if (this.state.mounted && this.state.videoReady) {
      const gridItemHeight = this.getHeightOfGridItem()
      const gridItemWidth = this.getWidthOfGridItem()
      if (prevState.opts.height !== gridItemHeight) {
        this.updateVideoDimensions({
          height: gridItemHeight,
          width: gridItemWidth,
        })
      }
    }
  }
  render = () => (
    <SizeMe>
      {({ size }) => (
        <div
          ref={(containerEl) => {
            this.containerEl = containerEl
            this.size = size
          }}
        >
          {this.state.userPressedPlayButton ? (
            <div
              className='video'
              style={{
                position: 'relative',
                height: '100%',
              }}
            >
              <YouTube
                videoId={this.state.videoId}
                opts={this.state.opts}
                onReady={(e) => this._onReady(e)}
                onPlay={(e) => this.onPlay(e)}
                onPause={(e) => this.onPause(e)}
                onError={(error) => console.log('Youtube error', error)}
              />
            </div>
          ) : (
            <div
              onClick={() => this.handlePressPlayAndLoadVideo()}
              id={`play-video-${this.state.videoId}`}
              style={this.getStyle()}
              className={`video-link wrapper`}
            >
              <Image src={this.props.imgSrc} selected={this.props.selected} />
              <div className='icon-wrapper'>
                <FaPlay className='icon' />
              </div>
            </div>
          )}
        </div>
      )}
    </SizeMe>
  )
}
