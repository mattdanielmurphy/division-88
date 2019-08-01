import React from 'react'
export default class extends React.Component {
	render = () => (
		<div className="non-video-options">
			<div className="cell-property-input">
				<label>link</label>
				<input
					onKeyPress={(e) => this.props.handleKeyPress(e)}
					onChange={(e) => this.props.handleInputChange(e)}
					type="text"
					id="link"
					value={this.props.state.cell.link || ''}
				/>
			</div>
			<div className="cell-property-input">
				<label>backgroundText: heading</label>
				<input
					onKeyPress={(e) => this.props.handleKeyPress(e)}
					onChange={(e) => this.props.handleInputChange(e)}
					type="text"
					id="backgroundText.heading"
					value={
						this.props.state.cell.backgroundText ? this.props.state.cell.backgroundText.heading || '' : ''
					}
				/>
			</div>
			<div className="cell-property-input">
				<label>backgroundText: subheading</label>
				<input
					onKeyPress={(e) => this.props.handleKeyPress(e)}
					onChange={(e) => this.props.handleInputChange(e)}
					type="text"
					id="backgroundText.subheading"
					value={
						this.props.state.cell.backgroundText ? (
							this.props.state.cell.backgroundText.subheading || ''
						) : (
							''
						)
					}
				/>
			</div>
			<br />
			<div className="cell-property-input">
				<label>bottomText: background color (HTML color value)</label>
				<input
					onKeyPress={(e) => this.props.handleKeyPress(e)}
					onChange={(e) => this.props.handleInputChange(e)}
					type="text"
					id="bottomText.backgroundColor"
					value={
						this.props.state.cell.bottomText ? this.props.state.cell.bottomText.backgroundColor || '' : ''
					}
				/>
			</div>
			<div className="cell-property-input">
				<label>bottomText: height (example: 10px)</label>
				<input
					onKeyPress={(e) => this.props.handleKeyPress(e)}
					onChange={(e) => this.props.handleInputChange(e)}
					type="text"
					id="bottomText.height"
					value={this.props.state.cell.bottomText ? this.props.state.cell.bottomText.height || '' : ''}
				/>
			</div>
			<div className="cell-property-input">
				<label>bottomText: text</label>
				<input
					onKeyPress={(e) => this.props.handleKeyPress(e)}
					onChange={(e) => this.props.handleInputChange(e)}
					type="text"
					id="bottomText.text"
					value={this.props.state.cell.bottomText ? this.props.state.cell.bottomText.text || '' : ''}
				/>
			</div>
		</div>
	)
}
