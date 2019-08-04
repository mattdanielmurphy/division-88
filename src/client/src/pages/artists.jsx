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
		if (this.props.artists) {
			this.setState({ artists: this.props.artists, isPreview: true })
		} else {
			let artists = await axios.get(`${env.apiUrl}/artists`).then((r) => r.data)
			this.setState({ artists })
		}
	}
	componentDidUpdate(prevProps) {
		if (this.props.artists && JSON.stringify(prevProps.artists) !== JSON.stringify(this.props.artists)) {
			this.setState({ artists: this.props.artists })
		}
	}
	render = () => {
		return this.state.artists ? (
			<Page backgroundImage={'/images/trees.jpg'}>
				{this.state.artists.map((artist, index) => {
					return (
						<Artist
							key={index}
							index={index}
							isPreview={this.state.isPreview}
							{...artist}
							selectArtist={() => this.props.selectArtist(index)}
							selected={this.props.selectedArtist === index}
						/>
					)
				})}
			</Page>
		) : (
			<div>Loading...</div>
		)
	}
}
