import React from 'react'

import Page from '../components/jsx/Page'
import API from 'components/js/api'
import Spinner from 'react-spinkit'
import FourOhFour from 'pages/404'
import Video from 'components/jsx/Video'

class SpotifyPlayer extends React.Component {
	state = { loading: true }
	getSpotifyEmbedUrl() {
		let regexGroups = /(.*)\/(.*)\/(.*)\?/.exec(this.props.spotifyUrl)
		if (!regexGroups) regexGroups = /(.*)\/(.*)\/(.*)/.exec(this.props.spotifyUrl)
		let [ , url, contentType, id ] = regexGroups
		url = [ url, 'embed', contentType, id ].join('/')
		return url
	}
	getIFrame() {
		let src = this.getSpotifyEmbedUrl()
		return (
			<div>
				{this.state.loading && (
					<div>
						<Spinner
							className="loading text-center"
							name="line-scale-pulse-out"
							color="white"
							fadeIn="none"
						/>
					</div>
				)}
				<iframe
					title={`spotify-iframe-${src}`}
					onLoad={() => this.setState({ loading: false })}
					className="spotify-iframe"
					src={src}
					width="300"
					height="410"
					frameBorder="0"
					allowtransparency="true"
					allow="encrypted-media"
				/>
			</div>
		)
	}
	render = () => <div>{this.getIFrame()}</div>
}

const TopTen = ({ artist }) => (
	<div id="top-ten">
		<h2>Top Tracks</h2>
		<SpotifyPlayer spotifyUrl={artist.spotifyUrl} />
	</div>
)

export default class extends React.Component {
	state = { loading: true }
	getArtist() {
		const name = this.props.match.params.artist
		return API.get(`/artists/${name}`).then((r) => r.data)
	}
	componentDidMount = async () => {
		const artist = await this.getArtist()

		this.setState({ artist, loading: false })
	}
	render = () =>
		this.state.loading ? (
			<Spinner className="loading text-center" name="ball-clip-rotate" />
		) : this.state.artist ? (
			<Page
				id="artist"
				heading={{ text: `${this.state.artist.name}` }}
				headingBackgroundImage={this.state.artist.imgSrc}
				isPreview={this.props.isPreview}
			>
				<div className="left">
					<TopTen artist={this.state.artist} />
				</div>
				<div className="right">
					<div className="bio">{this.state.artist.description.bio}</div>
					{this.state.artist.youtubeId && (
						<div className="video" style={{ width: '100%', height: '300px' }}>
							<Video
								height={300}
								youtubeId={this.state.artist.youtubeId}
								imgSrc={this.state.artist.videoImg}
							/>
						</div>
					)}
				</div>
			</Page>
		) : (
			<FourOhFour />
		)
}
