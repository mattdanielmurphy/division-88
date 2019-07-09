import ArtistName from './ArtistName'
import { Link } from 'components/jsx/Router'
import Image from './Image'
import React from 'react'

export default class Artist extends React.Component {
	state = {
		hovering: false,
		imgStyle: {
			background: `url(${this.props.artist.imgSrc}) center center/cover no-repeat`
		},
		alignment: this.props.artist.description.align
	}
	getDescriptionStyle = () =>
		this.state.hovering
			? Object.assign(
					{
						borderColor: this.props.artist.description.style.color || 'black'
					},
					this.props.artist.description.style
				)
			: this.props.artist.description.style

	getSeeReleasesStyle = () =>
		this.state.hovering
			? {
					color: this.props.artist.description.style.color || 'black',
					opacity: 1
				}
			: {
					color: this.props.artist.description.style.color || 'black'
				}
	setHovering = (hovering) => this.setState({ hovering })
	render = () => (
		<div className={`${this.props.index === 0 ? 'artist first' : 'artist'}`}>
			<div className="artist-img" style={this.state.imgStyle} />
			<div className={`description-outer-wrapper align-${this.state.alignment}`}>
				<Link
					to={`/artist/${this.props.artist.page}`}
					onMouseOver={() => this.setHovering(true)}
					className="description-wrapper"
					onMouseLeave={() => this.setHovering(false)}
				>
					<div className="description" style={this.getDescriptionStyle()}>
						<div className="text">
							<h2>{this.props.artist.name}</h2>
							<div className="bio">{this.props.artist.description.bio}</div>
							<div className="see-releases" style={this.getSeeReleasesStyle()}>
								<span>></span> See releases
							</div>
						</div>
					</div>
				</Link>
			</div>
		</div>
	)
}
