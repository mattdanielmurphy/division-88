import React, { Component } from 'react'
import { FaForward, FaPlay, FaPause, FaBackward } from 'react-icons/fa'
import { FiRepeat } from 'react-icons/fi'
import { PlayLoader } from './Loader'

class Controls extends Component {
	render = () => (
		<div id="player-wrapper">
			<div id="player">
				<LeftControls
					playing={this.props.playing}
					togglePlayPause={() => this.props.togglePlayPause()}
					skip={(direction) => this.props.skip(direction)}
					songLoading={this.props.songLoading}
				/>
				<Seeker
					timeRemaining={this.props.timeRemaining}
					disabled={!this.props.canPlayThrough}
					onChange={(e) => this.props.handleSeek(e)}
				/>
				<RightControls toggleRepeat={(repeat) => this.props.toggleRepeat(repeat)} repeat={this.props.repeat} />
			</div>
		</div>
	)
}

const LeftControls = (props) => (
	<div id="controls-left">
		<PrevSong skip={() => props.skip('prev')} />
		<PlayPause
			playing={props.playing}
			togglePlayPause={() => props.togglePlayPause()}
			songLoading={props.songLoading}
		/>
		<NextSong skip={() => props.skip('next')} />
	</div>
)

const NextSong = (props) => (
	<button onClick={() => props.skip()}>
		<FaForward />
	</button>
)
const PlayPause = (props) =>
	props.songLoading ? (
		<PlayLoader as="button" />
	) : (
		<button onClick={() => props.togglePlayPause()}>{props.playing ? <FaPause /> : <FaPlay />}</button>
	)

const PrevSong = (props) => (
	<button onClick={() => props.skip()}>
		<FaBackward />
	</button>
)

const Seeker = (props) => (
	<div id="seek-display">
		<div id="seek-wrapper">
			<input
				type="range"
				id="seek"
				min="0"
				max="100"
				defaultValue="0"
				disabled={props.disabled}
				onChange={(e) => props.onChange(e)}
			/>
		</div>
		<div id="time-remaining">-{props.timeRemaining}</div>
	</div>
)

const RightControls = (props) => (
	<div id="controls-right">
		<Repeat toggleRepeat={(repeat) => props.toggleRepeat(repeat)} repeat={props.repeat} />
	</div>
)

class Repeat extends Component {
	handleClick() {
		let repeatButton = document.getElementById('repeat-button')
		repeatButton.classList.toggle('repeat-on')
		this.props.toggleRepeat()
	}
	render = () => (
		<button id="repeat-button" onClick={() => this.handleClick()}>
			<FiRepeat />
		</button>
	)
}

export default Controls
