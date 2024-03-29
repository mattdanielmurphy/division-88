import React from 'react'
import MaterialTable from 'material-table'

export default class Editable extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			columns: [ { title: 'Title', field: 'title' } ]
		}
	}

	render() {
		return (
			<MaterialTable
				title="Posts"
				columns={this.state.columns}
				data={this.props.data}
				actions={[
					{
						icon: 'insert_drive_file',
						tooltip: 'Edit text',
						onClick: (event, rowData) => this.props.editPost(rowData.title)
					}
				]}
				editable={{
					onRowAdd: (post) =>
						new Promise((resolve, reject) => {
							setTimeout(() => {
								this.props.createPost(post)
								resolve()
							}, 1000)
						}),
					onRowUpdate: (newPost, oldPost) =>
						new Promise((resolve, reject) => {
							setTimeout(() => {
								this.props.updatePost(newPost)
								resolve()
							}, 1000)
						}),
					onRowDelete: (post) =>
						new Promise((resolve, reject) => {
							setTimeout(() => {
								this.props.deletePost(post)
								resolve()
							}, 1000)
						})
				}}
			/>
		)
	}
}
