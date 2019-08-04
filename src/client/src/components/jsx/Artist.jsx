import ArtistName from './ArtistName'
import { Link } from 'components/jsx/Router'
import Image from './Image'
import React from 'react'
import baseUrl from 'components/js/baseUrl'
import { Textfit } from 'react-textfit'

class ArtistWrapper extends React.Component {
	render = () => {
		return this.props.isPreview ? (
			<div
				onClick={() => this.props.select()}
				className={`artist-wrapper ${this.props.selected ? 'selected' : ''}`}
				onMouseOver={() => this.props.setHovering(true)}
				onMouseLeave={() => this.props.setHovering(false)}
			>
				{this.props.children}
			</div>
		) : (
			<Link
				to={`${baseUrl()}/artists/${this.props.page}`}
				className={`artist-wrapper ${this.props.selected ? 'selected' : ''}`}
				onMouseOver={() => this.props.setHovering(true)}
				onMouseLeave={() => this.props.setHovering(false)}
			>
				{this.props.children}
			</Link>
		)
	}
}

export default class Artist extends React.Component {
	state = {
		hovering: false,
		alignment: this.props.index % 2 === 0 ? 'right' : 'left'
	}
	getDescriptionStyle = () => {
		const style = Object.assign(
			{
				boxSizing: 'border-box'
			},
			this.props.description.style
		)
		return style
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
		<ArtistWrapper
			select={() => this.props.selectArtist(this.props.index)}
			selected={this.props.selected}
			isPreview={this.props.isPreview}
			page={this.props.page}
			setHovering={(hovering) => this.setHovering(hovering)}
		>
			<div className="artist">
				<Image src={this.props.imgSrc} />
				<div className={`description-outer-wrapper align-${this.state.alignment}`}>
					<div className="description" style={this.getDescriptionStyle()}>
						<div className="text">
							<Textfit mode="single" className="artist-name" min={16} max={40}>
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
		</ArtistWrapper>
	)
}
