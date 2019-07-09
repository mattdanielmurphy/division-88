import React from 'react'
import { Link } from '../components/jsx/Router'
import Image from '../components/jsx/Image'
import producerTools from '../components/js/producer-tools'

class ProducerTools extends React.Component {
	render = () => (
		<div id="producer-tools" className="main-container">
			<div className="h1">
				<h1>Producer Tools</h1>
			</div>
			<div className="grid">
				{producerTools.map((tool) => (
					<Link to={`/producer-tool/${tool.page}`}>
						<img src={tool.img} alt="" />
						<h2>{tool.name}</h2>
						<div className="description">{tool.description}</div>
					</Link>
				))}
				<Link to="/" />
				<Link to="/" />
			</div>
		</div>
	)
}

export default () => <ProducerTools />
