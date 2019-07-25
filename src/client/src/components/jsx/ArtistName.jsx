import React from 'react'
import { Link } from 'components/jsx/Router'

export default class ArtistName extends React.Component {
	state = {}
	render = () => (
		<h2 className="artist-name">
			<Link
				onMouseEnter={() => this.props.setHovering(true)}
				onMouseLeave={() => this.props.setHovering(false)}
				to={`artist/${this.props.artist.page}`}
			>
				{this.props.artist.name}
			</Link>
		</h2>
	)
}
