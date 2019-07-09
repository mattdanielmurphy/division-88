import React from 'react'
import { Link } from './Router'
import OffCanvas from './OffCanvas'
import Nav from './Nav'
import MediaQuery from 'react-responsive'

export default () => (
	<div className="header-wrapper">
		<MediaQuery maxWidth={440}>
			<OffCanvas />
		</MediaQuery>
		<header>
			<div id="logo">
				<Link to="/">
					<img src="/images/logo.svg" alt="" />
				</Link>
			</div>
			<MediaQuery minWidth={440}>
				<Nav />
			</MediaQuery>
		</header>
	</div>
)
