import React from 'react'
import ColorPicker from '../ColorPicker'

import ImageUploader from './ImageUploader'
import AdminProducerTool from 'pages/admin-producer-tool'

export default class ArtistEditor extends React.Component {
	state = {}
	getArtist = async (index) => {
		return await this.props.AdminAPI.get(`/producer-tools/index/${index}`).then((r) => r.data)
	}
	handleSubmit = async (e) => {
		if (e) e.preventDefault()
		// just submit this modified value

		const result = await this.props.AdminAPI.post('/producer-tools', this.state.artist).then((r) => {
			this.setState({
				artistFromDatabase: this.state.artist,
				unsavedChanges: false
			})
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
			this.setState({ artist, unsavedChanges: true }, () => resolve())
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
			artistFromDatabase: artist,
			unsavedChanges: false
		})
	}
	validateArtist() {
		const valid = true
		if (valid) {
			this.setState({ error: undefined })
		} else {
			this.setState({
				error: 'Error: You must provide at least a background image'
			})
		}
		return valid
	}
	newArtist = async () => {
		if (this.validateArtist()) {
			delete this.state.artist._id
			delete this.state.artist.__v
			this.props.AdminAPI.post('/producer-tools/new', this.state.artist).then((r) => {
				const { index, tool } = r.data
				this.props.refreshTools(index, tool, index)
				this.changeIndex(index)
			})
		}
	}
	deleteArtist() {
		let newIndex = this.props.index - 1
		if (newIndex < 0) newIndex = 0
		this.changeIndex(newIndex)
		const tool = this.state.artist
		this.setState({ artist: undefined, index: newIndex }, () => {
			this.props.AdminAPI.delete('/producer-tools', { data: tool }).then((r) => {
				this.props.refreshTools(this.props.index, undefined, newIndex)
			})
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
					<div className="property-input">
						<label>image</label>
						<ImageUploader
							AdminAPI={this.props.AdminAPI}
							image={this.state.artist.imgSrc}
							setImage={async (url) => {
								await this.handleInputChange({
									path: 'imgSrc',
									value: url
								})
								// this.handleSubmit()
							}}
						/>
					</div>

					<br />

					<div className="property-input">
						<label>description text</label>
						<textarea
							rows={6}
							cols={60}
							onKeyPress={(e) => this.handleTextareaKeyPress(e)}
							onChange={(e) => this.handleInputChange({ e })}
							id="description.text"
							value={(this.state.artist.description && this.state.artist.description.text) || ''}
						/>
					</div>
					<br />
					<div className="property-input">
						<label>Dropbox file link (for download)</label>
						<input
							onChange={(e) => this.handleInputChange({ e })}
							id="dropboxUrl"
							value={this.state.artist.dropboxUrl || ''}
						/>
					</div>
					<br />
					{/*<div className='property-input'>*/}
					{/*  <label>description background color</label>*/}
					{/*  <ColorPicker*/}
					{/*    color={*/}
					{/*      (this.state.artist.description &&*/}
					{/*        this.state.artist.description.style &&*/}
					{/*        this.state.artist.description.style.backgroundColor) ||*/}
					{/*      'darkgrey'*/}
					{/*    }*/}
					{/*    setColor={(color) => {*/}
					{/*      const { r, g, b, a } = color.rgb*/}
					{/*      const rgbaString = `rgba(${r},${g},${b},${a})`*/}
					{/*      this.handleInputChange({*/}
					{/*        path: 'description.style.backgroundColor',*/}
					{/*        value: rgbaString,*/}
					{/*        colorChange: true,*/}
					{/*      })*/}
					{/*    }}*/}
					{/*  />*/}
					{/*</div>*/}
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
					<br />
					{this.state.error}
				</form>
				<div id="create-new">
					<button onClick={() => this.newArtist()}>Submit as new producer tool</button>
				</div>
				<button
					onClick={() =>
						window.confirm(
							"Are you sure you want to delete this producer tool? (There's no going back!)"
						) && this.deleteArtist()}
				>
					Delete producer tool
				</button>
				<br />
				<AdminProducerTool
					AdminAPI={this.props.AdminAPI}
					setChangesMade={(changesMade) => this.props.setChangesMade(changesMade)}
					tool={this.state.artist}
					// toolName={
					// 	this.state.artist.page ||
					// 	(this.state.artist.name && this.state.artist.name.toLowerCase().split(' ').join('-'))
					// }
				/>
			</div>
		) : (
			<div />
		)
}
