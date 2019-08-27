import React from 'react'
// import ProgressiveImage from 'react-progressive-image'

export default class Image extends React.Component {
  state = {
    style: {
      background: `url(${this.props.src}) center top /cover no-repeat`,
    },
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.src !== this.props.src) {
      this.setState({
        style: { background: `url(${this.props.src}) center top/cover no-repeat` },
      })
    }
  }

  render = () => {
    return (
      <div
        style={this.state.style}
        className={`img ${this.props.selected ? 'selected' : ''}`}
      />
    )
  }
}
