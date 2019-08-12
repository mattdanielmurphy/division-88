import React from 'react'

import Page from '../components/jsx/Page'
import axios from 'axios'
import env from '../client-env'
import Spinner from 'react-spinkit'

class Rsvp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true
		}
	}
	hideSpinner = () => {
		this.setState({
			loading: false
		})
	}
	render() {
		return (
			<div className='container rsvp-wrapper'>
				{this.state.loading ? (
					<Spinner className='loading text-center' name='three-bounce' color='white' fadeIn='none' />
				) : null}
				<iframe
					src='...'
					width='100%'
					height='700'
					onLoad={this.hideSpinner}
					frameBorder='0'
					marginHeight='0'
					marginWidth='0'
				/>
			</div>
		)
	}
}

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
				{this.state.loading && (
					<div>
						<Spinner
							className='loading text-center'
							name='line-scale-pulse-out'
							color='white'
							fadeIn='none'
						/>
					</div>
				)}
				<iframe
					title={`spotify-iframe-${src}`}
					onLoad={() => this.setState({ loading: false })}
					className='spotify-iframe'
					src={src}
					width='300'
					height='380'
					frameBorder='0'
					allowtransparency='true'
					allow='encrypted-media'
				/>
			</div>
		)
	}
	render = () => <div>{this.getIFrame()}</div>
}

const Releases = ({ artist }) => (
	<div id='releases'>
		<div className='right'>
			{artist.releases.map((release, index) => (
				<div key={index} className='release'>
					<h2>{release.name}</h2>
					<div className='left'>
						<img src={release.cover} alt={`${release.name} album cover artwork`} />
					</div>
					<div className='right'>
						<SpotifyPlayer spotifyUrl={release.spotifyUrl} />
					</div>
				</div>
			))}
		</div>
	</div>
)

const TopTen = ({ artist }) => (
	<div id='top-ten'>
		<h2>Top ten tracks</h2>
		<SpotifyPlayer spotifyUrl={artist.spotifyUrl} />
	</div>
)

// static version:

// export default () => {
// 	const { artist } = useRouteData()
// 	return (
// 		<Page id="artist" heading={{ text: `${artist.name}: `, spanText: 'releases' }} backgroundImage={artist.imgSrc}>
// 			<TopTen artist={artist} />
// 			{artist.releases.length > 0 && <Releases artist={artist} />}
// 		</Page>
// 	)
// }

// 100% dynamic (temporary)

export default class extends React.Component {
	state = {}
	getArtist() {
		const name = this.props.match.params.artist
		return axios.get(`${env.apiUrl}/artists/${name}`).then((r) => r.data)
	}
	componentDidMount = async () => {
		const artist = await this.getArtist()

		this.setState({ artist })
	}
	render = () => {
		return this.state.artist ? (
			<Page
				id='artist'
				heading={{ text: `${this.state.artist.name}` }}
				headingBackgroundImage={this.state.artist.imgSrc}
				isPreview={this.props.isPreview}
			>
				<TopTen artist={this.state.artist} />
				{this.state.artist.releases.length > 0 && <Releases artist={this.state.artist} />}
			</Page>
		) : (
			<div />
		)
	}
}
