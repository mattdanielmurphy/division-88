import React from 'react'
import { Link } from 'components/jsx/Router'
import { Container, Row, Col } from 'react-grid-system'
import artists from '../components/js/artists'
import Image from '../components/jsx/Image'

class SpotifyPlayer extends React.Component {
	getEmbedUrl() {
		let [ , url, contentType, id ] = /(.*)\/(.*)\/(.*)\?/.exec(this.props.spotifyUrl)
		url = [ url, 'embed', contentType, id ].join('/')
		return url
	}
	getIFrame() {
		let src = this.getEmbedUrl()
		return (
			<iframe
				className="spotify-iframe"
				src={src}
				width="300"
				height="380"
				frameBorder="0"
				allowtransparency="true"
				allow="encrypted-media"
			/>
		)
	}
	render = () => <div>{this.getIFrame()}</div>
}

const Releases = ({ artist }) => (
	<div id="releases">
		<h2>Top ten tracks</h2>
		<SpotifyPlayer spotifyUrl={artist.spotifyUrl} />
		{artist.releases ? (
			artist.releases.map((release, index) => (
				<div key={index}>
					<h2>{release.name}</h2>
					<SpotifyPlayer spotifyUrl={release.spotifyUrl} />
				</div>
			))
		) : null}
	</div>
)

export default class Artist extends React.Component {
	state = {
		artist: artists.find((artist) => artist.page === this.props.artistName)
	}
	render = () => (
		<div id="artists" className="main-container">
			<h1>{this.state.artist.name}</h1>
			<Image imgClassName="artist-img" src={this.state.artist.imgSrc} />

			<Releases artist={this.state.artist} />
		</div>
	)
}
