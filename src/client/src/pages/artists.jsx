import React from 'react'
import artists from '../components/js/artists'
import Artist from '../components/jsx/Artist'

class Artists extends React.Component {
	getDescriptionStyle = () => {
		artists
		return {}
	}
	render = () => (
		<div id="artists" className="main-container">
			{/* Going to switch to modular way once everything is sorted manually */}
			<div className="h1">
				<h1>Artists</h1>
			</div>
			{artists.map((artist, index) => <Artist key={index} artist={artist} index={index} />)}
		</div>
	)
}

export default () => <Artists />
