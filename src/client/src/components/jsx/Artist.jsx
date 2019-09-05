import { Link } from 'react-router-dom'
import Image from './Image'
import React from 'react'

class ArtistWrapper extends React.Component {
  render = () => {
    return this.props.isPreview ? (
      <div
        onClick={() => this.props.select()}
        className={`artist-wrapper ${this.props.selected ? 'selected' : ''}`}
        onMouseOver={() => this.props.setHovering(true)}
        onMouseLeave={() => this.props.setHovering(false)}
      >
        {this.props.children}
      </div>
    ) : (
      <Link
        to={this.props.page}
        className={`artist-wrapper ${this.props.selected ? 'selected' : ''}`}
        onMouseOver={() => this.props.setHovering(true)}
        onMouseLeave={() => this.props.setHovering(false)}
      >
        {this.props.children}
      </Link>
    )
  }
}

export default class Artist extends React.Component {
  state = {
    hovering: false,
    alignment: this.props.index % 2 === 0 ? 'right' : 'left',
  }
  getDescriptionStyle = () => {
    const style = Object.assign(
      {
        boxSizing: 'border-box',
      },
      this.props.description.style,
    )
    style.background = 'none'
    return style
  }

  getSeeReleasesStyle = () =>
    this.state.hovering
      ? {
          color: this.props.description.style.color || 'black',
          opacity: 1,
        }
      : {
          color: this.props.description.style.color || 'black',
        }
  setHovering = (hovering) => this.setState({ hovering })
  resizeText() {
    window.dispatchEvent(new Event('resize'))
  }
  render = () => (
    <ArtistWrapper
      select={() => this.props.selectArtist(this.props.index)}
      selected={this.props.selected}
      isPreview={this.props.isPreview}
      page={this.props.page}
      setHovering={(hovering) => this.setHovering(hovering)}
    >
      {this.props.description ? (
        <div className='artist'>
          <Image src={this.props.imgSrc} />
          <div
            className={`description-outer-wrapper align-${this.state.alignment}`}
          >
            <div className='description' style={this.getDescriptionStyle()}>
              <div className='text'>
                <div className='artist-name'>{this.props.name}</div>
                {/*<div className='bio'>{this.props.description.bio}</div>*/}
                <div
                  className='see-releases'
                  style={this.getSeeReleasesStyle()}
                >
                  <span>></span> See releases
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </ArtistWrapper>
  )
}
