import { slide as Menu } from 'react-burger-menu'
import Nav from './Nav'
import React from 'react'
import { relative } from 'upath'

var styles = {
	bmBurgerButton: {
		position: 'fixed',
		width: '30px',
		height: '26px',
		right: '2rem',
		top: '2rem'
	},
	bmBurgerBars: {
		background: '#fff'
	},
	bmBurgerBarsHover: {
		background: '#ddd'
	},
	bmCrossButton: {
		height: '24px',
		width: '24px'
	},
	bmCross: {
		background: '#bdc3c7'
	},
	bmMenuWrap: {
		position: 'fixed',
		height: '100vh',
		zIndex: '9999'
	},
	bmMenu: {
		padding: '2.5em 1.5em 0',
		background: '#000',
		fontSize: '1.15em'
	},
	bmMorphShape: {
		fill: '#373a47'
	},
	bmItemList: {
		color: '#b8b7ad',
		padding: '0.8em',
		height: 'auto'
	},
	bmItem: {
		display: 'block'
	},
	bmOverlay: {
		background: 'rgba(0, 0, 0, 0.3)'
	}
}

class OffCanvas extends React.Component {
	state = { isOpen: false }
	toggleOpenClose() {
		this.setState({ isOpen: !this.state.isOpen })
	}
	render = () => (
		<Menu right styles={styles} isOpen={this.state.isOpen}>
			<Nav toggleOpenClose={this.toggleOpenClose} />
		</Menu>
	)
}

export default () => <OffCanvas />
