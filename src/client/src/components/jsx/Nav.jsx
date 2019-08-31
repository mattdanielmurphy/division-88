import React from 'react'
import { Link } from 'react-router-dom'
import Logo from 'components/jsx/Logo'

export default class Nav extends React.Component {
  state = {
    links: [
      {
        name: 'Artists',
        url: '/artists',
      },
      {
        name: 'Producer Tools',
        url: '/producer-tools',
      },
      {
        name: 'Index',
        url: '/',
      },
      {
        name: 'About',
        url: '/about',
      },
      {
        name: 'Posts',
        url: '/posts',
      },
    ],
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
    <div id='nav-wrapper'>
      <nav>
        <div className='left-side'>
          <Link
            key='Artists'
            onClick={this.props.toggleOpenClose}
            to={this.state.adminVersion ? this.getAdminLink('/') : '/artists'}
          >
            Artists
          </Link>
          <Link
            key='About'
            onClick={this.props.toggleOpenClose}
            to={this.state.adminVersion ? this.getAdminLink('/') : '/about'}
          >
            About
          </Link>
        </div>
        <Logo width='70px' fill='#242424' hoverFill='#343434' />
        <div className='right-side'>
          <Link
            key='Producer Tools'
            onClick={this.props.toggleOpenClose}
            to={
              this.state.adminVersion
                ? this.getAdminLink('/')
                : '/producer-tools'
            }
          >
            Producer Tools
          </Link>
          <Link
            key='Posts'
            onClick={this.props.toggleOpenClose}
            to={this.state.adminVersion ? this.getAdminLink('/') : '/posts'}
          >
            Posts
          </Link>
        </div>
      </nav>
    </div>
  )
}
