import React from 'react'
import Video from './Video'

export default class GridItem extends React.Component {
	state = {
		style: {
			background: `url(${this.props.imgSrc}) center center/cover no-repeat`,
			width: '100%',
			// height: '100%'
			height: this.props.bottomText ? `calc(100% - ${this.props.bottomText.height})` : '100%'
		}
	}
	getChildren = () => {
		if (this.props.backgroundText)
			return (
				<div className="background-text">
					<h1 key="heading">{this.props.backgroundText.heading}</h1>
					{this.props.backgroundText.subheading && (
						<h2 key="subheading">{this.props.backgroundText.subheading}</h2>
					)}
				</div>
			)
	}
	render = () => {
		let gridItemChildren = [
			<div className={this.props.imgClassName} style={this.state.style} children={this.getChildren()} />,
			this.props.bottomText && (
				<div key="bottom-text" className="bottom-text" style={{ height: this.props.bottomText.height }}>
					{this.props.bottomText.text}
				</div>
			)
		]
		return this.props.videoSrc ? (
			<Video imgSrc={this.props.imgSrc} videoSrc={this.props.videoSrc} children={gridItemChildren} />
		) : this.props.link ? (
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
