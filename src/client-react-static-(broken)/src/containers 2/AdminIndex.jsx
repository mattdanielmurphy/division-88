import React from 'react'
import { Responsive } from 'react-grid-layout'

import Index from '../components/jsx/index/Index'

export default class AdminIndex extends React.Component {
	render = () =>
		this.props.cells ? (
			<Index
				selectCell={(index) => this.props.selectCell(index)}
				selectedCell={this.props.selectedCell}
				view={this.props.view}
				layouts={this.props.layouts}
				cells={this.props.cells}
				ResponsiveGridLayout={Responsive}
				gridWidth={this.props.gridWidth}
				onLayoutChange={(layout, layouts) => this.props.onLayoutChange(layout, layouts)}
			/>
		) : (
			<div></div>
		)
}
