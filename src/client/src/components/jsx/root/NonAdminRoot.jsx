import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'

import { Link, Router } from 'components/jsx/Router'
import ProducerTool from 'containers/ProducerTool'
import Header from 'components/jsx/Header'
import Footer from 'components/jsx/Footer'

export default class NonAdminRoot extends React.Component {
	render = () => (
		<Root>
			<Header />
			<div className="content">
				<React.Suspense fallback={<em>Loading...</em>}>
					<Router>
						<Routes path="*" />
						{/* CHANGE PRODUCER TOOL so it's like artists (so it's not a dynamic route) */}
						<ProducerTool path="/producer-tool/:pageName" />
					</Router>
				</React.Suspense>
			</div>
			<Footer />
		</Root>
	)
}
