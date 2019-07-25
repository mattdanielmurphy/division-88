import axios from 'axios'
import React from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'

import GridItem from '../components/jsx/index/GridItem'
import { lastDayOfQuarter } from 'date-fns'
const env = require('../client-env')

export default class Index extends React.Component {
	constructor(props) {
		super(props)
		this.getGridFromDatabase().then(({ cells, layouts }) => {
			this.setState({ cells, layouts, layoutsLoaded: true })
			this.layoutsHistory = [ layouts ]
			this.layoutsUndone = []
		})
	}
	state = {
		layoutClassName: `layout ${this.gridItemHoveredUpon !== undefined ? 'grid-item-hovered-upon' : ''}`
	}
	getGridFromDatabase = async () => {
		const layouts = await axios.get(`${env.apiUrl}/grids/index/layouts`).then((r) => r.data)
		const cells = await axios.get(`${env.apiUrl}/grids/index/cells`).then((r) => r.data)
		return { layouts, cells }
	}
	get rowHeight() {
		let vW = window.innerWidth / 100
		if (this.props.gridWidth) vW = this.props.gridWidth / 100
		return 5 * vW
	}
	watchWindowResizing() {
		window.onresize = () => {
			this.setState({ rowHeight: this.rowHeight })
			if (!this.buffering) {
				setTimeout(() => {
					this.buffering = false
				}, 10)
			}
		}
	}
	updateGridItemHover(gridItemIndex) {
		this.setState({
			gridItemHoveredUpon: gridItemIndex,
			layoutClassName: `layout ${gridItemIndex !== undefined ? 'grid-item-hovered-upon' : ''}`
		})
	}
	handleMouseOverGridItem(gridItemIndex) {
		this.updateGridItemHover(gridItemIndex)
	}
	handleMouseLeaveGridItem(gridItemIndex) {
		if (this.state.gridItemHoveredUpon === gridItemIndex) this.updateGridItemHover()
	}
	componentDidMount = async () => {
		this.watchWindowResizing()
		this.setState({ rowHeight: this.rowHeight })
		console.log(this.props.gridWidth)
	}
	render() {
		let ResponsiveGridLayout = WidthProvider(Responsive)
		if (this.props.gridWidth) {
			ResponsiveGridLayout = Responsive
		}
		return (
			<div id="index">
				{(this.props.layoutsLoaded || this.state.layoutsLoaded) && (
					<ResponsiveGridLayout
						measureBeforeMount
						className={this.state.layoutClassName}
						layouts={this.props.layouts || this.state.layouts}
						rowHeight={this.state.rowHeight}
						width={this.props.gridWidth}
						nb
						isDraggable={!!this.props.editingModeEnabled}
						isResizable={!!this.props.editingModeEnabled}
						breakpoints={{
							desktop: 1326,
							tablet: 750,
							mobile: 0
						}}
						cols={{
							desktop: 12,
							tablet: 12,
							mobile: 12
						}}
						containerPadding={[ 0, 0 ]}
						onLayoutChange={(layout, layouts) => this.props.onLayoutChange(layout, layouts)}
					>
						{this.state.cells.map((cell, index) => (
							<div className="grid-item" key={index}>
								<GridItem
									index={index}
									link={cell.link}
									imgSrc={cell.imgSrc}
									backgroundText={cell.backgroundText}
									bottomText={cell.bottomText}
									videoSrc={cell.videoSrc}
									editingModeEnabled={this.props.editingModeEnabled}
									handleMouseOverGridItem={(gridItemIndex) =>
										this.handleMouseOverGridItem(gridItemIndex)}
									handleMouseLeaveGridItem={(gridItemIndex) =>
										this.handleMouseLeaveGridItem(gridItemIndex)}
								/>
							</div>
						))}
					</ResponsiveGridLayout>
				)}
			</div>
		)
	}
}
