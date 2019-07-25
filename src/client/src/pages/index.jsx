import axios from 'axios'
import React from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'

import Index from '../components/jsx/index/Index'
import Page from '../components/jsx/Page'
const env = require('../client-env')

export default class ClientIndex extends React.Component {
	state = {}
	getGridFromDatabase = async () => {
		const layouts = await axios.get(`${env.apiUrl}/grids/index/layouts`).then((r) => r.data)
		const cells = await axios.get(`${env.apiUrl}/grids/index/cells`).then((r) => r.data)
		return { layouts, cells }
	}
	componentDidMount() {
		console.log(this.props)
		this.getGridFromDatabase().then(({ cells, layouts }) => {
			this.setState({ cells, layouts, layoutsLoaded: true })
		})
	}
	render = () =>
		this.state.cells ? (
			<Page noTopHeading>
				<Index
					layouts={this.state.layouts}
					cells={this.state.cells}
					ResponsiveGridLayout={WidthProvider(Responsive)}
				/>
			</Page>
		) : (
			<div>Loading...</div>
		)
}
