import React from 'react'
import Page from '../components/jsx/Page'
import {Link} from 'react-router-dom'
import {Textfit} from 'react-textfit-17'
import BlockEditor from 'components/jsx/admin/editor/BlockEditor'

class AdminPostHeading extends React.Component {
  render = () => (
    <div>
      <div className='top-heading admin-post-heading'>
        <div className='heading'>
          <Textfit mode='single' max={50}>
            <input
              type='text'
              className='title-input'
              value={this.props.title}
              onChange={e => this.props.handleTitleChange(e)}
            />
          </Textfit>
        </div>
      </div>

      {this.props.titleRenamed && (
        <div className='title-renamed-warning'>
          WARNING: Title has been renamed. This page URL is based on the title.
          Refreshing this page will result in a 404 error.{' '}
          <Link to={`../${this.props.getPostUrl()}`} className='link'>
            Click here
          </Link>{' '}
          to navigate to the new page now.
        </div>
      )}
    </div>
  )
}

export default class extends React.Component {
  state = {
    link: this.props.postName,
    title: this.props.postName
      ? this.props.postName.split('-').join(' ')
      : this.props.match.params.post.split('-').join(' '),
    category: 'miscellaneous',
  }
  updateBlocks = async blocks => {
    const post = this.state.post
    post.blocks = blocks
    await this.props.AdminAPI.post('/posts', post)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    this.props.setChangesMade(true)
    return true
  }
  updateLayouts = async layouts => {
    console.log('update layouts', layouts)
    const post = this.state.post
    post.layouts = layouts
    await this.props.AdminAPI.post('/posts', post)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    this.props.setChangesMade(true)
    return true
  }
  getPost = async postTitle => {
    const post = await this.props.AdminAPI.get(`/posts/${postTitle}`).then(
      r => r.data,
    )

    if (typeof post === 'object') this.setState({post})
    else this.setState({title: 'Post not found'})
    return post
  }
  componentDidMount = async () => {
    this.getPost(this.state.link)
    console.log(this.state.post)
  }
  handleTitleChange = e => {
    this.props.setChangesMade(true)
    const title = e.target.value
    const post = this.state.post
    post.title = title
    this.setState({title, post, titleRenamed: true})
    this.props.AdminAPI.post(`/posts`, post)
      .then(res => {
        console.log('res', res)
      })
      .catch(err => console.log(err))
  }
  getPostUrl = () => this.state.title.split(' ').join('-')
  render = () => (
    <div>
      <Page noHeading isPreview id='admin-post'>
        <AdminPostHeading
          titleRenamed={this.state.titleRenamed}
          getPostUrl={this.getPostUrl}
          title={this.state.title}
          handleTitleChange={e => this.handleTitleChange(e)}
        />

        {this.state.post ? (
          <BlockEditor
            blocks={this.state.post.blocks}
            databaseLayouts={this.state.post.layouts}
            updateBlocks={async content => await this.updateBlocks(content)}
            updateLayouts={async content => await this.updateLayouts(content)}
            AdminAPI={this.props.AdminAPI}
            view={this.props.view}
            pageDimensions={this.props.pageDimensions}
          />
        ) : (
          <div>Loading</div>
        )}
      </Page>
    </div>
  )
}
// {/*  <Page noHeading isPreview>*/}
//
// {/*    {this.state.post && this.state.post.blocks ? (*/}
// {/*      <section className='text'>*/}
// {/*        /!*<div className='category'>category: {this.state.category}</div>*!/*/}
// {/*        <TextEditor*/}
// {/*          blocks={this.state.post.blocks}*/}
// {/*          updateBlocks={(content) => this.updateBlocks(content)}*/}
// {/*        />*/}
// {/*      </section>*/}
// {/*    ) : (*/}
// {/*      <div />*/}
// {/*    )}*/}
// {/*  </Page>*/}
