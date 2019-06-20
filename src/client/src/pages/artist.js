import React from 'react'
import { Link } from 'components/Router'
import { Container, Row, Col } from 'react-grid-system'
import artists from '../components/artists'

const artistName = (artistName) => {
	return artists[artists.findIndex((artist) => artist.page === artistName)].name
}

const releases = (artistName) => {
	return artists[artists.findIndex((artist) => artist.page === artistName)].releases
}

export default (props) => (
	<Container style={{ padding: '0' }} fluid id="artists" className="main-container">
		<h1>{artistName(props.artistName)}</h1>
		{releases(props.artistName).map((release) => <p>{release}</p>)}
	</Container>
)
