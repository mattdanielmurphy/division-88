import React from 'react'
import { Editor } from 'slate-react'
import { Value } from 'slate'
import axios from 'axios'
const env = require('client-env')

export default class App extends React.Component {
	state = {
		value: Value.fromJSON(
			// JSON.parse(this.props.text) ||
			{
				document: {
					nodes: [
						{
							object: 'block',
							type: 'paragraph',
							nodes: [
								{
									object: 'text',
									text: 'Click to edit.'
								}
							]
						}
					]
				}
			}
		)
	}

	onChange = ({ value }) => {
		// Check to see if the document has changed before saving.
		if (value.document != this.state.value.document) {
			axios.post(`${env.apiUrl}/about`, { text: JSON.stringify(value.toJSON()) }).catch((err) => console.log(err))
		}

		this.setState({ value })
	}

	render() {
		return <Editor value={this.state.value} onChange={this.onChange} />
	}
}
