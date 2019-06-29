import React from 'react'
import { Link } from 'components/jsx/Router'

export default class SeeReleases extends React.Component {
	state = {}
	componentDidUpdate(prevProps) {
		if (prevProps.hovering !== this.props.hovering) {
			this.setState({ hovering: this.props.hovering })
		}
	}
	render = () => (
		<Link
			onMouseEnter={() => this.setState({ hovering: true })}
			onMouseLeave={() => this.setState({ hovering: false })}
			to={`/artist/${this.props.artist.page}`}
			className={`see-releases ${this.state.hovering && 'hovering'}`}
			style={{ color: this.state.hovering ? '#FF5842' : 'white' }}
		>
			➜ See releases
		</Link>
	)
}
