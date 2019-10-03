import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from 'components/jsx/Logo'

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
				name: 'Index',
				url: '/'
			},
			{
				name: 'About',
				url: '/about'
			},
			{
				name: 'Posts',
				url: '/posts'
			}
		],
		adminVersion: false
	}
	getLink = (url) => (this.state.adminVersion ? `/admin${url}` : url)
	componentDidMount() {
		this.setState({
			adminVersion: /\/admin/.test(window.location.pathname),
			mounted: true
		})
	}
	componentDidUpdate() {
		if (this.state.mounted) {
			// if adminVersion is set in state but no longer applies
			if (this.state.adminVersion && this.state.adminVersion !== /\/admin/.test(window.location.pathname)) {
				console.log('admin state removed')
				this.setState({
					adminVersion: /\/admin/.test(window.location.pathname)
				})
			}
		}
	}
	handleClick = () => {
		if (this.props.closeMenu) this.props.closeMenu()
	}
	render = () => (
		<div id="nav-wrapper" className={!this.props.closeMenu ? 'full-nav' : 'mobile-nav'}>
			<nav>
				<div className="left-side">
					<NavLink onClick={() => this.handleClick()} to={this.getLink('/artists')}>
						Artists
					</NavLink>
					<NavLink onClick={() => this.handleClick()} to={this.getLink('/about')}>
						About
					</NavLink>
				</div>
				{!this.props.closeMenu && (
					<Logo width="70px" fill="#242424" hoverFill="#353535" adminVersion={this.state.adminVersion} />
				)}
				<div className="right-side">
					<NavLink onClick={() => this.handleClick()} to={this.getLink('/producer-tools')}>
						Producer Tools
					</NavLink>
					<NavLink onClick={() => this.handleClick()} to={this.getLink('/posts')}>
						Posts
					</NavLink>
				</div>
			</nav>
		</div>
	)
}
