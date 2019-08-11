import React from 'react'
import { Link } from 'components/jsx/Router'

class Footer extends React.Component {
	getYear = () => new Date().getFullYear()
	render = () => <footer>&copy; {this.getYear()} Divison 88 Ltd.</footer>
}

export default () => <Footer />
