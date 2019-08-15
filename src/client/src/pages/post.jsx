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
			: this.props.match.params.post.split('-').join(' '),
		category: 'miscellaneous'
	}
	updateValue = value => {
		console.log(this.state.post)
		axios
			.post(`${env.apiUrl}/posts/${this.state.post.index}`, {
				text: JSON.stringify(value.toJSON())
			})
			.then(res => console.log(res))
			.catch(err => console.log(err))
	}
	getPost = async postTitle => {
		const post = await axios.get(`${env.apiUrl}/posts/${postTitle}`).then(r => r.data)

		if (typeof post === 'object') {
			this.setState({ post, category: post.category })
		} else {
			console.log(`post not found`)
			this.setState({ title: 'Post not found' })
		}
		return post
	}
	componentDidMount = async () => {
		await this.getPost(this.state.link)
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
					<div className="category">category: {this.state.category}</div>
					<TextEditor
						text={this.state.post.text}
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
