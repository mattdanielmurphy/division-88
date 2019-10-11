import React from 'react'
import TextEditor from 'components/jsx/admin/editor/TextEditor'
import Page from '../components/jsx/Page'
import HeadingEditor from 'components/jsx/admin/editor/HeadingEditor'
import PostRenderer from 'components/jsx/PostRenderer'

export default class extends React.Component {
	state = {}
	updateBlocks = (blocks) => {
		console.log('updateBlocks', blocks)
		this.setState({ blocks })
		this.props.setChangesMade(true)
		this.props.AdminAPI.post('/about', { blocks }).then((res) => console.log(res)).catch((err) => console.log(err))
	}
	getAboutBlocks = async () => {
		const data = await this.props.AdminAPI.get('/about/text').then((r) => r.data)
		const blocks = data.blocks
		this.setState({ blocks })
	}
	componentDidMount() {
		this.getAboutBlocks()
	}
	render = () => (
		<div>
			<Page id="admin-about" noHeading>
				<div id="block-editor">
					<div className="left">
						<h1 style={{ textAlign: 'center' }}>Edit:</h1>
						{this.state.blocks ? (
							<section className="content">
								<TextEditor
									blocks={this.state.blocks}
									updateBlocks={(content) => this.updateBlocks(content)}
									AdminAPI={this.props.AdminAPI}
								/>
							</section>
						) : (
							<div>loading...</div>
						)}
						<HeadingEditor
							AdminAPI={this.props.AdminAPI}
							pageName="about"
							selectedHeading="about"
							updateHeading={(heading) => this.props.updateHeading(heading)}
						/>
					</div>
					<div className="right">
						<h1 style={{ textAlign: 'center' }}>Preview:</h1>
						<PostRenderer blocks={this.state.blocks} />
					</div>
				</div>
			</Page>
		</div>
	)
}
