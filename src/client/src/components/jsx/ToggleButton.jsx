import React from 'react'

export default class extends React.Component {
	handleClick(e) {
		this.props.toggle()
		e.target.classList.toggle('enabled')
	}
	render = () => (
		<button className={this.props.enabled ? 'enabled' : ''} onClick={(e) => this.handleClick(e)}>
			{this.props.children}
		</button>
	)
}
