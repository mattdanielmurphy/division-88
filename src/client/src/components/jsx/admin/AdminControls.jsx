import React from 'react'
import ChangeView from './ChangeView'

export default class AdminControls extends React.Component {
	handleScaleSelect(e) {
		const i = e.target.selectedIndex
		const scale = e.target.options[i].value
		this.props.setScale(scale)
	}
	render = () => (
		<div id='admin-panel'>
			<ChangeView setView={this.props.setView} setScale={this.props.setScale} />
			{this.props.pageName === 'index' && (
				<div className='undo-redo'>
					<button onClick={() => this.props.undoLayoutChange()}>Undo [u]</button>
					<button onClick={() => this.props.redoLayoutChange()}>Redo [r]</button>
				</div>
			)}
		</div>
	)
}
