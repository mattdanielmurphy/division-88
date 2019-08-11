import React from 'react'
import { Root, Routes } from 'react-static'

import { Router } from 'components/jsx/Router'
import Header from 'components/jsx/Header'
import Footer from 'components/jsx/Footer'

export default class extends React.Component {
	render = () => (
		<Root>
			<Header />
			<div id="content">
				<React.Suspense fallback={<em></em>}>
					<Router>
						<Routes path="*" />
					</Router>
				</React.Suspense>
			</div>
			<Footer />
		</Root>
	)
}
