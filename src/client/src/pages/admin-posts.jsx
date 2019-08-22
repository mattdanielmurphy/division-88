import React from 'react'

import PostsTable from '../components/jsx/admin/PostsTable'
import Page from '../components/jsx/Page'
import { Redirect } from 'react-router'

export default class AdminPosts extends React.Component {
  state = {}
  createPost = (post) => this.props.AdminAPI.post('/posts/new', post)
  updatePost = (post) => {
    const posts = this.state.posts
    posts[post.index] = post
    this.setState({ posts })
    this.props.AdminAPI.post(`/posts/${post.index}`, post)
  }
  deletePost = (post) => this.props.AdminAPI.get(`/posts/delete/${post.index}`)
  handleInputChange = ({ e, path, value }) => {
    if (e) {
      path = e.target.id
      value = e.target.value
    }

    this.updateHeadingValue(path, value)
  }
  setKeyBindings = () => {
    document.onkeypress = (e) => {
      if (
        e.target.hasAttribute('data-slate-editor') ||
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA'
      )
        return
      else if (e.key === 's') this.handleSubmit()
    }
  }
  editPost = (title) => this.setState({ redirect: title.split(' ').join('-') })
  getPosts = async () => this.props.AdminAPI.get('/posts').then((r) => r.data)
  componentDidMount = async () => {
    const posts = await this.getPosts()
    this.setState({ posts })
    window.onbeforeunload = null
    this.setKeyBindings()
  }
  render = () => (
    <Page>
      {this.state.redirect && <Redirect push to={`${this.state.redirect}`} />}
      {this.state.posts ? (
        <PostsTable
          editPost={(title) => this.editPost(title)}
          data={this.state.posts}
          updatePost={(post) => this.updatePost(post)}
          deletePost={(post) => this.deletePost(post)}
          createPost={(post) => this.createPost(post)}
        />
      ) : (
        <div>Loading...</div>
      )}
    </Page>
  )
}
