import React from 'react'
import GridItem from './index/GridItem'
// import ProgressiveImage from 'react-progressive-image'

export default class Image extends React.Component {
	state = {
		style: {
			background: `url(${this.props.src}) center/cover no-repeat`
		}
	}
	render = () => {
		return <div className="img" style={this.state.style} />
	}
}
