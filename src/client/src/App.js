import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { setConfiguration } from 'react-grid-system'
import { Link, Router } from 'components/Router'
import Artist from './pages/artist'
// import Dynamic from 'containers/Dynamic'

import './styles/app.scss'

setConfiguration({ gutterWidth: 10 })

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes([ 'dynamic' ])

const Header = () => (
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

class Footer extends React.Component {
	getYear = () => new Date().getFullYear()
	render = () => (
		<footer>
			<p>&copy; {this.getYear()} Divison 88 Ltd.</p>
		</footer>
	)
}

function App() {
	return (
		<Root>
			<Header />
			<div className="content">
				<React.Suspense fallback={<em>Loading...</em>}>
					<Router>
						{/* <Dynamic path="dynamic" /> */}
						<Routes path="*" />
						<Artist path="/artist/:artistName" />
					</Router>
				</React.Suspense>
			</div>
			<Footer />
		</Root>
	)
}

export default App
