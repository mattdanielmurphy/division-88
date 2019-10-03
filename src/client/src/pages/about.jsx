import React from 'react'
import Page from '../components/jsx/Page'
import API from 'components/js/api'
import PostRenderer from 'components/jsx/PostRenderer'

export default class extends React.Component {
	state = {}
	getAboutBlocks = async () => {
		const data = await API.get('/about/text').then((r) => r.data)
		console.log(data)
		const blocks = data.blocks
		this.setState({ blocks })
	}
	componentDidMount() {
		this.getAboutBlocks()
	}
	render = () => (
		<Page noHeading>
			<PostRenderer blocks={this.state.blocks} />
		</Page>
	)
}
