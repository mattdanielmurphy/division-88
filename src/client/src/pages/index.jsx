import axios from 'axios'
import React from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
const ResponsiveGridLayout = WidthProvider(Responsive)

import GridItem from '../components/jsx/index/GridItem'
const env = require('../client-env')

const defaultLayouts = {
	lg: [
		{ w: 11, h: 5, x: 0, y: 0, i: '0', moved: false, static: false, minW: 1, minH: 3 },
		{ w: 11, h: 5, x: 0, y: 0, i: '1', moved: false, static: false, minW: 1, minH: 3 },
		{ w: 5, h: 5, x: 0, y: 10, i: '2', moved: false, static: false, minW: 1, minH: 3 },
		{ w: 5, h: 5, x: 5, y: 10, i: '3', moved: false, static: false, minW: 1, minH: 3 }
	]
}

export default class Index extends React.PureComponent {
	state = {
		editingModeEnabled: false,
		cells: [
			{
				link: '',
				bottomText: { text: 'Neon Bambi -- New Release', height: '50px', backgroundColor: 'rgb(239,0,160)' },
				imgSrc: '/images/neon-bambi.jpg'
			},
			{
				link: '/artist/billy-wild',
				backgroundText: { heading: 'Heading' },
				imgSrc: '/images/billy.jpg'
			},
			{
				link: '/artists',
				backgroundText: { heading: 'Heading', subheading: 'Subheading' },
				imgSrc: '/images/trees.jpg'
			},
			{
				imgSrc: '/images/skoop.jpg',
				videoSrc: 'http://www.youtube.com/watch?v=aUdfLZJkqFs'
			}
		],
		layoutClassName: `layout ${this.gridItemHoveredUpon !== 'undefined' ? 'grid-item-hovered-upon' : ''}`
	}
	restoreDefaultLayouts() {
		console.log('Restoring default layout...')
		this.setState({ layouts: defaultLayouts })
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
	getLayoutsFromDatabase = async () => await axios.get(`${env.apiUrl}/layouts/index`).then((r) => r.data)
	onLayoutChange(layout, layouts) {
		this.setState({ layouts })
		// if (!this.layoutsHistory || JSON.stringify(layout) === JSON.stringify(this.lastLayoutChange)) return
		this.lastLayoutChange = layout
		this.layoutsHistory.push(layouts)
		axios.post(`${env.apiUrl}/layouts/index`, { layouts })
	}
	toggleEditingMode = () => {
		this.setState({ editingModeEnabled: !this.state.editingModeEnabled })
	}
	getButtonStyle = () => {
		if (this.state.editingModeEnabled) {
			return { backgroundColor: 'red' }
		} else return {}
	}
	get rowHeight() {
		let vW = window.innerWidth / 100
		return 5 * vW
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
			else if (e.key === 'd') this.restoreDefaultLayouts()
			else if (e.key === 'u') this.undoLayoutChange()
			else if (e.key === 'r') this.redoLayoutChange()
		}
	}
	handleMouseOverGridItem(gridItemIndex) {
		console.log('grid item hovered upon')
		this.setState({ gridItemHoveredUpon: gridItemIndex })
	}
	handleMouseLeaveGridItem(gridItemIndex) {
		console.log('mouse leave grid item')
		console.log(gridItemIndex)
		if (this.state.gridItemHoveredUpon === gridItemIndex) this.setState({ gridItemHoveredUpon: undefined })
	}

	componentDidMount = async () => {
		const { layouts } = await this.getLayoutsFromDatabase()
		this.setState({ layouts, layoutsLoaded: true })
		this.layoutsHistory = [ layouts ]
		this.layoutsUndone = []
		this.setKeyBindings()
		this.watchWindowResizing()
		this.setState({ rowHeight: this.rowHeight })
	}
	render() {
		return (
			<div id="index">
				{this.state.layoutsLoaded && (
					<ResponsiveGridLayout
						measureBeforeMount
						className={this.state.layoutClassName}
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
						{this.state.cells.map((cell, index) => (
							<div className="grid-item" key={index}>
								<GridItem
									index={index}
									link={cell.link}
									imgSrc={cell.imgSrc}
									backgroundText={cell.backgroundText}
									bottomText={cell.bottomText}
									videoSrc={cell.videoSrc}
									editingModeEnabled={this.state.editingModeEnabled}
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
