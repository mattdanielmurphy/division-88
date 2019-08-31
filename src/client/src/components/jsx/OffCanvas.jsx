import { slide as Menu } from 'react-burger-menu'
import Nav from './Nav'
import React from 'react'

export default class OffCanvas extends React.Component {
  state = { isOpen: false, width: 30, opacity: '0' }
  getStyles = () => ({
    bmBurgerButton: {
      position: 'absolute',
      width: this.state.width + 'px',
      height: '26px',
      marginLeft:
        `calc(${this.props.previewWidth - this.state.width}px - 2rem)` || '0',
      right: this.props.previewWidth ? 'auto' : '2rem',
      marginTop: '2.2rem',
    },
    bmBurgerBars: {
      background: '#fff',
    },
    bmBurgerBarsHover: {
      background: '#ddd',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
      display: this.props.previewWidth ? 'none' : 'block',
    },
    bmCross: {
      background: '#bdc3c7',
    },
    bmMenuWrap: {
      position: 'fixed',
      marginLeft: `calc(${this.state.width}px + 4rem)` || '0',
      right: '0',
      height: '100vh',
      zIndex: '9999',
      display: this.props.previewWidth ? 'none' : 'inline',
    },
    bmMenu: {
      display: this.props.previewWidth ? 'none' : 'block',
      padding: '2.5em 1.5em 0',
      background: '#000',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
      height: 'auto',
    },
    bmItem: {
      display: 'block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
      display: this.props.previewWidth ? 'none' : 'inline',
    },
  })
  toggleOpenClose(e) {
    if (!this.props.previewWidth) this.setState({ isOpen: !this.state.isOpen })
  }
  componentDidMount() {
    const button = document.getElementsByClassName('bm-burger-button')[0]
      .children[1]
    button.onclick = (e) => e.preventDefault()
  }
  render = () => (
    <Menu right styles={this.getStyles()} isOpen={this.state.isOpen}>
      <Nav
        toggleOpenClose={() => {
          console.log('toggleOpenCloser at OffCanvas')
          this.toggleOpenClose()
        }}
      />
    </Menu>
  )
}
