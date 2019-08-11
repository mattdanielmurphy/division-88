import React from 'react'
import ToggleButton from '../ToggleButton'
import NonVideoOptions from '../admin/NonVideoOptions'
import axios from 'axios'
import env from '../../../client-env'

export default class CellEditor extends React.Component {
	state = {}
	getCell = async (index) => {
		return await axios.get(`${env.apiUrl}/grids/index/cells/${index}`).then((r) => r.data)
	}
	updateCell = async (index, cell) => {
		const result = await axios.post(`${env.apiUrl}/grids/index/cells/${index}`, cell).then((r) => {
			this.setState({ cellFromDatabase: cell })
			return r.data
		})
		return result
	}

	handleSubmit = async (e) => {
		if (e) e.preventDefault()
		// just submit this modified value
		const result = await axios
			.post(`${env.apiUrl}/grids/index/cells/${this.state.index}`, this.state.cell)
			.then((r) => {
				const cells = this.state.cells.slice()
				this.setState({ cellFromDatabase: this.state.cell, cells, unsavedChanges: false })
				cells[this.state.index] = this.state.cell
				if (this.state.colorChange) {
					this.props.refreshGrid({ cells })
					this.setState({ colorChange: false })
				} else {
					this.props.updateGrid({ cells })
				}
				return r.data
			})
		return result
	}
	handleKeyPress = (e) => {
		if (e.key !== 'Enter') return
		this.handleSubmit(e)
	}

	updateCellValue(path, value) {
		const cell = Object.assign({}, this.state.cell)
		function set(path, value) {
			let schema = cell // a moving reference to internal objects within obj
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
		this.setState({ cell, unsavedChanges: true })
		// if (this.inputChangeInterval) clearInterval(this.inputChangeInterval)
		// this.inputChangeInterval = setInterval(() => {
		// 	this.handleSubmit()
		// }, 500)
	}
	handleInputChange = ({ e, path, value, colorChange }) => {
		if (e) {
			const path = e.target.id
			const value = e.target.value
			this.updateCellValue(path, value)
		} else {
			this.updateCellValue(path, value)
			if (colorChange) this.setState({ colorChange: true })
		}
	}
	getCellsFromDatabase = async () => {
		return await axios.get(`${env.apiUrl}/grids/index/cells`).then((r) => r.data)
	}
	componentDidMount = async () => {
		const cell = await this.getCell(this.props.index)
		const cells = await this.getCellsFromDatabase()
		this.setState({ index: this.props.index, cell, cells, cellFromDatabase: cell })
		window.onbeforeunload = null
		this.setKeyBindings()
	}
	changeIndex = async (index) => {
		const cell = await this.getCell(index)
		this.setState({ index, cell, cellFromDatabase: cell, unsavedChanges: false })
	}
	validateCell() {
		const cell = this.state.cell
		const valid = cell.video ? cell.videoSrc : cell.imgSrc
		if (valid) {
			this.setState({ error: undefined })
		} else {
			this.setState({ error: 'Error: You must provide at least a background image' })
		}
		return valid
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
	newCell = async () => {
		if (this.validateCell()) {
			const layouts = await axios.get(`${env.apiUrl}/grids/index/layouts`).then((r) => r.data)
			const obj = {
				newLayouts: {
					desktop: { w: 12, h: 4, x: 0, minW: 4, minH: 2 },
					tablet: { w: 12, h: 4, x: 0, minW: 4, minH: 2 },
					mobile: { w: 12, h: 4, x: 0, minW: 4, minH: 2 }
				},
				newCell: this.state.cell
			}
			axios.post(`${env.apiUrl}/grids/index/layouts/newCell`, obj).then((r) => {
				const { layouts, cells } = r.data
				this.props.updateGrid({ layouts, cells })
				this.changeIndex(r.data.index)
			})
		}
	}
	deleteCell() {
		axios.get(`${env.apiUrl}/grids/index/cells/${this.state.index}/delete`).then((r) => {
			const { layouts, cells } = r.data
			this.props.updateGrid({ layouts, cells })
		})
	}
	toggleVideoMode = () => {
		this.updateCellValue('video', !this.state.cell.video)
	}
	componentDidUpdate = async (prevProps) => {
		// update index when a new cell is selected
		if (this.props.index !== prevProps.index) {
			if (this.state.unsavedChanges) {
				const discardChanges = window.confirm("You've made unsaved changes for this cell. Proceed and discard?")
				if (discardChanges) this.changeIndex()
			} else this.changeIndex(this.props.index)
		}
	}
	render = () =>
		this.state.cell ? (
			<div id='property-editor'>
				<div className='video-toggle'>
					<ToggleButton enabled={this.state.cell.video} toggle={this.toggleVideoMode}>
						Toggle Video
					</ToggleButton>
				</div>

				<br />

				<form onSubmit={(e) => this.handleSubmit(e)}>
					<div className='property-input'>
						<label>image url</label>
						<input
							onKeyPress={(e) => this.handleKeyPress(e)}
							onChange={(e) => this.handleInputChange({ e })}
							type='text'
							id='imgSrc'
							value={this.state.cell.imgSrc || ''}
						/>
					</div>
					<br />
					{this.state.cell.video ? (
						<div className='property-input'>
							<label>video link:</label>
							<input
								onKeyPress={(e) => this.handleKeyPress(e)}
								onChange={(e) => this.handleInputChange({ e })}
								type='text'
								id='videoSrc'
								value={this.state.cell.videoSrc || ''}
							/>
						</div>
					) : (
						<NonVideoOptions
							handleKeyPress={(e) => this.handleKeyPress(e)}
							handleInputChange={(e) => this.handleInputChange(e)}
							state={this.state}
							refreshGrid={() => this.props.refreshGrid()}
						/>
					)}
					<br />
					{this.state.error}
					<button>Submit changes</button>
				</form>
				<div id='create-new'>
					<button onClick={() => this.newCell()}>Submit as new cell</button>
				</div>
				<button
					onClick={() =>
						window.confirm("Are you sure you want to delete this cell? (There's no going back!)") &&
						this.deleteCell()}
				>
					Delete cell
				</button>
			</div>
		) : (
			<div />
		)
}
