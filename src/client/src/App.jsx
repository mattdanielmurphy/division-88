import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { setConfiguration } from 'react-grid-system'
import { Link, Router } from 'components/jsx/Router'
import Artist from 'containers/Artist'
import ProducerTool from 'containers/ProducerTool'
import Header from 'components/jsx/Header'
import Footer from 'components/jsx/Footer'

import * as log from 'loglevel'
log.warn('ultra-compatible')

import 'styles/app.scss'

setConfiguration({ gutterWidth: 0 })

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes([ 'dynamic' ])

function App() {
	return (
		<Root>
			<Header />
			<div className="content">
				<React.Suspense fallback={<em>Loading...</em>}>
					<Router>
						<Routes path="*" />
						<Artist path="/artist/:artistName" />
						<ProducerTool path="/producer-tool/:pageName" />
					</Router>
				</React.Suspense>
			</div>
			<Footer />
		</Root>
	)
}

export default App
