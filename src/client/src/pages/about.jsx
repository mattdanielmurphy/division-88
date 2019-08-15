import React from 'react'
import Page from '../components/jsx/Page'
import TextEditor from '../components/jsx/admin/editor/text-editor/TextEditor'
import axios from 'axios'
import env from '../client-env'

export default class extends React.Component {
	state = {}
	updateValue = value => {
		axios
			.post(`${env.apiUrl}/about`, {
				text: JSON.stringify(value.toJSON())
			})
			.then(res => console.log(res))
			.catch(err => console.log(err))
	}
	getAboutText = async () => {
		const text = await axios.get(`${env.apiUrl}/about/text`).then(r => r.data)
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
				<section className="text">
					<TextEditor
						text={this.props.aboutText || this.state.text}
						isPreview={this.props.isPreview}
						updateValue={value => this.updateValue(value)}
					/>
				</section>
			) : (
				<div />
			)}
		</Page>
	)
}
