import React from 'react'
import ProducerTool from '../components/jsx/ProducerTool'
import Page from '../components/jsx/Page'
import axios from 'axios'
import env from '../client-env'

// STATIC VERSION:
//

// export default (props) => {
// 	let { artists } = useRouteData()
// 	artists = Object.values(artists)

// 	return (
// 		<Page headingBackgroundImage={this.props.headingBackgroundImage} headingSelected={this.props.headingSelected} backgroundImage={'images/trees.jpg'}>
// 			{artists.map((artist, index) => <ProducerTool key={index} {...artist} index={index} {...props} />)}
// 		</Page>
// 	)
// }

// DYNAMIC VERSION (TEMPORARY):

export default class extends React.Component {
	state = {}
	componentDidMount = async () => {
		if (this.props.tools) {
			this.setState({ tools: this.props.tools })
		} else {
			let tools = await axios.get(`${env.apiUrl}/producer-tools`).then((r) => r.data)
			this.setState({ tools })
		}
	}
	componentDidUpdate(prevProps) {
		if (this.props.tools && JSON.stringify(prevProps.tools) !== JSON.stringify(this.props.tools)) {
			this.setState({ tools: this.props.tools })
		}
	}
	render = () => {
		//  {this.state.tools.map((tool, index) => (
		//  	<Link key={index} to={`producer-tools/${tool.page}`}>
		//  		{}
		//  		<img src={tool.imgSrc} alt="" />
		//  		<div className="description">
		//  			<h2>{tool.name}</h2>
		//  			<div className="description-text">{tool.description}</div>
		//  		</div>
		//  	</Link>
		return this.state.tools ? (
			<Page
				headingBackgroundImage={this.props.headingBackgroundImage}
				headingSelected={this.props.headingSelected}
				selectHeading={() => this.props.selectHeading(this.props.pageName)}
				isPreview={this.props.isPreview}
				backgroundImage={'images/trees.jpg'}
			>
				{this.state.tools.map((tool, index) => {
					return (
						<ProducerTool
							key={index}
							index={index}
							isPreview={this.props.isPreview}
							{...tool}
							selectTool={() => {
								this.props.selectTool(index)
							}}
							selected={this.props.selectedTool === index}
						/>
					)
				})}
			</Page>
		) : (
			<div />
		)
	}
}
