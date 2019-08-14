import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import Index from '../../../pages/index'
import Artists from '../../../pages/artists'
import Artist from '../../../pages/artist'
import ProducerTools from '../../../pages/producer-tools'
import ProducerTool from '../../../pages/producer-tool'
import About from '../../../pages/about'
import Admin from '../../../containers/Admin'
import Posts from '../../../pages/posts'
import Post from '../../../pages/post'
import AdminPosts from '../../../pages/admin-posts'

export default class extends React.Component {
	render = () => (
		<div>
			<Router>
				<Header />
				<Route exact path="/" component={Index} />
				<Route exact path="/artists" component={Artists} />
				<Route path="/artists/:artist" component={Artist} />
				<Route exact path="/producer-tools" component={ProducerTools} />
				<Route path="/producer-tools/:tool" component={ProducerTool} />
				<Route path="/about" component={About} />
				<Route exact path="/admin" render={(props) => <Admin match={{ params: { page: 'index' } }} />} />
				<Route exact path="/admin/posts" component={AdminPosts} />
				<Route exact path="/admin/:page" component={Admin} />
				<Route
					path="/admin/posts/:post"
					render={(props) => (
						<Admin {...props} match={{ params: { page: 'post', post: props.match.params.post } }} />
					)}
				/>
				<Route exact path="/posts" component={Posts} />
				<Route exact path="/posts/:post" component={Post} />
				<Footer />
			</Router>
		</div>
	)
}
