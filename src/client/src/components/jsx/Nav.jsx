import React from 'react'
import { Link } from 'react-router-dom'

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
        {this.state.links.map((link) => (
          <Link
            key={link.name}
            onClick={this.props.toggleOpenClose}
            to={
              this.state.adminVersion ? this.getAdminLink(link.url) : link.url
            }
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}
