import React from 'react'
import Page from '../components/jsx/Page'
import { Link } from 'react-router-dom'
import { Textfit } from 'react-textfit-17'
import BlockEditor from 'components/jsx/admin/editor/BlockEditor'

class AdminPostHeading extends React.Component {
	render = () => (
		<div>
			<div className="top-heading admin-post-heading">
				<div className="heading">
					<Textfit mode="single" max={50}>
						{this.props.title}
						{/*<input*/}
						{/*  type='text'*/}
						{/*  className='title-input'*/}
						{/*  value={this.props.title}*/}
						{/*  onChange={(e) => this.props.handleTitleChange(e)}*/}
						{/*/>*/}
					</Textfit>
				</div>
			</div>

			{this.props.titleRenamed && (
				<div className="title-renamed-warning">
					WARNING: Title has been renamed. This page URL is based on the title. Refreshing this page will
					result in a 404 error.{' '}
					<Link to={`../${this.props.getPostUrl()}`} className="link">
						Click here
					</Link>{' '}
					to navigate to the new page now.
				</div>
			)}
		</div>
	)
}

export default class AdminProducerTool extends React.Component {
	state = {
		tool: this.props.tool,
		link: this.props.tool ? this.props.tool.page : this.props.toolName,
		title: this.props.tool
			? this.props.tool.name
			: this.props.toolName
				? this.props.toolName.split('-').join(' ')
				: this.props.match.params.tool.split('-').join(' ')
	}
	updateBlocks = (blocks) => {
		console.log('update blocks', blocks)
		const tool = this.state.tool
		tool.blocks = blocks
		this.props.AdminAPI
			.post('/producer-tools', tool)
			.then((res) => console.log(res))
			.catch((err) => console.log(err))
		this.props.setChangesMade(true)
	}
	getTool = async (postTitle) => {
		const tool = await this.props.AdminAPI.get(`/producer-tools/${postTitle}`).then((r) => r.data)

		if (typeof tool === 'object') {
			this.setState({ tool })
		} else {
			console.log(`tool not found`)
			this.setState({ title: 'Tool not found' })
		}
		console.log(tool)
		return tool
	}
	componentDidMount = async () => {
		if (!this.props.tool) this.getTool(this.state.link)
	}
	componentDidUpdate = (prevProps) => {
		if (this.props.tool && JSON.stringify(prevProps.tool) !== JSON.stringify(this.props.tool)) {
			this.setState({ tool: this.props.tool })
		}
	}
	handleTitleChange = (e) => {
		this.props.setChangesMade(true)
		const title = e.target.value
		const tool = this.state.tool
		tool.title = title
		this.setState({ title, tool, titleRenamed: true })
		this.props.AdminAPI
			.post('/producer-tools', tool)
			.then((res) => console.log(res))
			.catch((err) => console.log(err))
	}
	getPostUrl = () => this.state.title.split(' ').join('-')
	render = () => (
		<div>
			<Page noHeading isPreview id="admin-tool">
				<AdminPostHeading
					titleRenamed={this.state.titleRenamed}
					getPostUrl={() => this.getPostUrl()}
					title={this.state.title}
					handleTitleChange={(e) => this.handleTitleChange(e)}
				/>

				{this.state.tool && this.state.tool.blocks ? (
					<BlockEditor
						blocks={this.state.tool.blocks}
						updateBlocks={(content) => this.updateBlocks(content)}
						AdminAPI={this.props.AdminAPI}
						// beforePostRenderer={
						// 	<div style={{ marginBottom: '1rem' }}>
						// 		<a href={this.state.tool.dropboxDirectUrl} className="button">
						// 			Download
						// 		</a>
						// 	</div>
						// }
						// afterPostRenderer={
						// 	<div style={{ marginTop: '1rem' }}>
						// 		<a href={this.state.tool.dropboxDirectUrl} className="button">
						// 			Download
						// 		</a>
						// 	</div>
						// }
					/>
				) : (
					<div>Loading</div>
				)}
			</Page>
		</div>
	)
}
