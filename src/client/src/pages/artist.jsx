import React from 'react'
import { Link } from 'components/jsx/Router'
import { Container, Row, Col } from 'react-grid-system'
import artists from '../components/js/artists'
import Image from '../components/jsx/Image'

class SpotifyPlayer extends React.Component {
	state = { loading: true }
	getEmbedUrl() {
		let regexGroups = /(.*)\/(.*)\/(.*)\?/.exec(this.props.spotifyUrl)
		if (!regexGroups) regexGroups = /(.*)\/(.*)\/(.*)/.exec(this.props.spotifyUrl)
		let [ , url, contentType, id ] = regexGroups
		url = [ url, 'embed', contentType, id ].join('/')
		return url
	}
	getIFrame() {
		let src = this.getEmbedUrl()
		return (
			<div>
				{this.state.loading && <div>Loading...</div>}
				<iframe
					onLoad={() => this.setState({ loading: false })}
					className="spotify-iframe"
					src={src}
					width="300"
					height="380"
					frameBorder="0"
					allowtransparency="true"
					allow="encrypted-media"
				/>
			</div>
		)
	}
	render = () => <div>{this.getIFrame()}</div>
}

const Releases = ({ artist }) => (
	<div id="releases">
		<div className="right">
			{artist.releases.map((release, index) => (
				<div key={index} className="release">
					<h2>{release.name}</h2>
					<div className="left">
						<img src={release.cover} alt={`${release.name} album cover artwork`} />
					</div>
					<div className="right">
						<SpotifyPlayer spotifyUrl={release.spotifyUrl} />
					</div>
				</div>
			))}
		</div>
	</div>
)

const TopTen = ({ artist }) => (
	<div id="top-ten">
		<h2>Top ten tracks</h2>
		<SpotifyPlayer spotifyUrl={artist.spotifyUrl} />
	</div>
)

export default class Artist extends React.Component {
	state = {
		artist: artists.find((artist) => artist.page === this.props.artistName) || artists[0]
	}
	render = () => (
		<div id="artist" className="main-container">
			<div className="h1">
				<h1>
					{this.state.artist.name}: <span>Releases</span>
				</h1>
			</div>
			<Image imgClassName="artist-img" src={this.state.artist.imgSrc} />
			<TopTen artist={this.state.artist} />
			{this.state.artist.releases.length > 0 && <Releases artist={this.state.artist} />}
		</div>
	)
}
