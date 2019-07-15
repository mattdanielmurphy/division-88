import ArtistName from './ArtistName'
import { Link } from 'components/jsx/Router'
import Image from './Image'
import React from 'react'

export default class Artist extends React.Component {
	state = {
		hovering: false,
		imgStyle: {
			backgroundImage: `url(${this.props.imgSrc})`
		},
		alignment: this.props.index % 2 === 0 ? 'right' : 'left'
	}
	getDescriptionStyle = () =>
		this.state.hovering
			? Object.assign(
					{
						borderColor: this.props.description.style.color || 'black'
					},
					this.props.description.style
				)
			: this.props.description.style

	getSeeReleasesStyle = () =>
		this.state.hovering
			? {
					color: this.props.description.style.color || 'black',
					opacity: 1
				}
			: {
					color: this.props.description.style.color || 'black'
				}
	setHovering = (hovering) => this.setState({ hovering })
	render = () => (
		<div className="artist">
			<div className="artist-img" style={this.state.imgStyle} />
			<div className={`description-outer-wrapper align-${this.state.alignment}`}>
				<Link
					to={`/artists/${this.props.page}`}
					onMouseOver={() => this.setHovering(true)}
					className="description-wrapper"
					onMouseLeave={() => this.setHovering(false)}
				>
					<div className="description" style={this.getDescriptionStyle()}>
						<div className="text">
							<h2>{this.props.name}</h2>
							<div className="bio">{this.props.description.bio}</div>
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
