import React from 'react'
import Page from '../components/jsx/Page'
import { Link } from 'react-router-dom'
import API from 'components/js/api'

export default class extends React.Component {
	state = {}
	fetchPostsFromDatabase = async () => {
		let posts = await API.get('/posts').then((r) => r.data)
		this.setState({ posts })
	}
	componentDidMount = async () => {
		this.fetchPostsFromDatabase()
	}
	render = () => {
		return this.state.posts ? (
			<Page
				noHeading
				// headingBackgroundImage={this.props.headingBackgroundImage}
				// headingSelected={this.props.headingSelected}
				// selectHeading={() => this.props.selectHeading(this.props.pageName)}
				isPreview={this.props.isPreview}
				backgroundImage={'images/girl.jpg'}
			>
				<section className="text">
					{this.state.posts.map((post, index) => (
						<div id="posts-list" key={index}>
							<Link to={`${post.title.split(' ').join('-')}`}>{post.title}</Link>
						</div>
					))}
				</section>
			</Page>
		) : (
			<div />
		)
	}
}
