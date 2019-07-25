import React from 'react'
import { Link } from './Router'

export default class Nav extends React.Component {
	state = {
		links: [
			{
				name: 'Artists',
				url: '/artists'
			},
			{
				name: 'Producer Tools',
				url: '/producer-tools'
			},
			{
				name: 'About',
				url: '/about'
			}
		]
	}
	isAdminVersion = () => /\/admin/.test(window.location.pathname)
	getAdminLink = (url) => '/admin' + url
	render = () => (
		<div id="nav-wrapper">
			<nav>
				{this.state.links.map((link) => (
					<Link
						key={link.name}
						onClick={this.props.toggleOpenClose}
						to={this.isAdminVersion() ? this.getAdminLink(link.url) : link.url}
					>
						{link.name}
					</Link>
				))}
			</nav>
		</div>
	)
}
