import React from 'react'
import { Link } from '../components/jsx/Router'
import Image from '../components/jsx/Image'
import Page from '../components/jsx/Page'
import { useRouteData } from 'react-static'
import axios from 'axios'
import env from 'client-env'

//static:

// export default () => {
// 	const { producerTools } = useRouteData()

// 	return (
// 		<Page>
// 			<div className="grid">
// 				{producerTools.map((tool, index) => (
// 					<Link key={index} to={`producer-tools/${tool.page}`}>
// 						<img src={tool.img} alt="" />
// 						<h2>{tool.name}</h2>
// 						<div className="description">{tool.description}</div>
// 					</Link>
// 				))}
// 				<Link to="/" />
// 				<Link to="/" />
// 			</div>
// 		</Page>
// 	)
// }

// dyanmic:
export default class extends React.Component {
	state = {}
	getProducerTools = async () => {
		return await axios.get(`${env.apiUrl}/producer-tools`).then((r) => r.data)
	}
	componentWillMount = async () => {
		const tools = await this.getProducerTools()
		console.log(tools)
		this.setState({ tools })
	}
	render = () => {
		return this.state.tools ? (
			<Page>
				<div className="grid">
					{this.state.tools.map((tool, index) => (
						<Link key={index} to={`producer-tools/${tool.page}`}>
							<img src={tool.imgSrc} alt="" />
							<h2>{tool.name}</h2>
							<div className="description">{tool.description}</div>
						</Link>
					))}
					<Link to="/" />
					<Link to="/" />
				</div>
			</Page>
		) : (
			<div />
		)
	}
}
