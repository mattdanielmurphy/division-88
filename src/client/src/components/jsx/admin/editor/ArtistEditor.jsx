import React from 'react'
import ColorPicker from '../ColorPicker'
import VideoPicker from './VideoPicker'

import ImageUploader from './ImageUploader'

export default class ArtistEditor extends React.Component {
	state = {}
	getArtist = async (index) => {
		return await this.props.AdminAPI.get(`/artists/index/${index}`).then((r) => r.data)
	}
	updateState = (artist) => {
		console.log(artist)
		artist.videoImg = artist.imgSrc
		delete artist.imgSrc
		console.log(artist)
		artist = Object.assign(this.state.artist, artist)
		this.setState({ artist }, () => this.handleSubmit())
	}
	handleSubmit = async (e) => {
		if (e) e.preventDefault()
		// just submit this modified value

		const result = await this.props.AdminAPI.post(`/artists/${this.state.index}`, this.state.artist).then((r) => {
			this.setState({
				artistFromDatabase: this.state.artist
			})
			if (this.state.colorChange) {
				this.props.refreshArtists(this.state.index, this.state.artist)
				this.setState({ colorChange: false })
			} else {
				this.props.updateArtists(this.state.index, this.state.artist)
			}
			return r.data
		})

		return result
	}
	updateArtistValue = async (path, value) => {
		return await new Promise((resolve) => {
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
			this.setState({ artist }, () => resolve())
		})
	}
	handleInputChange = async ({ e, path, value, colorChange }) => {
		if (colorChange) this.setState({ colorChange: true })
		if (e) {
			path = e.target.id
			value = e.target.value
		}

		await this.updateArtistValue(path, value)
		this.handleSubmit()
	}
	changeIndex = async (index) => {
		const artist = await this.getArtist(index)
		this.setState({
			index,
			artist,
			artistFromDatabase: artist
		})
	}
	validateArtist() {
		// const { imgSrc, name, description, bio, style, spotifyUrl, releases } = this.state.artist
		// const valid = imgSrc && name && description && bio && style && spotifyUrl
		const valid = true
		if (valid) this.setState({ error: undefined })
		else this.setState({ error: 'Error: You are missing a required field' })
		return valid
	}
	newArtist = async () => {
		if (this.validateArtist()) {
			console.log(this.state.artist)
			delete this.state.artist._id
			delete this.state.artist.__v
			this.props.AdminAPI.post('/artists/new', this.state.artist).then((r) => {
				const { index, artist } = r.data
				this.props.refreshArtists(index, artist)
				this.changeIndex(index)
			})
		}
	}
	deleteArtist() {
		let newIndex = this.props.index - 1
		if (newIndex < 0) newIndex = 0
		this.changeIndex(newIndex)
		const artist = this.state.artist
		this.setState({ artist: undefined, index: newIndex }, () => {
			this.props.AdminAPI.delete('/artists', { data: artist }).then((r) => {
				this.props.refreshArtists(this.props.index, undefined, newIndex)
			})
		})
	}
	componentDidUpdate = async (prevProps) => {
		// update index when a new artist is selected
		if (this.props.index !== prevProps.index) this.changeIndex(this.props.index)
	}
	componentDidMount = async () => {
		const artist = await this.getArtist(this.props.index)
		this.setState({ artist, index: this.props.index })
		window.onbeforeunload = null
		this.setKeyBindings()
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
	updateReleases = (data) => {
		const artist = this.state.artist
		artist.releases = data
		this.setState({ artist })
	}
	render = () =>
		this.state.artist ? (
			<div id="property-editor">
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<div className="property-input">
						<label>name</label>
						<input
							onChange={(e) => this.handleInputChange({ e })}
							id="name"
							value={this.state.artist.name || ''}
						/>
					</div>
					<div className="property-input">
						<label>page name</label>
						<input
							onChange={(e) => this.handleInputChange({ e })}
							id="page"
							value={
								this.state.artist.page ||
								(this.state.artist.name && this.state.artist.name.toLowerCase().split(' ').join('-')) ||
								''
							}
						/>
					</div>
					<div className="input-gap" />
					<div className="property-input">
						<label>Spotify URL (artist page)</label>
						<input
							onChange={(e) => this.handleInputChange({ e })}
							id="spotifyUrl"
							value={this.state.artist.spotifyUrl || ''}
						/>
					</div>
					<div className="input-gap" />
					<VideoPicker
						videoSrc={this.state.artist.videoSrc}
						youtubeId={this.state.artist.youtubeId}
						imgSrc={this.state.artist.videoImg}
						updateState={(artist) => this.updateState(artist)}
					/>
					<div className="property-input">
						<label>artist image</label>
						<ImageUploader
							AdminAPI={this.props.AdminAPI}
							image={this.state.artist.imgSrc}
							setImage={(url) => this.handleInputChange({ path: 'imgSrc', value: url })}
						/>
					</div>
					<div className="input-gap" />
					<div className="property-input">
						<label>bio</label>
						<textarea
							rows={6}
							cols={60}
							onKeyPress={(e) => this.handleTextareaKeyPress(e)}
							onChange={(e) => this.handleInputChange({ e })}
							id="description.bio"
							value={(this.state.artist.description && this.state.artist.description.bio) || ''}
						/>
					</div>
					<div className="input-gap" />
					<div className="property-input">
						<label>description text color</label>
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
					<div className="input-gap" />
					{this.state.error}
				</form>
				<div id="create-new">
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
