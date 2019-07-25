import React from 'react'
import { Link } from '../components/jsx/Router'
import Image from '../components/jsx/Image'
import Page from '../components/jsx/Page'
import { useRouteData } from 'react-static'

export default () => {
	const { producerTools } = useRouteData()
	console.log(producerTools)
	return (
		<Page>
			<div className="grid">
				{producerTools.map((tool, index) => (
					<Link key={index} to={`producer-tools/${tool.page}`}>
						<img src={tool.img} alt="" />
						<h2>{tool.name}</h2>
						<div className="description">{tool.description}</div>
					</Link>
				))}
				<Link to="/" />
				<Link to="/" />
			</div>
		</Page>
	)
}
