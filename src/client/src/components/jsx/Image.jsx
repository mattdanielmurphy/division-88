import React from 'react'
import GridItem from './index/GridItem'
// import ProgressiveImage from 'react-progressive-image'

export default class Image extends GridItem {
	state = {
		style: {
			background: `linear-gradient(
				to bottom,
				rgba(0, 0, 0, 0) 20%,
				rgba(0, 0, 0, 0.01) 21%,
				rgba(0, 0, 0, 0.95) 85%,
				rgba(0, 0, 0, 1) 100%
			), url(${this.props.src})`,
			backgroundPosition: 'center center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			height: 1100
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
			<div
				key="image"
				className={this.props.imgClassName}
				style={this.state.style}
				// src={this.props.src}
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
