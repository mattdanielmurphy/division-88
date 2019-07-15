import React from 'react'

export default class Page extends React.Component {
	// PROPS
	// REQUIRED:
	// id
	// heading
	// OPTIONAL:
	//
	state = {
		backgroundImageStyle: {
			backgroundImage: `url(${this.props.backgroundImage.source})`
		}
	}
	render = () => (
		<div id={this.props.id} className="main-container">
			<div className="h1">
				<h1>{this.props.heading}</h1>
			</div>
			{this.props.backgroundImage && <div className="background-image" style={this.state.backgroundImageStyle} />}
			<main>{this.props.children}</main>
		</div>
	)
}
