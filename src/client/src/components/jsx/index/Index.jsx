import React from 'react'
import GridItem from './GridItem'

export default class Index extends React.Component {
	state = {
		layoutClassName: `layout ${this.gridItemHoveredUpon !== undefined ? 'grid-item-hovered-upon' : ''}`
	}
	get rowHeight() {
		let vW = this.props.gridWidth ? this.props.gridWidth / 100 : window.innerWidth / 100
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
	handleClickGridItem(index, e) {
		this.props.selectCell(index)
	}
	componentDidMount = async () => {
		this.watchWindowResizing()
		this.setState({ rowHeight: this.rowHeight })
	}
	componentDidUpdate(prevProps) {
		console.log(this.props.cells[3].backgroundText.subheading, prevProps.cells[3].backgroundText.subheading)
		if (JSON.stringify(this.props.cells) !== JSON.stringify(prevProps.cells)) {
			console.log('updated', this.props.cells)
		}
	}
	render() {
		let ResponsiveGridLayout = this.props.ResponsiveGridLayout
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
						containerPadding={[ 0, 0 ]}
						onLayoutChange={(layout, layouts) =>
							this.props.onLayoutChange ? this.props.onLayoutChange(layout, layouts) : {}}
					>
						{this.props.cells.map((cell, index) => (
							<div className="grid-item" onClick={(e) => this.handleClickGridItem(index, e)} key={index}>
								<GridItem
									index={index}
									link={this.props.cells[index].link}
									imgSrc={this.props.cells[index].imgSrc}
									backgroundText={this.props.cells[index].backgroundText}
									bottomText={this.props.cells[index].bottomText}
									videoSrc={this.props.cells[index].videoSrc}
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
