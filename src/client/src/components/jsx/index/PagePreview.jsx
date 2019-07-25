import React from 'react'
import Iframe from 'react-iframe'
import AdminIndex from '../../../containers/AdminIndex'
import Header from '../Header'

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
						selectCell={(index) => this.props.selectCell(index)}
						updatedCell={this.props.updatedCell}
						editingModeEnabled={this.props.editingModeEnabled}
						gridWidth={this.getWidth()}
					/>
				</div>
			</div>
		)
	}
}
