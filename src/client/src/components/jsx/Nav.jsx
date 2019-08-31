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
  getLink = (url) => (this.state.adminVersion ? `/admin${url}` : url)
  componentDidMount() {
    this.setState({
      adminVersion: /\/admin/.test(window.location.pathname),
      mounted: true,
    })
  }
  componentDidUpdate() {
    if (this.state.mounted) {
      // if adminVersion is set in state but no longer applies
      if (
        this.state.adminVersion &&
        this.state.adminVersion !== /\/admin/.test(window.location.pathname)
      ) {
        console.log('admin state removed')
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
            to={this.getLink('/artists')}
          >
            Artists
          </Link>
          <Link
            key='About'
            onClick={this.props.toggleOpenClose}
            to={this.getLink('/about')}
          >
            About
          </Link>
        </div>
        {!this.props.toggleOpenClose && (
          <Logo
            width='70px'
            fill='#242424'
            hoverFill='#343434'
            adminVersion={this.state.adminVersion}
          />
        )}
        <div className='right-side'>
          <Link
            key='Producer Tools'
            onClick={this.props.toggleOpenClose}
            to={this.getLink('/producer-tools')}
          >
            Producer Tools
          </Link>
          <Link
            key='Posts'
            onClick={this.props.toggleOpenClose}
            to={this.getLink('/posts')}
          >
            Posts
          </Link>
        </div>
      </nav>
    </div>
  )
}
