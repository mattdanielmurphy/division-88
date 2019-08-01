import React from 'react'
import ChangeView from './ChangeView'
import ToggleButton from '../ToggleButton'

export default class AdminControls extends React.Component {
	handleScaleSelect(e) {
		const i = e.target.selectedIndex
		const scale = e.target.options[i].value
		this.props.setScale(scale)
	}
	render = () => (
		<div id="admin-panel">
			<ChangeView setView={this.props.setView} setScale={this.props.setScale} />
			<ToggleButton toggle={this.props.toggleEditingMode} enabled={this.props.editingModeEnabled}>
				Toggle editing mode
			</ToggleButton>
			<button onClick={() => this.props.undoLayoutChange()}>Undo</button>
			<button onClick={() => this.props.redoLayoutChange()}>Redo</button>
		</div>
	)
}
