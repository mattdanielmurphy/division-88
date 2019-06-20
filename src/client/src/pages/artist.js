import React from 'react'
import { Link } from 'components/Router'
import { Container, Row, Col } from 'react-grid-system'
import artists from '../components/artists'

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
				frameborder="0"
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
			artist.releases.map((release) => (
				<div>
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
		<Container style={{ padding: '0' }} fluid id="artists" className="main-container">
			<h1>{this.state.artist.name}</h1>

			<Releases artist={this.state.artist} />
		</Container>
	)
}
