import React from 'react'
import ColorPicker from 'components/jsx/admin/ColorPicker'

export default class extends React.Component {
	render = () => (
		<div className="non-video-options">
			<div className="property-input">
				<label>link</label>
				<input
					onKeyPress={(e) => this.props.handleKeyPress(e)}
					onChange={(e) => this.props.handleInputChange({ e })}
					type="text"
					id="link"
					value={this.props.state.cell.link || ''}
				/>
			</div>
			<div className="property-input">
				<label>backgroundText: heading</label>
				<input
					onKeyPress={(e) => this.props.handleKeyPress(e)}
					onChange={(e) => this.props.handleInputChange({ e })}
					type="text"
					id="backgroundText.heading"
					value={
						this.props.state.cell.backgroundText ? this.props.state.cell.backgroundText.heading || '' : ''
					}
				/>
			</div>
			<div className="property-input">
				<label>backgroundText: subheading</label>
				<input
					onKeyPress={(e) => this.props.handleKeyPress(e)}
					onChange={(e) => this.props.handleInputChange({ e })}
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
			<div className="property-input">
				<label>bottomText: background color</label>
				<ColorPicker
					color={
						(this.props.state.cell.bottomText && this.props.state.cell.bottomText.backgroundColor) || '#fff'
					}
					setColor={(color) => {
						const { r, g, b, a } = color.rgb
						const rgbaString = `rgba(${r},${g},${b},${a})`
						this.props.handleInputChange({
							path: 'bottomText.backgroundColor',
							value: rgbaString,
							colorChange: true
						})
					}}
				/>
			</div>
			<div className="property-input">
				<label>bottomText: height (example: 10px)</label>
				<input
					onKeyPress={(e) => this.props.handleKeyPress(e)}
					onChange={(e) => this.props.handleInputChange({ e })}
					type="text"
					id="bottomText.height"
					value={this.props.state.cell.bottomText ? this.props.state.cell.bottomText.height || '' : ''}
				/>
			</div>
			<div className="property-input">
				<label>bottomText: text</label>
				<input
					onKeyPress={(e) => this.props.handleKeyPress(e)}
					onChange={(e) => this.props.handleInputChange({ e })}
					type="text"
					id="bottomText.text"
					value={this.props.state.cell.bottomText ? this.props.state.cell.bottomText.text || '' : ''}
				/>
			</div>
		</div>
	)
}
