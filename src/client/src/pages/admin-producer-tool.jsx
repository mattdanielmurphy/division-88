import React from 'react'
import Page from '../components/jsx/Page'
import BlockEditor from 'components/jsx/admin/editor/BlockEditor'

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
		<Page noHeading isPreview id="admin-tool">
			{this.state.tool && this.state.tool.blocks ? (
				<BlockEditor
					blocks={this.state.tool.blocks}
					updateBlocks={(content) => this.updateBlocks(content)}
					AdminAPI={this.props.AdminAPI}
				/>
			) : (
				<div>Loading</div>
			)}
		</Page>
	)
}
