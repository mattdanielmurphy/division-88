import React from 'react'
import { Link } from 'react-router-dom'
import OffCanvas from './OffCanvas'
import Nav from './Nav'
import MediaQuery from 'react-responsive'
import Logo from 'components/jsx/Logo'

export default class extends React.Component {
  state = {
    adminVersion: false,
  }
  getAdminLink = (url) => '/admin' + url
  componentDidMount() {
    this.setState({
      adminVersion: /\/admin/.test(window.location.pathname),
      mounted: true,
    })
  }
  componentDidUpdate() {
    if (this.state.mounted) {
      if (
        this.state.adminVersion &&
        this.state.adminVersion !== /\/admin/.test(window.location.pathname)
      ) {
        this.setState({
          adminVersion: /\/admin/.test(window.location.pathname),
        })
      }
    }
  }
  render = () => (
    <div className='header-wrapper'>
      {this.props.mobilePreview ? (
        <OffCanvas previewWidth={this.props.previewWidth} />
      ) : (
        <MediaQuery maxWidth={440}>
          <OffCanvas />
        </MediaQuery>
      )}

      <header>
        <MediaQuery maxWidth={440}>
          <Logo width='50px' className='mobile-header-logo' />
        </MediaQuery>
        {!this.props.mobilePreview && (
          <MediaQuery minWidth={440}>
            <Nav />
          </MediaQuery>
        )}
      </header>
    </div>
  )
}
