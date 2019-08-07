import React from 'react'
import ToggleButton from 'components/jsx/ToggleButton'
import NonVideoOptions from 'components/jsx/admin/NonVideoOptions'
import axios from 'axios'
import env from 'client-env'

export default class CellEditor extends React.Component {
	state = {}
	// did not change:
	getCell = async (index) => {
		return await axios.get(`${env.apiUrl}/grids/index/cells/${index}`).then((r) => r.data)
	}
	updateCell = async (index, cell) => {
		const result = await axios.post(`${env.apiUrl}/grids/index/cells/${index}`, cell).then((r) => {
			this.setState({ cellFromDatabase: cell })
			this.props.refreshGrid()
			return r.data
		})
		return result
	}
	// did change:
	handleSubmit = async (e) => {
		if (e) e.preventDefault()
		// just submit this modified value
		console.log('submit', this.state.artist, this.state.index)
		const result = await axios
			.post(`${env.apiUrl}/grids/index/cells/${this.state.index}`, this.state.cell)
			.then((r) => {
				this.setState({ artistFromDatabase: this.state.artist, unsavedChanges: false })
				const cells = this.state.cells.slice()
				cells[this.state.index] = this.state.cell
				this.props.updateGrid({ cells })
				return r.data
			})
		console.log(result)
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
	handleInputChange = ({ e, path, value }) => {
		if (e) {
			const path = e.target.id
			const value = e.target.value
			this.updateArtistValue(path, value)
		} else {
			console.log(value)
			this.updateArtistValue(path, value)
		}
	}
	changeIndex = async (index) => {
		const artist = await this.getArtist(index)
		this.setState({ index, artist, artistFromDatabase: artist, unsavedChanges: false })
	}
	// validateArtist() {
	// 	const cell = this.state.artist
	// 	const valid = cell.video ? cell.videoSrc : cell.imgSrc
	// 	if (valid) {
	// 		this.setState({ error: undefined })
	// 	} else {
	// 		this.setState({ error: 'Error: You must provide at least a background image' })
	// 	}
	// 	return valid
	// }
	// newArtist = async () => {
	// 	if (this.validateArtist()) {
	// 		axios.post(`${env.apiUrl}/artists/new`, this.state.artist).then((r) => {
	// 			const { layouts, artists } = r.data
	// 			this.props.updateGrid({ layouts, artists })
	// 			this.changeIndex(r.data.index)
	// 		})
	// 	}
	// }
	// deleteArtist() {
	// 	axios.get(`${env.apiUrl}/grids/index/artists/${this.props.index}/delete`).then((r) => {
	// 		const { layouts, artists } = r.data
	// 		this.props.updateGrid({ layouts, artists })
	// 	})
	// }
	componentDidUpdate = async (prevProps) => {
		// update index when a new artist is selected
		if (this.props.index !== prevProps.index) {
			if (this.state.unsavedChanges) {
				const discardChanges = confirm("You've made unsaved changes for this artist. Proceed and discard?")
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
	componentWillMount = async () => {
		const artist = await this.getArtist(this.props.index)
		this.setState({ artist, index: this.props.index })
		window.onbeforeunload = null
	}
	updateReleases = (data) => {
		console.log(data)
		const artist = this.state.artist
		artist.releases = data
		this.setState({ artist })
	}

	// handleSubmit = async (e) => {
	// 	if (e) e.preventDefault()
	// 	// just submit this modified value
	// 	const result = await axios
	// 		.post(`${env.apiUrl}/grids/index/cells/${this.state.index}`, this.state.cell)
	// 		.then((r) => {
	// 			this.setState({ cellFromDatabase: this.state.cell, unsavedChanges: false })
	// 			const cells = this.state.cells.slice()
	// 			cells[this.state.index] = this.state.cell
	// 			this.props.updateGrid({ cells })
	// 			return r.data
	// 		})
	// 	return result
	// }
	// handleKeyPress = (e) => {
	// 	if (e.key !== 'Enter') return
	// 	this.handleSubmit(e)
	// }

	// // handleRealTimeInputChange = (e) => {
	// // 	const cell = Object.assign({}, this.state.cell)
	// // 	let id = e.target.id
	// // 	let value = e.target.value
	// // 	function set(path, value) {
	// // 		var schema = cell // a moving reference to internal objects within obj
	// // 		var pList = path.split('.')
	// // 		var len = pList.length
	// // 		for (var i = 0; i < len - 1; i++) {
	// // 			var elem = pList[i]
	// // 			if (!schema[elem]) schema[elem] = {}
	// // 			schema = schema[elem]
	// // 		}

	// // 		schema[pList[len - 1]] = value
	// // 	}
	// // 	set(id, value)
	// // 	this.props.updateCell(this.state.index, cell)
	// // 	// if (this.inputChangeInterval) clearInterval(this.inputChangeInterval)
	// // 	// this.inputChangeInterval = setInterval(() => {
	// // 	// 	valueToEdit = value
	// // 	// 	this.updateCell(cell)
	// // 	// }, 500)
	// // }
	// updateCellValue(path, value) {
	// 	const cell = Object.assign({}, this.state.cell)
	// 	function set(path, value) {
	// 		let schema = cell // a moving reference to internal objects within obj
	// 		let pList = path.split('.')
	// 		let length = pList.length
	// 		for (let i = 0; i < length - 1; i++) {
	// 			let elem = pList[i]
	// 			if (!schema[elem]) schema[elem] = {}
	// 			schema = schema[elem]
	// 		}

	// 		schema[pList[length - 1]] = value
	// 	}
	// 	set(path, value)
	// 	this.setState({ cell, unsavedChanges: true })
	// }
	// handleInputChange = ({ e, path, value }) => {
	// 	if (e) {
	// 		const path = e.target.id
	// 		const value = e.target.value
	// 		this.updateCellValue(path, value)
	// 	} else {
	// 		console.log(value)
	// 		this.updateCellValue(path, value)
	// 	}
	// }
	// getCellsFromDatabase = async () => {
	// 	return await axios.get(`${env.apiUrl}/grids/index/cells`).then((r) => r.data)
	// }
	// componentDidMount = async () => {
	// 	const cell = await this.getCell(this.props.index)
	// 	const cells = await this.getCellsFromDatabase()
	// 	this.setState({ index: this.props.index, cell, cells, cellFromDatabase: cell })
	// 	window.onbeforeunload = null
	// }
	// changeIndex = async (index) => {
	// 	const cell = await this.getCell(index)
	// 	this.setState({ index, cell, cellFromDatabase: cell, unsavedChanges: false })
	// }
	// validateCell() {
	// 	const cell = this.state.cell
	// 	const valid = cell.video ? cell.videoSrc : cell.imgSrc
	// 	if (valid) {
	// 		this.setState({ error: undefined })
	// 	} else {
	// 		this.setState({ error: 'Error: You must provide at least a background image' })
	// 	}
	// 	return valid
	// }
	// newCell = async () => {
	// 	if (this.validateCell()) {
	// 		const layouts = await axios.get(`${env.apiUrl}/grids/index/layouts`).then((r) => r.data)
	// 		const obj = {
	// 			newLayouts: {
	// 				desktop: { w: 12, h: 4, x: 0, minW: 4, minH: 2 },
	// 				tablet: { w: 12, h: 4, x: 0, minW: 4, minH: 2 },
	// 				mobile: { w: 12, h: 4, x: 0, minW: 4, minH: 2 }
	// 			},
	// 			newCell: this.state.cell
	// 		}
	// 		axios.post(`${env.apiUrl}/grids/index/layouts/newCell`, obj).then((r) => {
	// 			const { layouts, cells } = r.data
	// 			this.props.updateGrid({ layouts, cells })
	// 			this.changeIndex(r.data.index)
	// 		})
	// 	}
	// }
	// deleteCell() {
	// 	axios.get(`${env.apiUrl}/grids/index/cells/${this.state.index}/delete`).then((r) => {
	// 		const { layouts, cells } = r.data
	// 		this.props.updateGrid({ layouts, cells })
	// 	})
	// }
	// toggleVideoMode = () => {
	// 	this.updateCellValue('video', !this.state.cell.video)
	// }
	// componentDidUpdate = async (prevProps) => {
	// 	// update index when a new cell is selected
	// 	if (this.props.index !== prevProps.index) {
	// 		if (this.state.unsavedChanges) {
	// 			const discardChanges = confirm("You've made unsaved changes for this cell. Proceed and discard?")
	// 			if (discardChanges) this.changeIndex()
	// 		} else this.changeIndex(this.props.index)
	// 	}
	// }
	render = () =>
		this.state.cell ? (
			<div id="property-editor">
				<div className="video-toggle">
					<ToggleButton enabled={this.state.cell.video} toggle={this.toggleVideoMode}>
						Toggle Video
					</ToggleButton>
				</div>

				<br />

				<form onSubmit={(e) => this.handleSubmit(e)}>
					<div className="property-input">
						<label>Image url</label>
						<input
							onKeyPress={(e) => this.handleKeyPress(e)}
							onChange={(e) => this.handleInputChange({ e })}
							type="text"
							id="imgSrc"
							value={this.state.cell.imgSrc || ''}
						/>
					</div>
					<br />
					{this.state.cell.video ? (
						<div className="property-input">
							<label>Video link:</label>
							<input
								onKeyPress={(e) => this.handleKeyPress(e)}
								onChange={(e) => this.handleInputChange({ e })}
								type="text"
								id="videoSrc"
								value={this.state.cell.videoSrc || ''}
							/>
						</div>
					) : (
						<NonVideoOptions
							handleKeyPress={(e) => this.handleKeyPress(e)}
							handleInputChange={(e) => this.handleInputChange(e)}
							state={this.state}
						/>
					)}
					<br />
					{this.state.error}
					<button>Submit changes</button>
				</form>
				<div id="create-new">
					<button onClick={() => this.newCell()}>Submit as new cell</button>
				</div>
				<button
					onClick={() =>
						confirm("Are you sure you want to delete this cell? (There's no going back!)") &&
						this.deleteCell()}
				>
					Delete cell
				</button>
			</div>
		) : (
			<div></div>
		)
}
