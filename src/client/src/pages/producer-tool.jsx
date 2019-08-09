import React from 'react'
import { useRouteData } from 'react-static'
import Page from '../components/jsx/Page'
import axios from 'axios'
import env from 'client-env'

class ProducerTool extends React.Component {
	state = {
		dropboxDirectUrl: ''
	}
	setDropboxDirectUrl(dropboxUrl) {
		this.setState({
			dropboxDirectUrl: dropboxUrl.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace('dl=0', 'dl=1')
		})
	}
	componentDidMount() {
		this.setDropboxDirectUrl(this.props.dropboxUrl)
	}
	render = () => {
		return (
			<section className="text">
				<p>{this.props.description.text}</p>
				<a href={this.state.dropboxDirectUrl} className="button">
					Download
				</a>
			</section>
		)
	}
}

//static version:

// export default () => {
// 	const { tool } = useRouteData()
// 	return (
// 		<Page headingBackgroundImage={this.props.headingBackgroundImage} headingSelected={this.props.headingSelected}
// 			id="producer-tool"
// 			heading={{ text: `${tool.name}: `, spanText: 'producer tool' }}
// 			backgroundImage={tool.img}
// 		>
// 			<ProducerTool {...tool} />
// 		</Page>
// 	)
// }

// dyanmic version:
export default class extends React.Component {
	state = {}
	getProducerToolNameFromUrl() {
		const location = String(window.location)
		return /.*\/(.*)$/.exec(location)[1]
	}
	getProducerTool() {
		const name = this.getProducerToolNameFromUrl()
		return axios.get(`${env.apiUrl}/producer-tools/${name}`).then((r) => r.data)
	}
	componentDidMount = async () => {
		const tool = await this.getProducerTool()

		console.log(tool)
		this.setState({ tool })
	}
	render = () => {
		return this.state.tool ? (
			<Page
				headingBackgroundImage={this.props.headingBackgroundImage}
				headingSelected={this.props.headingSelected}
				id="producer-tool"
				heading={{ text: `${this.state.tool.name}: `, spanText: 'producer tool' }}
				backgroundImage={this.state.tool.imgSrc}
				// make sure this gets passed to ProducerTool from whereever, same for all instances of Page
				selectHeading={() => this.props.selectHeading(this.props.pageName)}
				isPreview={this.props.isPreview}
			>
				<ProducerTool {...this.state.tool} />
			</Page>
		) : (
			<div />
		)
	}
}
