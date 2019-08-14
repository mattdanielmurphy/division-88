import React, { Component } from "react";

import Artist from "../components/jsx/Artist";
import Page from "../components/jsx/Page";
import axios from "axios";
import env from "../client-env";

export default class extends Component {
	state = {};
	componentDidMount = async () => {
		if (this.props.artists) {
			this.setState({ artists: this.props.artists });
		} else {
			let artists = await axios
				.get(`${env.apiUrl}/artists`)
				.then(r => r.data);
			this.setState({ artists });
		}
	};
	componentDidUpdate(prevProps) {
		if (
			this.props.artists &&
			JSON.stringify(prevProps.artists) !==
				JSON.stringify(this.props.artists)
		) {
			this.setState({ artists: this.props.artists });
		}
	}
	render = () => {
		return this.state.artists ? (
			<Page
				headingBackgroundImage="images/trees.jpg"
				headingSelected={this.props.headingSelected}
				selectHeading={() => this.props.selectHeading("artists")}
				isPreview={this.props.isPreview}
				pageName="artists"
			>
				{this.state.artists.map((artist, index) => {
					return (
						<Artist
							key={index}
							index={index}
							isPreview={this.props.isPreview}
							{...artist}
							selectArtist={() => this.props.selectArtist(index)}
							selected={this.props.selectedArtist === index}
						/>
					);
				})}
			</Page>
		) : (
			<div />
		);
	};
}
