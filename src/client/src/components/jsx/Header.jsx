import React from 'react'
import { Link } from 'components/jsx/Router'
export default () => (
	<header>
		<div id="logo">
			<Link to="/">
				<img src="/images/logo.svg" alt="" />
			</Link>
		</div>
		<div id="nav-wrapper">
			<nav>
				<Link to="/artists">Artists</Link>
				<Link to="/producer-tools">Producer Tools</Link>
				<Link to="/about">About</Link>
			</nav>
		</div>
	</header>
)
