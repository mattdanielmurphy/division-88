import React from 'react'
import { Textfit } from 'react-textfit-17'
import { SizeMe } from 'react-sizeme'
import axios from 'axios'
import env from '../../client-env'

class Heading extends React.Component {
	state = {
		style: {
			backgroundImage: this.props.headingBackgroundImage ? `url(${this.props.headingBackgroundImage})` : ''
		}
	}
	componentDidUpdate(prevProps) {
		if (prevProps.headingBackgroundImage !== this.props.headingBackgroundImage) {
			if (this.props.headingBackgroundImage)
				this.setState({
					style: {
						backgroundImage: `url(${this.props.headingBackgroundImage})`
					}
				})
			else
				this.setState({
					style: { backgroundImage: 'none', backgroundColor: '#444' }
				})
		}
	}
	render = () => (
		<div
			className={`top-heading ${this.props.headingBackgroundImage ? 'background-image' : ''} ${
				this.props.headingSelected ? 'selected' : ''
			}`}
			style={this.state.style}
			onClick={() => (this.props.isPreview ? this.props.selectHeading() : {})}
		>
			<div className="heading">
				<Textfit mode="single" max={50}>
					{this.props.text}
					{this.props.spanText && <span>{this.props.spanText}</span>}
				</Textfit>
			</div>
			{this.props.subheading && (
				<div className="subheading">
					<Textfit mode="single" max={35}>
						{this.props.subheading}
					</Textfit>
				</div>
			)}
		</div>
	)
}

export default class Page extends React.Component {
	getPathName = () => {
		let regexMatches = /(?:\/admin)?\/([A-Za-z\-_]+)\/?/.exec(window.location.pathname)
		return regexMatches ? regexMatches[1] : ''
	}
	getPageName = () =>
		this.getPathName()
			.split('-')
			.join(' ')
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
		const getParentElement = element => {
			if (element) {
				element = element.parentElement
				if (element.tagName === 'BODY') return
				parentElements.push(element)
				getParentElement(element)
			}
		}
		getParentElement(element)
		return parentElements
	}
	setParentElementsTo100PercentHeight() {
		const parentElements = this.getParentElementsBeforeBody(document.querySelector('.main-container'))
		parentElements.forEach(element => (element.style.height = '100%'))
	}
	getHeadingBackgroundImage = async () => {
		const headingBackgroundImage = await axios
			.get(`${env.apiUrl}/page-info/${this.getPathName()}`)
			.then(r => r.data.headingBackgroundImage)
		return headingBackgroundImage
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.state.id !== prevState.id && !this.props.isPreview) this.setParentElementsTo100PercentHeight()
		if (this.props.headingBackgroundImage !== prevProps.headingBackgroundImage)
			this.setState({
				headingBackgroundImage: this.props.headingBackgroundImage
			})
	}
	componentDidMount = async () => {
		if (!this.props.isPreview) this.setParentElementsTo100PercentHeight()
		const headingBackgroundImage =
			this.props.headingBackgroundImage || this.getPageName() ? await this.getHeadingBackgroundImage() : ''
		this.setState({
			headingBackgroundImage,
			id: this.props.id || this.getPathName() || 'index',
			pageName: this.getPageName(),
			heading: this.getHeading()
		})

		// why headingbackgroundimage is not being set: being set in state before props come in
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
									subheading={this.props.subheading}
									headingBackgroundImage={this.state.headingBackgroundImage}
									isPreview={this.props.isPreview}
									selectHeading={() => this.props.selectHeading()}
									headingSelected={this.props.headingSelected}
								/>
							)}
							<main id="content">{this.props.children}</main>
						</div>
					) : (
						<div />
					)
				}
			</SizeMe>
		)
	}
}
