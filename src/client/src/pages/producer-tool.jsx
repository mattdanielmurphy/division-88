import React from 'react'
import { Link } from '../components/jsx/Router'
import producerTools from '../components/js/producer-tools'

class ProducerTool extends React.Component {
	state = {
		dropboxDirectLink: ''
	}
	setDropboxDirectLink(dropboxLink) {
		this.setState(dropboxLink.replace('www.dropbox.com', 'dl.dropboxusercontent.com'))
	}
	componentDidMount() {
		let thisTool = producerTools.find((tool) => tool.page === this.props.pageName)
		Object.assign(this, thisTool)
		this.setDropboxDirectLink(this.dropboxLink)
	}
	render = () => {
		return (
			<div id="producer-tool" className="main-container">
				<div className="h1">
					<h1>{this.name}</h1>
				</div>
				{/* <div className="bg-img" style={{ backgroundImage: `url(${this.img})` }} /> */}
				<p>{this.description}</p>
				<a href={this.state.dropboxDirectLink} className="button">
					Download
				</a>
			</div>
		)
	}
}

export default (props) => <ProducerTool {...props} />
