import React from 'react'
import Video from '../Video'
import { Link } from '../Router'

class GridItemContentContainer extends React.Component {
	render = () =>
		this.props.link && !this.props.isPreview ? (
			<Link id={`grid-item-${this.props.index}`} content={this.props.content} to={this.props.link}>
				{this.props.children}
			</Link>
		) : (
			<div id={`grid-item-${this.props.index}`} content={this.props.content}>
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
	bottomTextHasText = () => this.props.bottomText.text
	backgroundTextHasText = () => this.props.backgroundText.heading || this.props.backgroundText.subheading
	state = {
		style: {
			background: `url(${this.props.imgSrc}) center center/cover no-repeat`,
			height:
				this.props.bottomText && this.bottomTextHasText()
					? `calc(100% - ${this.props.bottomText.height || '25px'})`
					: '100%'
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
				index={this.props.index}
				content={this.props}
				isPreview={this.props.isPreview}
			>
				<div className={`background ${this.props.selected ? 'selected' : ''}`} style={this.state.style} />
				{this.props.backgroundText &&
				this.backgroundTextHasText() && (
					<BackgroundText
						updateBackgroundText={(bgTxt) => this.updateBackgroundText(bgTxt)}
						{...this.state.backgroundText}
					/>
				)}
				{this.props.bottomText && this.bottomTextHasText() && <BottomText {...this.props.bottomText} />}
			</GridItemContentContainer>
		)
	}
}

export default class GridItem extends React.Component {
	render = () => (this.props.video ? <Video {...this.props} /> : <GridItemContent {...this.props} />)
}
