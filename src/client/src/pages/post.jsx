import React from 'react'
import TextEditor from '../components/jsx/admin/editor/text-editor/TextEditor'
import Page from '../components/jsx/Page'
import axios from 'axios'
import env from '../client-env'

export default class extends React.Component {
	state = {
		link: this.props.postName || this.props.match.params.post,
		title: this.props.postName
			? this.props.postName.split('-').join(' ')
			: this.props.match.params.post.split('-').join(' ')
	}
	getPost = async postTitle => {
		const post = await axios
			.get(`${env.apiUrl}/posts/${postTitle}`)
			.then(r => r.data)

		if (typeof post === 'object') this.setState({ post })
		else {
			console.log(`post not found`)
			this.setState({ title: 'Post not found' })
		}
	}
	componentDidMount() {
		this.getPost(this.state.link)
	}
	render = () => (
		<Page
			headingBackgroundImage={this.props.headingBackgroundImage}
			headingSelected={this.props.headingSelected}
			isPreview={this.props.postName}
			heading={this.state.title}
			selectHeading={() => this.props.selectHeading()}
		>
			{this.state.post ? (
				<section className="text">
					<TextEditor
						text={this.state.post.text}
						isPreview={this.props.isPreview}
					/>
				</section>
			) : (
				<div />
			)}
		</Page>
	)
}
