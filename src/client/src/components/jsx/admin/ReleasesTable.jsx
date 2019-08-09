import React from 'react'
import MaterialTable from 'material-table'

export default class Editable extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			columns: [
				{ title: 'Name', field: 'name' },
				{ title: 'Spotify URL', field: 'spotifyUrl' },
				{ title: 'Album cover image URL', field: 'cover' }
			]
		}
	}

	render() {
		return (
			<MaterialTable
				title="Releases"
				columns={this.state.columns}
				data={this.props.data}
				editable={{
					onRowAdd: (newData) =>
						new Promise((resolve, reject) => {
							setTimeout(() => {
								{
									const data = this.props.data
									data.push(newData)
									this.props.updateData(data)
									resolve()
								}
								resolve()
							}, 1000)
						}),
					onRowUpdate: (newData, oldData) =>
						new Promise((resolve, reject) => {
							setTimeout(() => {
								{
									const data = this.props.data
									const index = data.indexOf(oldData)
									data[index] = newData
									this.props.updateData(data)
									resolve()
								}
								resolve()
							}, 1000)
						}),
					onRowDelete: (oldData) =>
						new Promise((resolve, reject) => {
							setTimeout(() => {
								{
									let data = this.props.data
									const index = data.indexOf(oldData)
									data.splice(index, 1)
									this.props.updateData(data)
									resolve()
								}
								resolve()
							}, 1000)
						})
				}}
			/>
		)
	}
}
