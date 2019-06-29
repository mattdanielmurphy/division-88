import React from 'react'
import GridItem from './GridItem'
// import ProgressiveImage from 'react-progressive-image'

export default class Image extends GridItem {
	state = {
		style: {
			background: `url(${this.props.src || 'https://placeimg.com/1600/600/any'}) center center/contain no-repeat`,
			height: 0,
			paddingTop: `${this.paddingTop}%`
		}
	}
	get paddingTop() {
		const imageHeight = 545
		const imageWidth = 1276
		const containerWidth = 100
		return imageHeight / imageWidth * containerWidth
	}
	getChildren = () => {
		if (this.props.backgroundText)
			return (
				<div className="background-text">
					<h1>{this.props.backgroundText.heading}</h1>
					{this.props.backgroundText.subheading && <h2>{this.props.backgroundText.subheading}</h2>}
				</div>
			)
	}
	render = () => {
		let gridItemChildren = [
			<img
				key="image"
				className={this.props.imgClassName}
				// style={this.state.style}
				src={this.props.src}
				children={this.getChildren()}
			/>,
			this.props.bottomText && (
				<div key="bottom-text" className="bottom-text" style={{ height: this.props.bottomText.height }}>
					{this.props.bottomText.text}
				</div>
			)
		]
		return this.props.link ? (
			<a
				href={this.props.link}
				className={this.props.imgClassName ? `${this.props.imgClassName}-container` : ''}
				children={gridItemChildren}
				onMouseEnter={() => this.props.setHovering(true)}
				onMouseLeave={() => this.props.setHovering(false)}
			/>
		) : (
			<div
				className={this.props.imgClassName ? `${this.props.imgClassName}-container` : ''}
				children={gridItemChildren}
			/>
		)
	}
}
