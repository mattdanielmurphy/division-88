import React from 'react'
import { Textfit } from 'react-textfit'
import { WidthProvider } from 'react-grid-layout'
import { SizeMe } from 'react-sizeme'

class Heading extends React.Component {
	render = () => (
		<div className="top-heading">
			<Textfit mode="single" max={50}>
				{this.props.children}
			</Textfit>
		</div>
	)
}

class HeadingWithBackgroundImage extends React.Component {
	render = () => (
		<div className="top-heading background-image" style={{ backgroundImage: `url(${this.props.image})` }}>
			<Textfit mode="single" max={50}>
				{this.props.children}
			</Textfit>
		</div>
	)
}

export default class Page extends React.Component {
	// PROPS
	// REQUIRED:
	// id
	// heading
	// OPTIONAL:
	//
	getPathname = () => window.location.pathname.replace(/\/(admin)*/g, '')
	getPageName = () => this.getPathname().split('-').join(' ')
	state = {
		id: this.props.id || this.getPathname(),
		heading: this.getHeading()
	}
	getHeading() {
		if (this.props.heading) {
			// if string provided instead of object, assume it heading text
			return typeof this.props.heading === 'object' ? this.props.heading : { text: this.props.heading }
		} else return { text: this.getPageName() }
	}
	getView() {
		const preview = document.getElementById('preview')
		if (preview) {
			console.log(preview.clientWidth)
		} else {
		}
	}
	getMainContainerClassName({ width }) {
		const tablet = 768
		const desktop = 1366

		const view = width < tablet ? 'mobile' : width < desktop ? 'tablet' : 'desktop'
		return `main-container ${view}`
	}
	componentDidMount() {
		this.getView()
	}
	render = () => {
		// const props = this.props
		// console.log(props)
		// const children = React.Children.map(this.props.children, (child) => {
		// 	return React.cloneElement(child, { ...props })
		// })
		return (
			<SizeMe>
				{({ size }) => (
					<div id={this.state.id} className={this.getMainContainerClassName(size)}>
						{!this.props.noTopHeading &&
							(this.props.backgroundImage ? (
								<HeadingWithBackgroundImage image={this.props.backgroundImage}>
									{this.state.heading.text}
									<span>{this.state.heading.spanText}</span>
								</HeadingWithBackgroundImage>
							) : (
								<Heading>
									{this.state.heading.text}
									<span>{this.state.heading.spanText}</span>
								</Heading>
							))}
						<main>{this.props.children}</main>
					</div>
				)}
			</SizeMe>
		)
	}
}
