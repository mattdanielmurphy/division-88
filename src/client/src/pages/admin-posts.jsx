import React from 'react'
import axios from 'axios'
import env from '../client-env'
import PostsTable from '../components/jsx/admin/PostsTable'
import Page from '../components/jsx/Page'
import { Redirect } from 'react-router'

export default class AdminPosts extends React.Component {
	state = {}
	getPosts = async () => axios.get(`${env.apiUrl}/posts`).then(r => r.data)
	updatePost = post => {
		const posts = this.state.posts
		posts[post.index] = post
		this.setState({ posts })
		axios.post(`${env.apiUrl}/posts/${post.index}`, post)
	}
	deletePost = post => {}
	handleInputChange = ({ e, path, value }) => {
		if (e) {
			path = e.target.id
			value = e.target.value
		}

		this.updateHeadingValue(path, value)
	}
	setKeyBindings = () => {
		document.onkeypress = e => {
			if (
				e.target.hasAttribute('data-slate-editor') ||
				e.target.tagName === 'INPUT' ||
				e.target.tagName === 'TEXTAREA'
			)
				return
			else if (e.key === 's') this.handleSubmit()
		}
	}
	editPost = title => this.setState({ redirect: title.split(' ').join('-') })
	componentDidMount = async () => {
		const posts = await this.getPosts()
		this.setState({ posts })
		window.onbeforeunload = null
		this.setKeyBindings()
	}
	render = () => (
		<Page>
			{this.state.redirect && <Redirect push to={`${this.state.redirect}`} />}
			{this.state.posts ? (
				<PostsTable
					editPost={title => this.editPost(title)}
					data={this.state.posts}
					updatePost={post => this.updatePost(post)}
				/>
			) : (
				<div>Loading...</div>
			)}
		</Page>
	)
}
