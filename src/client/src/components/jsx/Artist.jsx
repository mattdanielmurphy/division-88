import ArtistName from './ArtistName'
import SeeReleases from './SeeReleases'
import Image from './Image'
import React from 'react'

export default class Artist extends React.Component {
	state = { hovering: false }
	setHovering = (hovering) => this.setState({ hovering })
	render = () => (
		<div key={this.props.index} className="artist-row">
			<Image
				imgClassName="artist-img"
				setHovering={(h) => this.setHovering(h)}
				src={this.props.artist.imgSrc}
				link={`/artist/${this.props.artist.page}`}
			/>
			<div className="artist-info">
				<ArtistName setHovering={(h) => this.setHovering(h)} artist={this.props.artist} />
				<div className="artist-bio">{this.props.artist.bio}</div>
				<SeeReleases hovering={this.state.hovering} artist={this.props.artist} />
			</div>
		</div>
	)
}
