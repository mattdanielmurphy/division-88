import React from 'react'
import ColorPicker from '../ColorPicker'
import axios from 'axios'
import env from '../../../../client-env'

export default class ArtistEditor extends React.Component {
	state = {}
	getArtist = async (index) => {
		return await axios.get(`${env.apiUrl}/producer-tools/index/${index}`).then((r) => r.data)
	}
	handleSubmit = async (e) => {
		if (e) e.preventDefault()
		// just submit this modified value

		const result = await axios
			.post(`${env.apiUrl}/producer-tools/${this.state.index}`, this.state.artist)
			.then((r) => {
				this.setState({ artistFromDatabase: this.state.artist, unsavedChanges: false })
				if (this.state.colorChange) {
					this.props.refreshTools(this.state.index, this.state.artist)
					this.setState({ colorChange: false })
				} else {
					this.props.updateTools(this.state.index, this.state.artist)
				}
				return r.data
			})

		return result
	}
	updateArtistValue(path, value) {
		const artist = Object.assign({}, this.state.artist)
		function set(path, value) {
			let schema = artist // a moving reference to internal objects within obj
			let pList = path.split('.')
			let length = pList.length
			for (let i = 0; i < length - 1; i++) {
				let elem = pList[i]
				if (!schema[elem]) schema[elem] = {}
				schema = schema[elem]
			}

			schema[pList[length - 1]] = value
		}
		set(path, value)
		this.setState({ artist, unsavedChanges: true })
	}
	handleInputChange = ({ e, path, value, colorChange }) => {
		if (e) {
			const path = e.target.id
			const value = e.target.value
			this.updateArtistValue(path, value)
		} else {
			if (colorChange) this.setState({ colorChange: true })
			this.updateArtistValue(path, value)
		}
	}
	changeIndex = async (index) => {
		const artist = await this.getArtist(index)
		this.setState({ index, artist, artistFromDatabase: artist, unsavedChanges: false })
	}
	validateArtist() {
		const cell = this.state.artist
		const valid = cell.video ? cell.videoSrc : cell.imgSrc
		if (valid) {
			this.setState({ error: undefined })
		} else {
			this.setState({ error: 'Error: You must provide at least a background image' })
		}
		return valid
	}
	newArtist = async () => {
		if (this.validateArtist()) {
			axios.post(`${env.apiUrl}/producer-tools/new`, this.state.artist).then((r) => {
				const { layouts, artists } = r.data
				this.props.updateGrid({ layouts, artists })
				this.changeIndex(r.data.index)
			})
		}
	}
	deleteArtist() {
		axios.get(`${env.apiUrl}/producer-tools/${this.props.index}/delete`).then((r) => {
			const { layouts, artists } = r.data
			this.props.updateGrid({ layouts, artists })
		})
	}
	componentDidUpdate = async (prevProps) => {
		// update index when a new artist is selected
		if (this.props.index !== prevProps.index) {
			if (this.state.unsavedChanges) {
				const discardChanges = window.confirm(
					"You've made unsaved changes for this artist. Proceed and discard?"
				)
				if (discardChanges) this.changeIndex()
			} else this.changeIndex(this.props.index)
		}
	}
	handleTextareaKeyPress(e) {
		if (e.key === 'Enter') {
			e.preventDefault()
			this.handleSubmit()
		}
	}
	setKeyBindings = () => {
		document.onkeypress = (e) => {
			if (
				e.target.hasAttribute('data-slate-editor') ||
				e.target.tagName === 'INPUT' ||
				e.target.tagName === 'TEXTAREA'
			)
				return
			else if (e.key === 's') this.handleSubmit()
		}
	}
	componentDidMount = async () => {
		const artist = await this.getArtist(this.props.index)
		this.setState({ artist, index: this.props.index })
		window.onbeforeunload = null
		this.setKeyBindings()
	}
	updateReleases = (data) => {
		const artist = this.state.artist
		artist.releases = data
		this.setState({ artist })
	}
	render = () =>
		this.state.artist ? (
			<div id='property-editor'>
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<div className='property-input'>
						<label>name</label>
						<input
							onChange={(e) => this.handleInputChange({ e })}
							id='name'
							value={this.state.artist.name || ''}
						/>
					</div>
					<div className='property-input'>
						<label>page name</label>
						<input
							onChange={(e) => this.handleInputChange({ e })}
							id='page'
							value={
								this.state.artist.page ||
								(this.state.artist.name && this.state.artist.name.toLowerCase().split(' ').join('-')) ||
								''
							}
						/>
					</div>

					<br />

					<div className='property-input'>
						<label>description text</label>
						<textarea
							rows={6}
							cols={60}
							onKeyPress={(e) => this.handleTextareaKeyPress(e)}
							onChange={(e) => this.handleInputChange({ e })}
							id='description.text'
							value={(this.state.artist.description && this.state.artist.description.text) || ''}
						/>
					</div>
					<br />
					<div className='property-input'>
						<label>description background color (default: darkgrey)</label>
						<ColorPicker
							color={
								(this.state.artist.description &&
									this.state.artist.description.style &&
									this.state.artist.description.style.backgroundColor) ||
								'darkgrey'
							}
							setColor={(color) => {
								const { r, g, b, a } = color.rgb
								const rgbaString = `rgba(${r},${g},${b},${a})`
								this.handleInputChange({
									path: 'description.style.backgroundColor',
									value: rgbaString,
									colorChange: true
								})
							}}
						/>
					</div>
					<div className='property-input'>
						<label>description text color (default: white)</label>
						<ColorPicker
							color={
								(this.state.artist.description &&
									this.state.artist.description.style &&
									this.state.artist.description.style.color) ||
								'#fff'
							}
							setColor={(color) => {
								const { r, g, b, a } = color.rgb
								const rgbaString = `rgba(${r},${g},${b},${a})`
								this.handleInputChange({
									path: 'description.style.color',
									value: rgbaString,
									colorChange: true
								})
							}}
						/>
					</div>
					<br />
					{this.state.error}
					<button>Submit changes</button>
				</form>
				<div id='create-new'>
					<button onClick={() => this.newArtist()}>Submit as new artist</button>
				</div>
				<button
					onClick={() =>
						window.confirm("Are you sure you want to delete this artist? (There's no going back!)") &&
						this.deleteArtist()}
				>
					Delete artist
				</button>
			</div>
		) : (
			<div />
		)
}