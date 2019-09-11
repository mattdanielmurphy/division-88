import React from 'react'
import Page from '../components/jsx/Page'
import TextEditor from 'components/jsx/admin/editor/TextEditor'
import API from 'components/js/api'
import PostRenderer from 'components/jsx/PostRenderer'

export default class extends React.Component {
  state = {}
  getAboutBlocks = async () => {
    const data = await API.get('/about/text').then((r) => r.data)
    console.log(data)
    const blocks = data.blocks
    this.setState({ blocks })
  }
  componentDidMount() {
    this.getAboutBlocks()
  }
  render = () => (
    <Page
      headingBackgroundImage={this.props.headingBackgroundImage}
      headingSelected={this.props.headingSelected}
      selectHeading={() => this.props.selectHeading()}
    >
      <PostRenderer blocks={this.state.blocks} />
    </Page>
  )
}
