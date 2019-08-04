import React from 'react'
import { SketchPicker } from 'react-color'

export default class Component extends React.Component {
	handleChangeComplete = (color) => this.props.setColor(color)
	render = () => <SketchPicker color={this.props.color} onChangeComplete={this.handleChangeComplete} />
}
