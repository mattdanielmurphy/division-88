import React from 'react'
import { Textfit } from 'react-textfit'
import { WidthProvider } from 'react-grid-layout'
import { SizeMe } from 'react-sizeme'
import env from 'client-env'
import axios from 'axios'

// class HeadingWithoutBackgroundImage extends React.Component {
// 	render = () => (
// 		<div className="top-heading">
// 			<Textfit mode="single" max={50}>
// 				{this.props.children}
// 			</Textfit>
// 		</div>
// 	)
// }

// class HeadingWithBackgroundImage extends React.Component {
// 	render = () => (
// 		<div className="top-heading background-image" style={{ backgroundImage: `url(${this.props.image})` }}>
// 			<Textfit mode="single" max={50}>
// 				{this.props.children}
// 			</Textfit>
// 		</div>
// 	)
// }

// class Heading extends React.Component {
// 	render = () => {
// 		return this.props.backgroundImage ? (
// 			<HeadingWithBackgroundImage image={this.props.backgroundImage}>
// 				{this.props.heading.text}
// 				<span>{this.props.heading.spanText}</span>
// 			</HeadingWithBackgroundImage>
// 		) : (
// 			<HeadingWithoutBackgroundImage>
// 				{this.props.heading.text}
// 				<span>{this.props.heading.spanText}</span>
// 			</HeadingWithoutBackgroundImage>
// 		)
// 	}
// }
class Heading extends React.Component {
	state = {
		style: { backgroundImage: this.props.headingBackgroundImage ? `url(${this.props.headingBackgroundImage})` : '' }
	}
	componentDidUpdate(prevProps) {
		if (prevProps.headingBackgroundImage !== this.props.headingBackgroundImage) {
			if (this.props.headingBackgroundImage)
				this.setState({ style: { backgroundImage: `url(${this.props.headingBackgroundImage})` } })
			else this.setState({ style: { backgroundImage: 'none', backgroundColor: '#444' } })
		}
	}
	render = () => (
		<div
			className={`top-heading ${this.props.headingBackgroundImage ? 'background-image' : ''} ${this.props
				.headingSelected
				? 'selected'
				: ''}`}
			style={this.state.style}
			onClick={() => this.props.selectHeading()}
		>
			<Textfit mode="single" max={50}>
				{this.props.text}
				{this.props.spanText && <span>{this.props.spanText}</span>}
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
		id: this.props.id,
		heading: '',
		pageName: ''
	}
	getHeading() {
		if (this.props.heading) {
			// if string provided instead of object, assume it heading text
			return typeof this.props.heading === 'object' ? this.props.heading : { text: this.props.heading }
		} else return { text: this.getPageName() }
	}
	getMainContainerClassName({ width }) {
		const tablet = 768
		const desktop = 1366

		const view = width < tablet ? 'mobile' : width < desktop ? 'tablet' : 'desktop'
		return `main-container ${view}`
	}
	getParentElementsBeforeBody(element) {
		const parentElements = []
		const getParentElement = (element) => {
			element = element.parentElement
			if (element.tagName === 'BODY') return
			parentElements.push(element)
			getParentElement(element)
		}
		getParentElement(element)
		return parentElements
	}
	setParentElementsTo100PercentHeight() {
		const parentElements = this.getParentElementsBeforeBody(document.querySelector('#content'))
		parentElements.forEach((element) => (element.style.height = '100%'))
	}
	componentDidMount() {
		this.setParentElementsTo100PercentHeight()
		this.setState({ id: this.getPathname() || 'index', pageName: this.getPageName(), heading: this.getHeading() })
	}
	render = () => {
		return (
			<SizeMe>
				{({ size }) =>
					this.state.id ? (
						<div id={this.state.id} className={this.getMainContainerClassName(size)}>
							{!this.props.noHeading && (
								<Heading
									{...this.state.heading}
									headingBackgroundImage={this.props.headingBackgroundImage}
									isPreview={this.props.isPreview}
									selectHeading={() => this.props.selectHeading()}
									headingSelected={this.props.headingSelected}
								/>
							)}
							<main>{this.props.children}</main>
						</div>
					) : (
						<div />
					)}
			</SizeMe>
		)
	}
}
