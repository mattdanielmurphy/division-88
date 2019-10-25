import React from 'react'
import Page from '../components/jsx/Page'
import API from 'components/js/api'
import PostRenderer from 'components/jsx/PostRenderer'

export default class extends React.Component {
  state = {
    link: this.props.postName || this.props.match.params.post,
    title: this.props.postName
      ? this.props.postName.split('-').join(' ')
      : this.props.match.params.post.split('-').join(' '),
    category: 'miscellaneous'
  }
  getPost = async (postTitle) => {
    const post = await API.get(`/posts/${postTitle}`).then((r) => r.data)

    if (typeof post === 'object') {
      this.setState({post, category: post.category})
    } else {
      console.log(`post not found`)
      this.setState({title: 'Post not found'})
    }
    return post
  }
  componentDidMount = async () => {
    await this.getPost(this.state.link)
  }
  render = () => (
    <Page id="post" isPreview={this.props.postName} heading={this.state.title}>
      {this.state.post ? <PostRenderer blocks={this.state.post.blocks} layouts={this.state.post.layouts}/> : <div/>}
    </Page>
  )
}
