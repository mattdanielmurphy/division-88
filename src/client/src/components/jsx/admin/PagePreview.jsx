import React from 'react'
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
		if (!Page) return <div>Loading...</div>
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
						isPreview
						postName={this.props.postName}
						pageName={this.props.pageName}
						view={this.props.view}
						gridWidth={this.getWidth()}
						// Heading
						selectHeading={() => this.props.selectHeading(this.props.pageName)}
						updateHeading={() => this.props.updateHeading(this.props.pageName)}
						headingSelected={this.props.headingSelected}
						headingBackgroundImage={this.props.headingBackgroundImage}
						// Grid
						selectCell={(index) => this.props.selectCell(index)}
						selectedCell={this.props.selectedCell}
						cells={this.props.cells}
						layouts={this.props.layouts}
						onLayoutChange={(layout, layouts) => this.props.onLayoutChange(layout, layouts)}
						// Artists
						selectArtist={(index) => this.props.selectArtist(index)}
						selectedArtist={this.props.selectedArtist}
						artists={this.props.artists}
						// Producer Tools
						selectTool={(index) => this.props.selectTool(index)}
						selectedTool={this.props.selectedTool}
						tools={this.props.tools}
						// About
						aboutText={this.props.aboutText}
					/>
					<Footer />
				</div>
			</div>
		)
	}
}
