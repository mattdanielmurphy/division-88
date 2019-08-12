import React from 'react'
import GridItem from './GridItem'

export default class Index extends React.Component {
	state = {
		layoutClassName: `layout ${this.gridItemHoveredUpon !== undefined ? 'grid-item-hovered-upon' : ''}`,
		cellsUpToDate: true
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
		console.log(this.props)
		if (this.props.isPreview) this.props.selectCell(index)
	}
	componentDidMount = async () => {
		this.watchWindowResizing()

		this.setState({ rowHeight: this.rowHeight, cells: this.props.cells })
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.gridWidth !== this.props.gridWidth) this.setState({ rowHeight: this.rowHeight })
		if (JSON.stringify(this.props.cells) !== JSON.stringify(prevProps.cells)) {
			// this.forceUpdate()

			this.setState({ cellsUpToDate: false, cells: this.props.cells })
		} else if (!this.state.cellsUpToDate) this.setState({ cellsUpToDate: true })
	}
	render() {
		let ResponsiveGridLayout = this.props.ResponsiveGridLayout
		return (
			<div id='index'>
				{this.state.cellsUpToDate ? (
					this.props.layouts &&
					this.state.cells && (
						<ResponsiveGridLayout
							measureBeforeMount
							className={this.state.layoutClassName}
							layouts={this.props.layouts}
							rowHeight={this.state.rowHeight}
							width={this.props.gridWidth}
							nb
							isDraggable={!!this.props.gridWidth}
							isResizable={!!this.props.gridWidth}
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
							{this.state.cells.map((cell, index) => (
								<div
									className='grid-item'
									onClick={(e) => this.handleClickGridItem(index, e)}
									key={index}
								>
									<GridItem
										selected={this.props.selectedCell === index}
										index={index}
										link={cell.link}
										imgSrc={cell.imgSrc}
										backgroundText={cell.backgroundText}
										bottomText={cell.bottomText}
										videoSrc={cell.videoSrc}
										video={cell.video}
										isPreview={this.props.gridWidth}
									/>
								</div>
							))}
						</ResponsiveGridLayout>
					)
				) : (
					<div />
				)}
			</div>
		)
	}
}
