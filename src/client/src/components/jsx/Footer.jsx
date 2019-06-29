import React from 'react'
import { Link } from 'components/jsx/Router'

class Footer extends React.Component {
	getYear = () => new Date().getFullYear()
	render = () => (
		<footer>
			<p>&copy; {this.getYear()} Divison 88 Ltd.</p>
		</footer>
	)
}

export default () => <Footer />
