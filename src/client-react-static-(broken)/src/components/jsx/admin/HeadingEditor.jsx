import React from 'react'
import ToggleButton from 'components/jsx/ToggleButton'
import ColorPicker from 'components/jsx/admin/ColorPicker'
import axios from 'axios'
import env from 'client-env'

export default class HeadingEditor extends React.Component {
	state = {}
	getHeading = async () => await axios.get(`${env.apiUrl}/page-info/${this.props.pageName}`).then((r) => r.data)
	handleSubmit = async (e) => {
		if (e) e.preventDefault()
		// just submit this modified value

		axios.post(`${env.apiUrl}/page-info/${this.props.pageName}`, this.state.heading).then((r) => {
			this.setState({ headingFromDatabase: this.state.heading })
			this.props.updateHeading(this.state.heading)
		})
	}
	updateHeadingValue(path, value) {
		const heading = Object.assign({}, this.state.heading)
		function set(path, value) {
			let schema = heading // a moving reference to internal objects within obj
			let pList = path.split('.')
			let length = pList.length
			for (let i = 0; i < length - 1; i++) {
				let elem = pList[i]
				if (!schema[elem]) schema[elem] = {}
				schema = schema[elem]
			}

			schema[pList[length - 1]] = value
		}
		set(path, value)
		this.setState({ heading })
	}
	handleInputChange = ({ e, path, value }) => {
		if (e) {
			const path = e.target.id
			const value = e.target.value
			this.updateHeadingValue(path, value)
		} else {
			this.updateHeadingValue(path, value)
		}
	}
	setKeyBindings = () => {
		document.onkeypress = (e) => {
			if (
				e.target.hasAttribute('data-slate-editor') ||
				e.target.tagName === 'INPUT' ||
				e.target.tagName === 'TEXTAREA'
			)
				return
			else if (e.key === 's') this.handleSubmit()
		}
	}
	componentDidMount = async () => {
		const heading = await this.getHeading()
		this.setState({ heading })
		window.onbeforeunload = null
		this.setKeyBindings()
	}
	render = () =>
		this.state.heading ? (
			<div id="property-editor">
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<div className="property-input">
						<label>heading background image</label>
						<input
							onChange={(e) => this.handleInputChange({ e })}
							id="headingBackgroundImage"
							value={this.state.heading.headingBackgroundImage || ''}
						/>
					</div>
					{this.state.error}
					<button>Submit changes [S]</button>
				</form>
			</div>
		) : (
			<div />
		)
}