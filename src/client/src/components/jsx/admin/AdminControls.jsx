import React from 'react'
import ChangeView from './ChangeView'

class ToggleEditingMode extends React.Component {
	render = () => (
		<div className="toggle-editing-mode">
			<button onClick={this.props.toggle}>Toggle editing mode</button>
		</div>
	)
}

export default class AdminControls extends React.Component {
	handleScaleSelect(e) {
		const i = e.target.selectedIndex
		const scale = e.target.options[i].value
		this.props.setScale(scale)
	}
	render = () => (
		<div id="admin-panel">
			<ChangeView setView={this.props.setView} setScale={this.props.setScale} />
			<ToggleEditingMode toggle={this.props.toggleEditingMode} />
		</div>
	)
}
