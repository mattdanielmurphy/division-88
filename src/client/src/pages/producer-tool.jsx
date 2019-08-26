import React from 'react'

import Page from '../components/jsx/Page'
import API from 'components/js/api'
import Spinner from 'react-spinkit'
import FourOhFour from 'pages/404'

class ProducerTool extends React.Component {
  state = {
    dropboxDirectUrl: '',
  }
  setDropboxDirectUrl(dropboxUrl) {
    this.setState({
      dropboxDirectUrl: dropboxUrl
        .replace('www.dropbox.com', 'dl.dropboxusercontent.com')
        .replace('dl=0', 'dl=1'),
    })
  }
  componentDidMount() {
    this.setDropboxDirectUrl(this.props.dropboxUrl)
  }
  render = () => {
    return (
      <section className='text'>
        <p>{this.props.description.text}</p>
        <a href={this.state.dropboxDirectUrl} className='button'>
          Download
        </a>
      </section>
    ) /**/
  }
}

export default class extends React.Component {
  state = { loading: true }
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
    this.setState({ tool, loading: false })
  }
  render = () => {
    return this.state.loading ? (
      <Spinner className='loading text-center' name='ball-clip-rotate' />
    ) : this.state.tool ? (
      <Page
        headingBackgroundImage={this.state.tool.imgSrc}
        headingSelected={this.props.headingSelected}
        id='producer-tool'
        heading={{
          text: `${this.state.tool.name}`,
        }}
        selectHeading={() => this.props.selectHeading(this.props.pageName)}
        isPreview={this.props.isPreview}
      >
        <ProducerTool {...this.state.tool} />
      </Page>
    ) : (
      <FourOhFour />
    )
  }
}
