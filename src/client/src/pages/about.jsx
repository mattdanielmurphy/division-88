import React from 'react'
import Page from '../components/jsx/Page'
import API from 'components/js/api'
import PostRenderer from 'components/jsx/PostRenderer'

export default class extends React.Component {
  state = {}
  getData = async () => {
    const {blocks, layouts} = await API.get('/about').then((r) => r.data)
    this.setState({blocks, layouts})
  }

  componentDidMount() {
    this.getData()
  }

  render = () => (
    <Page noHeading>
      {this.state.blocks ?
        <PostRenderer blocks={this.state.blocks} layouts={this.state.layouts}/>
        : <div>Loading...</div>
      }
    </Page>
  )
}
