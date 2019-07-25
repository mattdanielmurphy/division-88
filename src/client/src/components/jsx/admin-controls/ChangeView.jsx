import React from 'react'

export default class AdminControls extends React.Component {
	handleScaleSelect(e) {
		const i = e.target.selectedIndex
		const scale = e.target.options[i].value
		this.props.setScale(scale)
	}
	render = () => (
		<div id="change-view">
			<h3>Change view</h3>
			<div>
				<button onClick={() => this.props.setView('mobile')}>Mobile</button>
				<button onClick={() => this.props.setView('tablet')}>Tablet</button>
				<button onClick={() => this.props.setView('desktop')}>Desktop</button>
				<label>Scale: </label>
				<select onChange={(e) => this.handleScaleSelect(e)}>
					<option value="1">100%</option>
					<option value="0.9">90%</option>
					<option value="0.8">80%</option>
					<option value="0.7">70%</option>
					<option value="0.6">60%</option>
					<option value="0.5">50%</option>
				</select>
			</div>
		</div>
	)
}
