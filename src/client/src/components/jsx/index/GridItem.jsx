import React from 'react'
import Video from '../Video'
import { Link } from '../Router'

class GridItemContentContainer extends React.Component {
	render = () =>
		// disable link when editing so you user doesn't accidentally leave the page when dragging
		this.props.link && !this.props.editingModeEnabled ? (
			<Link
				// onMouseEnter={() => this.props.handleMouseOverGridItem()}
				// onMouseLeave={() => this.props.handleMouseLeaveGridItem()}
				to={this.props.link}
			>
				{this.props.children}
			</Link>
		) : (
			<div
			// onMouseEnter={() => this.props.handleMouseOverGridItem()}
			// onMouseLeave={() => this.props.handleMouseLeaveGridItem()}
			>
				{this.props.children}
			</div>
		)
}

class BottomText extends React.Component {
	state = {
		style: { height: this.props.height, backgroundColor: this.props.backgroundColor }
	}
	render = () => (
		<div className="bottom-text" style={this.state.style}>
			{this.props.text}
		</div>
	)
}

const BackgroundText = (props) => (
	<div className="background-text">
		<div className="heading" key="heading">
			{props.heading}
		</div>
		{props.subheading && (
			<div className="subheading" key="subheading">
				{props.subheading}
			</div>
		)}
	</div>
)

class GridItemContent extends React.Component {
	state = {
		style: {
			background: `url(${this.props.imgSrc}) center center/cover no-repeat`,
			width: '100%',
			height: this.props.bottomText ? `calc(100% - ${this.props.bottomText.height})` : '100%'
		},
		backgroundText: this.props.backgroundText
	}
	updateBackgroundText(bgT) {
		console.log(bgT)
	}
	render = () => {
		return (
			<GridItemContentContainer
				link={this.props.link}
				editingModeEnabled={this.props.editingModeEnabled}
				// handleMouseOverGridItem={() => this.props.handleMouseOverGridItem(this.props.index)}
				// handleMouseLeaveGridItem={() => this.props.handleMouseLeaveGridItem(this.props.index)}
			>
				<div className="background" style={this.state.style} />
				{this.props.backgroundText && (
					<BackgroundText
						updateBackgroundText={(bgTxt) => this.updateBackgroundText(bgTxt)}
						{...this.state.backgroundText}
					/>
				)}
				{this.props.bottomText && <BottomText {...this.props.bottomText} />}
			</GridItemContentContainer>
		)
	}
}

export default class GridItem extends React.Component {
	render = () => (this.props.videoSrc ? <Video {...this.props} /> : <GridItemContent {...this.props} />)
}
