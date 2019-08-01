import React from 'react'
import AdminIndex from '../../../containers/AdminIndex'
import Header from '../Header'
import Footer from '../Footer'

export default class PagePreview extends React.Component {
	state = {
		dimensions: {
			mobile: {
				width: 375,
				height: 667
			},
			tablet: {
				width: 768,
				height: 1024
			},
			desktop: {
				width: 1366,
				height: 768
			}
		}
	}
	getWidth = () => {
		const width = this.state.dimensions[this.props.view].width
		return width
	}
	getHeight = () => this.state.dimensions[this.props.view].height
	render = () => {
		const Page = this.props.page
		return (
			<div
				id="preview-wrapper"
				style={{ transform: `scale(${this.props.scale})`, width: this.getWidth(), height: this.getHeight() }}
			>
				<div
					id="preview"
					className={this.props.view}
					style={{ width: this.getWidth(), height: this.getHeight() }}
				>
					<Header mobilePreview={this.props.view === 'mobile'} previewWidth={this.getWidth()} />
					<Page
						layouts={this.props.layouts}
						view={this.props.view}
						onLayoutChange={(layout, layouts) => this.props.onLayoutChange(layout, layouts)}
						selectCell={(index) => this.props.selectCell(index)}
						selectedCell={this.props.selectedCell}
						cells={this.props.cells}
						gridWidth={this.getWidth()}
					/>
					<Footer />
				</div>
			</div>
		)
	}
}
