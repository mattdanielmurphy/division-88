import React from 'react'
import ToggleButton from 'components/jsx/ToggleButton'
import NonVideoOptions from 'components/jsx/index/NonVideoOptions'
import axios from 'axios'
import env from 'client-env'

export default class CellEditor extends React.Component {
	state = {}
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

	handleSubmit = async (e) => {
		e.preventDefault()
		// just submit this modified value
		const result = await axios
			.post(`${env.apiUrl}/grids/index/cells/${this.state.index}`, this.state.cell)
			.then((r) => {
				this.setState({ cellFromDatabase: this.state.cell, unsavedChanges: false })
				const cells = this.state.cells.slice()
				console.log(cells, this.state.index, cells[this.state.index])
				cells[this.state.index] = this.state.cell
				console.log('CELLS', cells)
				this.props.updateGrid({ cells })
				return r.data
			})
		return result
	}
	handleKeyPress = () => {}
	// handleKeyPress = (e) => {
	// 	// e.preventDefault()
	// 	if (e.key !== 'Enter') return
	// 	// just submit this modified value
	// 	const cell = Object.assign({}, this.state.cellFromDatabase)
	// 	let id = e.target.id
	// 	let value = e.target.value
	// 	function set(path, value) {
	// 		var schema = cell // a moving reference to internal objects within obj
	// 		var pList = path.split('.')
	// 		var len = pList.length
	// 		for (var i = 0; i < len - 1; i++) {
	// 			var elem = pList[i]
	// 			if (!schema[elem]) schema[elem] = {}
	// 			schema = schema[elem]
	// 		}

	// 		schema[pList[len - 1]] = value
	// 	}
	// 	set(id, value)
	// 	this.updateCell(this.state.index, cell)
	// }

	// handleRealTimeInputChange = (e) => {
	// 	const cell = Object.assign({}, this.state.cell)
	// 	let id = e.target.id
	// 	let value = e.target.value
	// 	function set(path, value) {
	// 		var schema = cell // a moving reference to internal objects within obj
	// 		var pList = path.split('.')
	// 		var len = pList.length
	// 		for (var i = 0; i < len - 1; i++) {
	// 			var elem = pList[i]
	// 			if (!schema[elem]) schema[elem] = {}
	// 			schema = schema[elem]
	// 		}

	// 		schema[pList[len - 1]] = value
	// 	}
	// 	set(id, value)
	// 	this.props.updateCell(this.state.index, cell)
	// 	// if (this.inputChangeInterval) clearInterval(this.inputChangeInterval)
	// 	// this.inputChangeInterval = setInterval(() => {
	// 	// 	valueToEdit = value
	// 	// 	this.updateCell(cell)
	// 	// }, 500)
	// }
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
	}
	handleInputChange = (e) => {
		const path = e.target.id
		console.log(path)
		const value = e.target.value
		this.updateCellValue(path, value)
	}
	getCellsFromDatabase = async () => {
		return await axios.get(`${env.apiUrl}/grids/index/cells`).then((r) => r.data)
	}
	componentDidMount = async () => {
		const cell = await this.getCell(this.props.index)
		const cells = await this.getCellsFromDatabase()
		this.setState({ index: this.props.index, cell, cellFromDatabase: cell, cells })
		window.onbeforeunload = null
	}
	changeIndex = async (index) => {
		const cell = await this.getCell(index)
		this.setState({ index, cell, cellFromDatabase: cell, unsavedChanges: false })
	}
	newCell() {
		console.log('new cell')
		const obj = {
			newLayouts: {
				desktop: { w: 12, h: 4, x: 0, y: 0 },
				tablet: { w: 12, h: 4, x: 0, y: 0 },
				mobile: { w: 12, h: 4, x: 0, y: 0 }
			},
			newCell: {
				imgSrc: '/images/trees.jpg'
			}
		}
		axios.post(`${env.apiUrl}/grids/index/layouts/newCell`, obj).then((r) => {
			const { layouts, cells } = r.data
			this.props.updateGrid({ layouts, cells })
			this.changeIndex(r.data.index)
		})
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
				const discardChanges = confirm("You've made unsaved changes for this cell. Proceed and discard?")
				if (discardChanges) this.changeIndex()
			} else this.changeIndex(this.props.index)
		}
	}
	render = () =>
		this.state.cell ? (
			<div id="cell-editor">
				<div id="create-new">
					<button onClick={() => this.newCell()}>New</button>
				</div>
				<div className="video-toggle">
					<ToggleButton enabled={this.state.cell.video} toggle={this.toggleVideoMode}>
						Toggle Video
					</ToggleButton>
				</div>

				<br />

				<form onSubmit={(e) => this.handleSubmit(e)}>
					<div className="cell-property-input">
						<label>Image url</label>
						<input
							onKeyPress={(e) => this.handleKeyPress(e)}
							onChange={(e) => this.handleInputChange(e)}
							type="text"
							id="imgSrc"
							value={this.state.cell.imgSrc || ''}
						/>
					</div>
					<br />
					{this.state.cell.video ? (
						<div className="cell-property-input">
							<label>Video link:</label>
							<input
								onKeyPress={(e) => this.handleKeyPress(e)}
								onChange={(e) => this.handleInputChange(e)}
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
					<button>Submit changes</button>
				</form>
				<button onClick={() => confirm('Are you sure?') && this.deleteCell()}>Delete cell</button>
			</div>
		) : (
			<div>loading...</div>
		)
}
