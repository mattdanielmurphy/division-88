import axios from 'axios'
import React from 'react'
import { Responsive } from 'react-grid-layout'
const env = require('../client-env')

import Index from '../components/jsx/index/Index'

export default class AdminIndex extends React.Component {
	constructor(props) {
		super(props)
		this.getGridFromDatabase().then(({ cells, layouts }) => {
			this.setState({ cells, layouts, layoutsLoaded: true })
			this.layoutsHistory = [ layouts ]
			this.layoutsUndone = []
		})
	}
	state = {
		layoutClassName: `layout ${this.gridItemHoveredUpon !== undefined ? 'grid-item-hovered-upon' : ''}`,
		view: 'mobile',
		scale: 1,
		editingModeEnabled: true
	}
	toggleEditingMode() {
		this.setState({ editingModeEnabled: !this.state.editingModeEnabled })
	}
	getGridFromDatabase = async () => {
		const layouts = await axios.get(`${env.apiUrl}/grids/index/layouts`).then((r) => r.data)
		const cells = await axios.get(`${env.apiUrl}/grids/index/cells`).then((r) => r.data)
		return { layouts, cells }
	}
	isAuthenticated = () => {
		return true
	}

	undoLayoutChange() {
		const layouts = this.layoutsHistory[this.layoutsHistory.length - 2]
		if (layouts) {
			this.layoutsUndone.push(this.layoutsHistory[this.layoutsHistory.length - 1])
			this.layoutsHistory = this.layoutsHistory.slice(0, this.layoutsHistory.length - 2)
			this.setState({ layouts })
		}
	}
	redoLayoutChange() {
		const layouts = this.layoutsUndone[this.layoutsUndone.length - 1]
		if (layouts) {
			this.layoutsUndone = this.layoutsUndone.slice(0, this.layoutsUndone.length - 1)
			this.setState({ layouts })
		}
	}
	onLayoutChange(layout, layouts) {
		if (JSON.stringify(layout) === JSON.stringify(this.lastLayoutChange)) return
		this.setState({ layouts })
		this.lastLayoutChange = layout
		if (!this.layoutsHistory) this.layoutsHistory = [ layout ]
		this.layoutsHistory.push(layouts)
		axios.post(`${env.apiUrl}/grids/index`, { layouts })
	}
	updateLayouts(layouts) {}
	getButtonStyle = () => {
		if (this.props.editingModeEnabled) {
			return { backgroundColor: 'red' }
		} else return {}
	}
	setKeyBindings = () => {
		document.onkeypress = (e) => {
			if (e.target.tagName === 'INPUT') return
			else if (e.key === 'e') this.toggleEditingMode()
			else if (e.key === 'u') this.undoLayoutChange()
			else if (e.key === 'r') this.redoLayoutChange()
		}
	}
	updateGridItemHover(gridItemIndex) {
		this.setState({
			gridItemHoveredUpon: gridItemIndex,
			layoutClassName: `layout ${gridItemIndex !== undefined ? 'grid-item-hovered-upon' : ''}`
		})
	}
	setScale = (scale) => this.setState({ scale })
	setView = (view) => this.setState({ view })
	// updateCell = (index, cell) => {
	// 	console.log(index, cell)
	// 	const cells = this.state.cells.slice()
	// 	cells[index] = cell
	// 	this.setState({ cells })
	// 	this.forceUpdate()
	// 	// console.log('adminindex update cell')
	// 	// console.log(this)
	// }
	componentDidMount = () => {
		this.setKeyBindings()
		console.log(document.getElementsByTagName('body')[0])
		document.getElementsByTagName('body')[0].style.backgroundColor = '#222'
	}
	componentDidUpdate = (prevProps) => {
		if (JSON.stringify(this.props.layouts) !== JSON.stringify(prevProps.layouts)) {
			console.log(this.props.layouts)
			this.setState({ layouts: this.props.layouts })
		}
		if (JSON.stringify(this.props.cells) !== JSON.stringify(prevProps.cells)) {
			console.log(this.props.cells)
			this.setState({ cells: this.props.cells })
		}
	}
	render = () =>
		this.state.cells ? (
			// <Page noTopHeading>
			<Index
				selectCell={(index) => this.props.selectCell(index)}
				// updatedCell={this.props.updatedCell}
				view={this.props.view}
				layouts={this.state.layouts}
				cells={this.state.cells}
				ResponsiveGridLayout={Responsive}
				gridWidth={this.props.gridWidth}
				editingModeEnabled={this.state.editingModeEnabled}
				onLayoutChange={(layout, layouts) => this.onLayoutChange(layout, layouts)}
			/>
		) : (
			// </Page>
			// <Iframe
			// 	url="/"
			// 	editingModeEnabled={this.props.editingModeEnabled}
			// 	cells={this.state.cells}
			// 	layouts={this.state.layouts}
			// 	layoutsLoaded={this.state.layoutsLoaded}
			// 	gridWidth={this.props.gridWidth}
			// 	onLayoutChange={(layout, layouts) => this.onLayoutChange(layout, layouts)}
			// 	ResponsiveGridLayout={Responsive}
			// />
			<div>Loading...</div>
		)
}

// CLIENT INDEX BELOW:

// import axios from 'axios'
// import React from 'react'
// import { Responsive, WidthProvider } from 'react-grid-layout'

// import Index from '../components/jsx/index/Index'
// import Page from '../components/jsx/Page'
// const env = require('../client-env')

// export default class ClientIndex extends React.Component {
// 	state = {}
// 	getGridFromDatabase = async () => {
// 		const layouts = await axios.get(`${env.apiUrl}/grids/index/layouts`).then((r) => r.data)
// 		const cells = await axios.get(`${env.apiUrl}/grids/index/cells`).then((r) => r.data)
// 		return { layouts, cells }
// 	}
// 	componentDidMount() {
// 		this.getGridFromDatabase().then(({ cells, layouts }) => {
// 			this.setState({ cells, layouts, layoutsLoaded: true })
// 		})
// 	}
// 	render = () =>
// 		this.state.cells ? (
// 			<Page noTopHeading>
// 				<Index
// 					layouts={this.state.layouts}
// 					cells={this.state.cells}
// 					ResponsiveGridLayout={WidthProvider(Responsive)}
// 				/>
// 			</Page>
// 		) : (
// 			<div>Loading...</div>
// 		)
// }
