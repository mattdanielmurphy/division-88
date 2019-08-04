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
	getWidth = () => this.state.dimensions[this.props.view].width
	getHeight = () => this.state.dimensions[this.props.view].height
	render = () => {
		const Page = this.props.page
		return (
			<div
				id="preview-wrapper"
				style={{
					width: this.getWidth() * this.props.scale,
					height: this.getHeight() * this.props.scale
				}}
			>
				<div
					id="preview"
					className={this.props.view}
					style={{
						width: this.getWidth(),
						height: this.getHeight(),
						transform: `scale(${this.props.scale})`,
						transformOrigin: 'left top'
					}}
				>
					<Header mobilePreview={this.props.view === 'mobile'} previewWidth={this.getWidth()} />
					<Page
						layouts={this.props.layouts}
						view={this.props.view}
						onLayoutChange={(layout, layouts) => this.props.onLayoutChange(layout, layouts)}
						selectCell={(index) => this.props.selectCell(index)}
						selectArtist={(index) => this.props.selectArtist(index)}
						selectedArtist={this.props.selectedArtist}
						selectedCell={this.props.selectedCell}
						artists={this.props.artists}
						cells={this.props.cells}
						gridWidth={this.getWidth()}
						updateSent={this.props.updateSent}
						updateReceived={() => this.props.updateReceived()}
					/>
					<Footer />
				</div>
			</div>
		)
	}
}
