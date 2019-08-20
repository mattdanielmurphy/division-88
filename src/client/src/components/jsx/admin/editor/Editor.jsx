import React from 'react'
import CellEditor from './CellEditor'
import ArtistEditor from './ArtistEditor'
import ToolEditor from './ToolEditor'
import HeadingEditor from './HeadingEditor'

export default class Editor extends React.Component {
	render = () => {
		if (this.props.selectedHeading)
			return (
				<HeadingEditor
					idToken={this.props.idToken}
					pageName={this.props.match.params.page}
					selectedHeading={this.props.selectedHeading}
					updateHeading={(heading) => this.props.updateHeading(heading)}
				/>
			)
		else if (this.props.match.params.page === 'artists')
			return (
				<ArtistEditor
					idToken={this.props.idToken}
					index={this.props.selectedArtist}
					updateArtists={(index, artist) => this.props.updateArtists(index, artist)}
					refreshArtists={(index, artist) => this.props.refreshArtists(index, artist)}
				/>
			)
		else if (this.props.match.params.page === 'index')
			return (
				<CellEditor
					idToken={this.props.idToken}
					index={this.props.selectedCell}
					updateGrid={({ layouts, cells }) => this.props.updateGrid({ layouts, cells })}
					refreshGrid={({ cells }) => this.props.refreshGrid({ cells })}
					videoMode={this.props.selectedCell.video}
				/>
			)
		else if (this.props.match.params.page === 'producer-tools')
			return (
				<ToolEditor
					idToken={this.props.idToken}
					index={this.props.selectedTool}
					updateTools={(index, tool) => this.props.updateTools(index, tool)}
					refreshTools={(index, tool) => this.props.refreshTools(index, tool)}
				/>
			)
		else if (this.props.match.params.page === 'about') return <div>about editor</div>
		else return <div />
	}
}
