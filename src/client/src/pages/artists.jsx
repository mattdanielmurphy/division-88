import React from 'react'
import artists from '../components/js/artists'
import Artist from '../components/jsx/Artist'

class Artists extends React.Component {
	render = () => (
		<div id="artists" className="main-container">
			<div className="h1">
				<h1>Artists</h1>
			</div>
			{artists.map((artist, index) => <Artist key={index} artist={artist} index={index} />)}
		</div>
	)
}

export default () => <Artists />
