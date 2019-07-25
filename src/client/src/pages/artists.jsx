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

export default (props) => {
	let { artists } = useRouteData()
	artists = Object.values(artists)

	return (
		<Page backgroundImage={'/images/trees.jpg'}>
			{artists.map((artist, index) => <Artist key={index} {...artist} index={index} />)}
		</Page>
	)
}
