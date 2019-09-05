import React from 'react'
import TextEditor from 'components/jsx/admin/editor/TextEditor'
import Page from '../components/jsx/Page'
import { Link, Redirect } from 'react-router-dom'
import { Textfit } from 'react-textfit-17'

export default class extends React.Component {
  state = {
    link: this.props.postName,
    title: this.props.postName
      ? this.props.postName.split('-').join(' ')
      : this.props.match.params.post.split('-').join(' '),
    category: 'miscellaneous',
  }
  updateValue = (value) => {
    const post = this.state.post
    post.text = value
    this.props.AdminAPI.post(`/posts/${this.state.post.index}`, post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    this.props.setChangesMade(true)
  }
  getPost = async (postTitle) => {
    const post = await this.props.AdminAPI.get(`/posts/${postTitle}`).then(
      (r) => r.data,
    )

    if (typeof post === 'object') {
      this.setState({ post, category: post.category })
    } else {
      console.log(`post not found`)
      this.setState({ title: 'Post not found' })
    }
    return post
  }
  componentDidMount = async () => {
    await this.getPost(this.state.link)
  }
  handleTitleChange = (e) => {
    this.props.setChangesMade(true)
    const title = e.target.value
    const post = this.state.post
    post.title = title
    this.setState({ title, post, titleRenamed: true })
    this.props.AdminAPI.post(`/posts/${this.state.post.index}`, post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  getPostUrl = () => this.state.title.split(' ').join('-')
  render = () => (
    <Page noHeading isPreview>
      <div className='top-heading admin-post-heading'>
        <div className='heading'>
          <Textfit mode='single' max={50}>
            <input
              type='text'
              className='title-input'
              value={this.state.title}
              onChange={(e) => this.handleTitleChange(e)}
            />
          </Textfit>
        </div>
      </div>

      {this.state.titleRenamed && (
        <div className='title-renamed-warning'>
          WARNING: Title has been renamed. This page URL is based on the title.
          Refreshing this page will result in a 404 error.{' '}
          <Link to={`../${this.getPostUrl()}`} className='link'>
            Click here
          </Link>{' '}
          to navigate to the new page now.
        </div>
      )}
      {this.state.post ? (
        <section className='text'>
          {/*<div className='category'>category: {this.state.category}</div>*/}
          <TextEditor
            text={this.state.post.text}
            updateValue={(value) => this.updateValue(value)}
          />
        </section>
      ) : (
        <div />
      )}
    </Page>
  )
}
