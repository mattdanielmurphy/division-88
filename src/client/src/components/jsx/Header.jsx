import React from 'react'
import OffCanvas from './OffCanvas'
import Nav from './Nav'
import { MediaQuery } from 'react-responsive'
import Logo from 'components/jsx/Logo'

class HeaderWrapper extends React.Component {
	render = () =>
		this.props.mobilePreview ? (
			<div className="header-wrapper mobile" children={this.props.children} />
		) : (
			<div>
				<MediaQuery maxWidth={850}>
					<div className="header-wrapper mobile" children={this.props.children} />
				</MediaQuery>
				<MediaQuery minWidth={850}>
					<div className="header-wrapper" children={this.props.children} />
				</MediaQuery>
			</div>
		)
}

export default class extends React.Component {
	state = {
		adminVersion: false
	}
	getAdminLink = (url) => '/admin' + url
	componentDidMount() {
		this.setState({
			adminVersion: /\/admin/.test(window.location.pathname),
			mounted: true
		})
	}
	componentDidUpdate() {
		if (this.state.mounted) {
			if (this.state.adminVersion && this.state.adminVersion !== /\/admin/.test(window.location.pathname)) {
				this.setState({
					adminVersion: /\/admin/.test(window.location.pathname)
				})
			}
		}
	}
	render = () => {
		return (
			// change this whole mess: mobile or mobile-preview ? MobileHeader : Header
			// get rid of HeaderWrapper
			<HeaderWrapper mobilePreview={this.props.mobilePreview}>
				{this.props.mobilePreview ? (
					// mobile preview
					<div>
						<OffCanvas previewWidth={this.props.previewWidth} />
						<header>
							<Logo width="55px" className="mobile-header-logo" />
						</header>
					</div>
				) : (
					// non preview
					<div>
						<MediaQuery maxWidth={850}>
							<OffCanvas />
							<header>
								<Logo width="55px" className="mobile-header-logo" />
							</header>
						</MediaQuery>
						<MediaQuery minWidth={850}>
							<header>
								<Nav />
							</header>
						</MediaQuery>
					</div>
				)}
			</HeaderWrapper>
		)
	}
}
