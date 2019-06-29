import * as log from 'loglevel'
log.warn('ultra-compatible')

import React from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
const ResponsiveGridLayout = WidthProvider(Responsive)

import GridItem from '../components/jsx/GridItem'
import Video from '../components/jsx/Video'

const defaultLayouts = {
	lg: [
		{ w: 12, h: 10, x: 0, y: 0, i: '0', moved: false, static: false },
		{ w: 12, h: 10, x: 0, y: 0, i: '1', moved: false, static: false },
		{ w: 5, h: 10, x: 0, y: 10, i: '2', moved: false, static: false },
		{ w: 5, h: 10, x: 5, y: 10, i: '3', moved: false, static: false }
	]
}

const originalLayouts = getFromLocalStorage('layouts') || defaultLayouts

export default class Grid extends React.PureComponent {
	state = {
		layouts: JSON.parse(JSON.stringify(originalLayouts)),
		editingModeEnabled: false,
		cells: [
			{ link: '', bottomText: { text: 'Hi', height: '50px' } },
			{ link: '/artists', backgroundText: { heading: 'Heading' } },
			{ link: '/artists', backgroundText: { heading: 'Heading', subheading: 'Subheading' } }
		]
	}
	resetLayout() {
		this.setState({ layouts: defaultLayouts })
	}
	onLayoutChange(layout, layouts) {
		saveToLocalStorage('layouts', layouts)
		console.log(JSON.stringify(layouts))
		this.setState({ layouts })
	}
	toggleEditingMode = () => {
		this.setState({ editingModeEnabled: !this.state.editingModeEnabled })
	}
	getButtonStyle = () => {
		if (this.state.editingModeEnabled) {
			return { backgroundColor: 'red' }
		} else return {}
	}
	handleLinkClick = (e) => (this.state.editingModeEnabled ? e.preventDefault() : null)
	render() {
		return (
			<div id="index">
				{/* <button onClick={() => this.resetLayout()}>Reset</button>
				<button onClick={() => this.toggleEditingMode()} style={this.getButtonStyle()}>
					Toggle Editing Mode (currently {this.state.editingModeEnabled ? 'ON' : 'OFF'})
				</button> */}
				<ResponsiveGridLayout
					measureBeforeMount={true}
					className="layout"
					layouts={this.state.layouts}
					rowHeight={30}
					nb
					width={1200}
					isDraggable={this.state.editingModeEnabled}
					isResizable={this.state.editingModeEnabled}
					breakpoints={{
						lg: 1200
						// md: 996,
						// sm: 768,
						// xs: 480,
						// xxs: 0
					}}
					cols={{
						lg: 12
						//  md: 10, sm: 6, xs: 4, xxs: 2
					}}
					containerPadding={[ 0, 0 ]}
					onLayoutChange={(layout, layouts) => this.onLayoutChange(layout, layouts)}
				>
					{this.state.cells.map(
						(cell, index) =>
							cell.link && !this.state.editingModeEnabled ? (
								<a href="" className="grid-item" key={index}>
									<GridItem
										src="https://placeimg.com/800/300/any"
										backgroundText={cell.backgroundText}
										bottomText={cell.bottomText}
									/>
								</a>
							) : (
								<div className="grid-item" key={index}>
									<GridItem
										src="https://placeimg.com/800/300/any"
										backgroundText={cell.backgroundText}
										bottomText={cell.bottomText}
									/>
								</div>
							)
					)}
				</ResponsiveGridLayout>
			</div>
		)
	}
}

function getFromLocalStorage(key) {
	let ls = {}
	if (global.localStorage) {
		try {
			ls = JSON.parse(global.localStorage.getItem('rgl-8')) || {}
		} catch (e) {}
	}
	return ls[key]
}

function saveToLocalStorage(key, value) {
	if (global.localStorage) {
		global.localStorage.setItem(
			'rgl-8',
			JSON.stringify({
				[key]: value
			})
		)
	}
}

// export default () => (
// 	<Container style={{ padding: '0' }} fluid id="index" className="main-container">
// 		<Row>
// 			<Col xs={12}>
// 				<Wrapper>
// 					<img src="https://placeimg.com/800/300/any" alt="" />
// 				</Wrapper>
// 			</Col>
// 		</Row>
// 		<Row>
// 			<Col xs={12}>
// 				<div id="banner" className="bottom-banner">
// 					<h3>Neon Bambi</h3>
// 					<h4>New Album available</h4>
// 				</div>
// 			</Col>
// 		</Row>
// 		<Row>
// 			<Col xs={4} md={4} className="just-text">
// 				<Wrapper style={{ backgroundColor: '#333' }} className="text">
// 					<div />
// 				</Wrapper>
// 			</Col>
// 			<Col xs={8} md={8}>
// 				<Video imgSrc="https://placeimg.com/600/200" videoSrc="https://www.youtube.com/watch?v=aUdfLZJkqFs" />
// 			</Col>
// 		</Row>
// 		<Row>
// 			<Col xs={5} className="just-text">
// 				<Wrapper style={{ backgroundColor: '#666' }} className="text">
// 					<div />
// 				</Wrapper>
// 			</Col>
// 			<Col xs={7}>
// 				<img src="https://placeimg.com/500/200" alt="" />
// 			</Col>
// 		</Row>
// 	</Container>
// )
