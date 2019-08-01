import React from 'react'
import Artist from '../components/jsx/Artist'
import { useRouteData } from 'react-static'
import Page from '../components/jsx/Page'
import axios from 'axios'
import env from 'client-env'

class ErrorHandler extends React.Component {
	constructor(props) {
		super(props)
		this.state = { errorOccurred: false }
	}

	componentDidCatch(error, info) {
		this.setState({ errorOccurred: true })
		logErrorToMyService(error, info)
	}

	render() {
		return this.state.errorOccurred ? <h1>Something went wrong!</h1> : this.props.children
	}
}

// STATIC VERSION:

// export default (props) => {
// 	let { artists } = useRouteData()
// 	artists = Object.values(artists)

// 	return (
// 		<Page backgroundImage={'/images/trees.jpg'}>
// 			{artists.map((artist, index) => <Artist key={index} {...artist} index={index} {...props} />)}
// 		</Page>
// 	)
// }

// DYNAMIC VERSION (TEMPORARY):

export default class extends React.Component {
	state = {}
	componentWillMount = async () => {
		let artists = await axios.get(`${env.apiUrl}/artists`).then((r) => r.data)
		artists = Object.values(artists)
		this.setState({ artists })
	}
	render = () => {
		return this.state.artists ? (
			<Page backgroundImage={'/images/trees.jpg'}>
				{this.state.artists.map((artist, index) => (
					<Artist key={index} {...artist} index={index} {...this.props} />
				))}
			</Page>
		) : (
			<div>Loading...</div>
		)
	}
}
