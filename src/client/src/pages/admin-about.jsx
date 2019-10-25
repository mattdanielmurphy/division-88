import React from 'react'
import TextEditor from 'components/jsx/admin/editor/TextEditor'
import Page from '../components/jsx/Page'
import HeadingEditor from 'components/jsx/admin/editor/HeadingEditor'
import PostRenderer from 'components/jsx/PostRenderer'
import BlockEditor from "components/jsx/admin/editor/BlockEditor";

export default class extends React.Component {
  state = {}
  getAboutData = async () => {
    console.log('get about data')
    const {blocks, layouts} = await this.props.AdminAPI.get('/about').then((r) => r.data)
    console.log(blocks, layouts)
    this.setState({blocks, layouts})
  }
  updateBlocks = (blocks) => {
    console.log('updateBlocks', blocks)
    this.setState({blocks})
    this.props.setChangesMade(true)
    this.props.AdminAPI.post('/about', {blocks}).then((res) => console.log(res)).catch((err) => console.log(err))
  }
  updateLayouts = async layouts => {
    console.log('update layouts', layouts)
    await this.props.AdminAPI.post('/about', {layouts})
      .then(res => console.log(res))
      .catch(err => console.log(err))
    this.props.setChangesMade(true)
    return true
  }
  componentDidMount = () => this.getAboutData()
  render = () => (
    <div>
      <Page id="admin-about" noHeading>
        {this.state.blocks ? (
          <BlockEditor
            blocks={this.state.blocks}
            databaseLayouts={this.state.layouts}
            updateBlocks={async content => await this.updateBlocks(content)}
            updateLayouts={async content => await this.updateLayouts(content)}
            AdminAPI={this.props.AdminAPI}
            view={this.props.view}
            pageDimensions={this.props.pageDimensions}
          />
        ) : (
          <div>loading...</div>
        )}
      </Page>
    </div>
  )
}
