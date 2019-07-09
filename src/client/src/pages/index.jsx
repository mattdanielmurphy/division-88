import * as log from 'loglevel'
log.warn('ultra-compatible')

// INDEX WON'T EXPORT AS IS: NEED TO CHANGE. Read the link below for more details.
// https://www.gatsbyjs.org/docs/debugging-html-builds/

import React from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
const ResponsiveGridLayout = WidthProvider(Responsive)

import GridItem from '../components/jsx/GridItem'
import Video from '../components/jsx/Video'
import axios from 'axios'

const defaultLayouts = {
	lg: [
		{ w: 12, h: 5, x: 0, y: 0, i: '0', moved: false, static: false, minW: 1, minH: 3 },
		{ w: 12, h: 5, x: 0, y: 0, i: '1', moved: false, static: false, minW: 1, minH: 3 },
		{ w: 5, h: 5, x: 0, y: 10, i: '2', moved: false, static: false, minW: 1, minH: 3 },
		{ w: 5, h: 5, x: 5, y: 10, i: '3', moved: false, static: false, minW: 1, minH: 3 }
	]
}

const originalLayouts = getFromLocalStorage('layouts') || defaultLayouts

export default class Grid extends React.PureComponent {
	state = {
		layouts: JSON.parse(JSON.stringify(originalLayouts)),
		editingModeEnabled: false,
		cells: [
			{
				link: '',
				bottomText: { text: 'Hi', height: '50px' },
				imgSrc: '/images/neon-bambi.jpg'
			},
			{
				link: '/artists',
				backgroundText: { heading: 'Heading' },
				imgSrc: 'https://picsum.photos/1500/1500'
			},
			{
				link: '/artists',
				backgroundText: { heading: 'Heading', subheading: 'Subheading' },
				imgSrc: 'https://picsum.photos/1500/1600'
			},
			{
				imgSrc: '/images/skoop.jpg',
				videoSrc: 'https://www.youtube.com/watch?v=aUdfLZJkqFs'
			}
		],
		rowHeight: this.rowHeight
	}
	resetLayout() {
		this.setState({ layouts: defaultLayouts })
	}
	getLayoutsFromDatabase = async () => await axios.get('http://localhost/api/layouts/index').then((r) => r.data)
	onLayoutChange(layout, layouts) {
		// saveToLocalStorage('layouts', layouts)
		// console.log(JSON.stringify(layouts))
		axios.post('http://localhost/api/layouts/index', { layouts }).then((response) => console.log(response))

		this.setState({ layouts })
	}
	toggleEditingMode = () => {
		this.setState({ editingModeEnabled: !this.state.editingModeEnabled })
		console.log(this.state.editingModeEnabled)
	}
	getButtonStyle = () => {
		if (this.state.editingModeEnabled) {
			return { backgroundColor: 'red' }
		} else return {}
	}
	get rowHeight() {
		let vW = window.innerWidth / 100
		return 5 * vW
		// window.innerWidth / 10 = 1 vw
		// 2560
	}
	handleLinkClick = (e) => (this.state.editingModeEnabled ? e.preventDefault() : null)
	handleResize = () => {
		this.setState({ rowHeight: this.rowHeight })
		if (!this.buffering) {
			setTimeout(() => {
				this.buffering = false
			}, 10)
		}
	}
	watchWindowResizing() {
		window.onresize = () => this.handleResize()
	}
	setKeyBindings = () => {
		document.onkeypress = (e) => {
			if (e.key === 'e') this.toggleEditingMode()
			else if (e.key === 'f') this.resetLayout()
		}
	}
	componentDidMount = async () => {
		// axios.get('http://localhost/api/layouts/index').then(async (res) => {
		// })
		const { layouts } = await this.getLayoutsFromDatabase()
		this.setState({ layouts, layoutsLoaded: true })
		this.setKeyBindings()
		this.watchWindowResizing()
	}
	render() {
		return (
			<div id="index">
				{/* <button onClick={() => this.resetLayout()}>Reset</button>
				<button onClick={() => this.toggleEditingMode()} style={this.getButtonStyle()}>
					Toggle Editing Mode (currently {this.state.editingModeEnabled ? 'ON' : 'OFF'})
				</button> */}
				{this.state.layoutsLoaded && (
					<ResponsiveGridLayout
						measureBeforeMount
						className="layout"
						layouts={this.state.layouts}
						rowHeight={this.state.rowHeight}
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
											imgSrc={cell.imgSrc}
											videoSrc={cell.videoSrc}
											backgroundText={cell.backgroundText}
											bottomText={cell.bottomText}
										/>
									</a>
								) : (
									<div className="grid-item" key={index}>
										<GridItem
											imgSrc={cell.imgSrc}
											videoSrc={cell.videoSrc}
											backgroundText={cell.backgroundText}
											bottomText={cell.bottomText}
										/>
									</div>
								)
						)}
					</ResponsiveGridLayout>
				)}
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
