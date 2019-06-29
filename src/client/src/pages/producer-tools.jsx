import React from 'react'
import Image from '../components/jsx/Image'

class ProducerTools extends React.Component {
	render = () => (
		<div id="producer-tools" className="main-container">
			<div className="h1">
				<h1>Producer Tools</h1>
			</div>
			<Image imgClassName="producer-tool-img" src={'https://placeimg.com/640/480/any'} />
		</div>
	)
}

export default () => <ProducerTools />
