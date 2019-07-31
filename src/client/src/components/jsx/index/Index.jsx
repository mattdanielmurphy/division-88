import React from 'react'
import GridItem from './GridItem'

export default class Index extends React.Component {
	state = {
		layoutClassName: `layout ${this.gridItemHoveredUpon !== undefined ? 'grid-item-hovered-upon' : ''}`
	}
	get rowHeight() {
		let vW = this.props.gridWidth ? this.props.gridWidth / 100 : window.innerWidth / 100
		return this.props.view === 'mobile' ? 10 * vW : this.props.view === 'tablet' ? 8 * vW : 4 * vW
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
	handleClickGridItem(index, e) {
		this.props.selectCell(index)
	}
	componentDidMount = async () => {
		this.watchWindowResizing()
		this.setState({ rowHeight: this.rowHeight })
	}
	// getCellOnPage(index) {
	// 	const cell = document.getElementById(`grid-item-${index}`)
	// 	console.log(cell)
	// 	return cell
	// }
	componentDidUpdate(prevProps) {
		if (prevProps.gridWidth !== this.props.gridWidth) this.setState({ rowHeight: this.rowHeight })
		// const {cell, index} = this.props.updatedCell
		// if (JSON.stringify(cell) !== JSON.stringify(this.getCellOnPage(index))) console.log('good')
		// console.log(this.props.cells[3].backgroundText.heading)
		// console.log(JSON.stringify(this.props) !== JSON.stringify(prevProps))
		// if (JSON.stringify(this.props.cells) !== JSON.stringify(prevProps.cells)) {
		// 	console.log('updated', this.props.updatedCell)
		// }
	}
	render() {
		let ResponsiveGridLayout = this.props.ResponsiveGridLayout
		console.log(this.props.cells)
		return (
			<div id="index">
				{this.props.layouts && (
					<ResponsiveGridLayout
						measureBeforeMount
						className={this.state.layoutClassName}
						layouts={this.props.layouts}
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
						rows={{
							desktop: 12,
							tablet: 12,
							mobile: 12
						}}
						containerPadding={[ 0, 0 ]}
						onLayoutChange={(layout, layouts) =>
							this.props.onLayoutChange ? this.props.onLayoutChange(layout, layouts) : {}}
					>
						{this.props.cells.map((cell, index) => (
							<div className="grid-item" onClick={(e) => this.handleClickGridItem(index, e)} key={index}>
								<GridItem
									index={index}
									link={cell.link}
									imgSrc={cell.imgSrc}
									backgroundText={cell.backgroundText}
									bottomText={cell.bottomText}
									videoSrc={cell.videoSrc}
									editingModeEnabled={this.props.editingModeEnabled}
									// handleMouseOverGridItem={(gridItemIndex) =>
									// 	this.handleMouseOverGridItem(gridItemIndex)}
									// handleMouseLeaveGridItem={(gridItemIndex) =>
									// 	this.handleMouseLeaveGridItem(gridItemIndex)}
								/>
							</div>
						))}
					</ResponsiveGridLayout>
				)}
			</div>
		)
	}
}
