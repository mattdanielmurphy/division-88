import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from 'components/jsx/Router'
import Image from '../components/jsx/Image'
import Page from '../components/jsx/Page'

class ProducerTool extends React.Component {
	state = {
		dropboxDirectLink: ''
	}
	setDropboxDirectLink(dropboxLink) {
		this.setState({ dropboxDirectLink: dropboxLink.replace('www.dropbox.com', 'dl.dropboxusercontent.com') })
	}
	componentDidMount() {
		this.setDropboxDirectLink(this.props.dropboxLink)
	}
	render = () => {
		return (
			<div>
				<p>{this.props.description}</p>
				<a href={this.state.dropboxDirectLink} className="button">
					Download
				</a>
			</div>
		)
	}
}

export default () => {
	const { tool } = useRouteData()
	return (
		<Page
			id="producer-tool"
			heading={{ text: `${tool.name}: `, spanText: 'producer tool' }}
			backgroundImage={tool.img}
		>
			<ProducerTool {...tool} />
		</Page>
	)
}
