import React from 'react'
import YouTube from 'react-youtube'
import { FaPlay } from 'react-icons/fa'
import Image from './Image'
import ReactResizeDetector from 'react-resize-detector'

export default class Video extends React.Component {
  getVideoId = () => {
    if (this.props.videoSrc) {
      const matches = /\?v=(.*)/.exec(this.props.videoSrc)
      return matches ? matches[1] : ''
    } else return ''
  }
  state = {
    videoId: this.getVideoId(),
    opts: {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        modestbranding: 1,
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
  getWidth = () => this.containerEl.clientWidth
  setVideoDimensions = () => {
    this.setState({
      outerWidth: this.getWidth(),
      opts: Object.assign(this.state.opts, {
        height: this.props.height,
        width: this.getWidth(),
      }),
    })
  }
  componentDidMount = () => {
    this.setState({ mounted: true })
    this.setVideoDimensions()
  }
  render = () => (
    <div
      ref={(containerEl) => {
        this.containerEl = containerEl
      }}
      style={{height: this.props.height, width: '100%'}}
    >
      {this.state.userPressedPlayButton ? (
        <div
          className='video'
          style={{
            position: 'relative',
            height: this.props.height || '100%',
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
          <div className='img' style={{background: `url(${this.props.imgSrc}) center/cover no-repeat`, height: this.props.height}} />
          <div className='icon-wrapper' style={{
            position: 'relative',
            top: '-165px',
            zIndex: '999',
            textAlign: 'center',
            fontSize: '26px',
          }}>
            <FaPlay className='icon' />
          </div>
        </div>
      )}
    </div>
  )
}
