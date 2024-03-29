import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from 'components/jsx/Logo'

export default class Nav extends React.Component {
	state = {
		adminVersion: false
	}
	getLink = (url) => {
		if (this.state.adminVersion) return `/admin${url}`
		else if (url === '/store') return 'https://division-88-store.firebaseapp.com'
		else return url
	}
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
				{!this.props.closeMenu && <Logo width="70px" adminVersion={this.state.adminVersion} />}
				<div
					className="right-side"
					style={this.props.adminVersion ? { gridTemplateColumns: 'auto auto auto' } : {}}
				>
					<NavLink onClick={() => this.handleClick()} to={this.getLink('/producer-tools')}>
						Producer Tools
					</NavLink>
					<NavLink onClick={() => this.handleClick()} to={this.getLink('/store')}>
						Store
					</NavLink>
					{this.props.adminVersion && (
						<NavLink onClick={() => this.handleClick()} to="/admin/posts">
							Posts
						</NavLink>
					)}
				</div>
			</nav>
		</div>
	)
}
