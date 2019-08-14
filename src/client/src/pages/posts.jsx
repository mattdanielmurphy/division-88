import React from 'react'
import Page from '../components/jsx/Page'
import { Link } from 'react-router-dom'
import axios from 'axios'
import env from '../client-env'

export default class extends React.Component {
	state = {}
	fetchPostsFromDatabase = async () => {
		let posts = await axios.get(`${env.apiUrl}/posts`).then(r => r.data)
		this.setState({ posts })
	}
	componentDidMount = async () => {
		this.fetchPostsFromDatabase()
	}
	render = () => {
		return this.state.posts ? (
			<Page
				headingBackgroundImage={this.props.headingBackgroundImage}
				headingSelected={this.props.headingSelected}
				selectHeading={() =>
					this.props.selectHeading(this.props.pageName)
				}
				isPreview={this.props.isPreview}
				backgroundImage={'images/girl.jpg'}
			>
				{this.state.posts.map((post, index) => (
					<div key={index}>
						<Link to={`${post.title.split(' ').join('-')}`}>
							{post.title}
						</Link>
					</div>
				))}
			</Page>
		) : (
			<div />
		)
	}
}
