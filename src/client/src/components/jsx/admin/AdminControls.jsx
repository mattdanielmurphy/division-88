import React from 'react'
import ChangeView from './ChangeView'
import PublishOrRevert from './PublishOrRevert'

export default class AdminControls extends React.Component {
	handleScaleSelect(e) {
		const i = e.target.selectedIndex
		const scale = e.target.options[i].value
		this.props.setScale(scale)
	}
	componentDidMount() {}

	render = () => (
		<div id="admin-panel">
			<div className="wrapper">
				{this.props.pageName === 'index' && (
					<div className="undo-redo">
						<button className="undo" onClick={() => this.props.undoLayoutChange()}>
							<strong>U</strong>ndo
						</button>
						<button className="redo" onClick={() => this.props.redoLayoutChange()}>
							<strong>R</strong>edo
						</button>
					</div>
				)}
				<ChangeView view={this.props.view} setView={this.props.setView} setScale={this.props.setScale} />

				<div className="right-side">
					{this.props.changesMade && (
						<PublishOrRevert
							setChangesMade={(changesMade) => this.props.setChangesMade(changesMade)}
							AdminAPI={this.props.AdminAPI}
						/>
					)}

					<div id="sign-out">
						<button onClick={this.props.signOut}>Sign out</button>
					</div>
				</div>
			</div>
		</div>
	)
}
