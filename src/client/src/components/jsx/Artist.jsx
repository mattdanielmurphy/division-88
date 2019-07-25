import ArtistName from './ArtistName'
import { Link } from 'components/jsx/Router'
import Image from './Image'
import React from 'react'
import baseUrl from 'components/js/baseUrl'
import { Textfit } from 'react-textfit'

export default class Artist extends React.Component {
	state = {
		hovering: false,
		alignment: this.props.index % 2 === 0 ? 'right' : 'left'
	}
	getDescriptionStyle = () => {
		const style = Object.assign(
			{
				boxSizing: 'border-box',
				height: '22rem'
			},
			this.props.description.style
		)
		return style
		// this.state.hovering
		// 	? Object.assign(
		// 			{
		// 				borderColor: this.props.description.style.color || 'black'
		// 			},
		// 			this.props.description.style
		// 		)
		// 	: this.props.description.style
	}

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
		<Link
			to={`${baseUrl()}/artists/${this.props.page}`}
			onMouseOver={() => this.setHovering(true)}
			className="artist-wrapper"
			onMouseLeave={() => this.setHovering(false)}
		>
			<div className="artist">
				<Image src={this.props.imgSrc} />
				<div className={`description-outer-wrapper align-${this.state.alignment}`}>
					<div className="description" style={this.getDescriptionStyle()}>
						<div className="text">
							<Textfit mode="single" className="artist-name" max={40}>
								{this.props.name}
							</Textfit>
							<Textfit className="bio" min={12} max={20}>
								{this.props.description.bio}
							</Textfit>
							<Textfit mode="single" max={16} className="see-releases" style={this.getSeeReleasesStyle()}>
								<span>></span> See releases
							</Textfit>
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}
