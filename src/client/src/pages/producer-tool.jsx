import React from 'react'

import Page from '../components/jsx/Page'
import API from 'components/js/api'
import Spinner from 'react-spinkit'
import FourOhFour from 'pages/404'
import PostRenderer from 'components/jsx/PostRenderer'

export default class extends React.Component {
  state = {loading: true}

  getProducerToolNameFromUrl() {
    const location = String(window.location)
    console.log(location)
    return /.*\/(.*)\/$/.exec(location)[1]
  }

  getProducerTool() {
    const name = this.getProducerToolNameFromUrl()
    console.log(name)
    if (!name) return undefined
    return API.get(`/producer-tools/${name}`).then((r) => r.data)
  }

  componentDidMount = async () => {
    const tool = await this.getProducerTool()
    this.setState({tool, loading: false})
  }
  render = () => {
    return this.state.loading ? (
      <Spinner className="loading text-center" name="ball-clip-rotate"/>
    ) : this.state.tool ? (
      <Page
        headingBackgroundImage={this.state.tool.imgSrc}
        id="producer-tool"
        heading={{text: `${this.state.tool.name}`}}
      >
        <PostRenderer blocks={this.state.tool.blocks} layouts={this.state.tool.layouts}/>
      </Page>
    ) : (
      <FourOhFour/>
    )
  }
}
