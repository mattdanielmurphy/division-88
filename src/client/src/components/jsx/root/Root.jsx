import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import Index from 'pages/index'
import Artists from 'pages/artists'
import Artist from 'pages/artist'
import ProducerTools from 'pages/producer-tools'
import ProducerTool from 'pages/producer-tool'
import About from 'pages/about'
import Admin from 'containers/Admin'
import Posts from 'pages/posts'
import Post from 'pages/post'
import FourOhFour from 'pages/404'
import Store from 'pages/store'

export default class extends React.Component {
	render = () => (
		<div>
			<Router>
				<Header />

				<Switch>
					{/* enforce trailing slashes for all routes (if a user goes directly to /123 but your links are like <Link to={item}/> to go to /123/item... only works with a trailing slash) */}
					<Route
						path="/:url*"
						exact
						strict
						render={(props) => <Redirect to={`${props.location.pathname}/`} />}
					/>
					<Route exact path="/" component={Index} />
					<Route exact path="/artists" component={Artists} />
					<Route exact path="/artists/:artist" component={Artist} />
					<Route exact path="/producer-tools" component={ProducerTools} />
					<Route exact path="/producer-tools/:tool" component={ProducerTool} />
					<Route exact path="/store" component={Store} />
					<Route exact path="/about" component={About} />
					<Route exact path="/admin" render={() => <Admin match={{ params: { page: 'index' } }} />} />
					{/*<Route exact path="/admin/posts" component={AdminPosts} />*/}
					<Route exact path="/admin/:page" component={Admin} />
					<Route
						path="/admin/posts/:post"
						render={(props) => (
							<Admin
								{...props}
								match={{
									params: {
										page: 'post',
										post: props.match.params.post
									}
								}}
							/>
						)}
					/>
					<Route
						path="/admin/producer-tools/:tool"
						render={(props) => (
							<Admin
								{...props}
								match={{
									params: {
										page: 'producer-tool',
										tool: props.match.params.tool
									}
								}}
							/>
						)}
					/>
					<Route exact path="/posts" component={Posts} />
					<Route exact path="/posts/:post" component={Post} />
					<Route component={FourOhFour} />
				</Switch>

				<Footer />
			</Router>
		</div>
	)
}
