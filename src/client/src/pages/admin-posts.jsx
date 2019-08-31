import React from 'react'

import PostsTable from '../components/jsx/admin/PostsTable'
import Page from '../components/jsx/Page'
import { Redirect } from 'react-router'
import HeadingEditor from 'components/jsx/admin/editor/HeadingEditor'

export default class AdminPosts extends React.Component {
  state = {}
  createPost = async (post) => {
    const newPost = await this.props.AdminAPI.post('/posts/new', post).then(
      (r) => r.data,
    )
    const posts = [...this.state.posts, post]
    this.setState({ posts })
  }
  updatePost = (post) => {
    const posts = this.state.posts
    posts[post.index] = post
    this.setState({ posts })
    this.props.AdminAPI.post(`/posts/${post.index}`, post)
  }
  deletePost = async (post) => {
    await this.props.AdminAPI.delete('/posts', { data: post }).then(
      (r) => r.data,
    )
    const posts = this.state.posts
    const index = posts.findIndex((v) => v['_id'] === post['_id'])
    posts.splice(index, 1)
    this.setState({ posts })
  }
  handleInputChange = ({ e, path, value }) => {
    if (e) {
      path = e.target.id
      value = e.target.value
    }

    this.updateHeadingValue(path, value)
  }
  editPost = (title) => this.setState({ redirect: title.split(' ').join('-') })
  getPosts = async () => this.props.AdminAPI.get('/posts').then((r) => r.data)
  componentDidMount = async () => {
    const posts = await this.getPosts()
    this.setState({ posts })
    window.onbeforeunload = null
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
      <HeadingEditor
        AdminAPI={this.props.AdminAPI}
        pageName='posts'
        selectedHeading='posts'
        updateHeading={(heading) => this.props.updateHeading(heading)}
      />
    </Page>
  )
}
