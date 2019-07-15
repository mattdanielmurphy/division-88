import React from 'react'
import Artist from '../components/jsx/Artist'
import { useRouteData } from 'react-static'
import Page from '../components/jsx/Page'

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

const Artists = () => {
	let { artists } = useRouteData()
	artists = Object.values(artists)

	return (
		<Page id="artists" heading="Artists" backgroundImage={{ source: '/images/trees.jpg' }}>
			{artists.map((artist, index) => <Artist key={index} {...artist} index={index} />)}
		</Page>
	)
}

export default Artists
