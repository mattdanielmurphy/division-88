import React from 'react'

class Footer extends React.Component {
	getYear = () => new Date().getFullYear()
	render = () => <footer>&copy; {this.getYear()} Divison 88 Ltd.</footer>
}

export default () => <Footer />
