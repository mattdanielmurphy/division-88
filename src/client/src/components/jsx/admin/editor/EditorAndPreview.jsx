import React from 'react'
import CellEditor from './CellEditor'
import ArtistEditor from './ArtistEditor'
import ToolEditor from './ToolEditor'
import HeadingEditor from './HeadingEditor'

export default class EditorAndPreview extends React.Component {
	render = () => (
		<div id="editor-and-preview" style={this.props.style}>
			{this.props.children}
			{this.props.selectedHeading ? (
				<HeadingEditor
					AdminAPI={this.props.AdminAPI}
					pageName={this.props.match.params.page}
					selectedHeading={this.props.selectedHeading}
					updateHeading={(heading) => this.props.updateHeading(heading)}
				/>
			) : this.props.match.params.page === 'artists' && this.props.selectedArtist !== undefined ? (
				<ArtistEditor
					AdminAPI={this.props.AdminAPI}
					index={this.props.selectedArtist}
					updateArtists={(index, artist) => this.props.updateArtists(index, artist)}
					refreshArtists={(index, artist) => this.props.refreshArtists(index, artist)}
				/>
			) : this.props.match.params.page === 'index' && this.props.selectedCell !== undefined ? (
				<CellEditor
					selectCell={(index) => this.props.selectCell(index)}
					AdminAPI={this.props.AdminAPI}
					index={this.props.selectedCell}
					updateGrid={({ layouts, cells }) => this.props.updateGrid({ layouts, cells })}
					refreshGrid={({ cells }) => this.props.refreshGrid({ cells })}
					videoMode={this.props.selectedCell.video}
				/>
			) : this.props.match.params.page === 'producer-tools' && this.props.selectedTool !== undefined ? (
				<ToolEditor
					currentPageHeight={this.props.currentPageHeight}
					setChangesMade={(changesMade) => this.props.setChangesMade(changesMade)}
					AdminAPI={this.props.AdminAPI}
					index={this.props.selectedTool}
					updateTools={(index, tool) => this.props.updateTools(index, tool)}
					refreshTools={(index, tool) => this.props.refreshTools(index, tool)}
				/>
			) : (
				<div />
			)}
		</div>
	)
}
