import React from 'react'
import Page from '../components/jsx/Page'
import AboutTextEditor from '../components/jsx/AboutTextEditor'
import Axios from 'axios'
import env from '../client-env'

export default class extends React.Component {
	state = {}
	getAboutText = async () => {
		const text = await Axios.get(`${env.apiUrl}/about/text`).then((r) => r.data)
		this.setState({ text })
	}
	componentDidMount() {
		this.getAboutText()
	}
	render = () => (
		<Page
			headingBackgroundImage={this.props.headingBackgroundImage}
			headingSelected={this.props.headingSelected}
			isPreview={this.props.isPreview}
			selectHeading={() => this.props.selectHeading()}
		>
			{this.props.aboutText || this.state.text ? (
				<section className='text'>
					<AboutTextEditor text={this.props.aboutText || this.state.text} isPreview={this.props.isPreview} />
				</section>
			) : (
				<div />
			)}
		</Page>
	)
}
