import React from 'react'
import PostRenderer from 'components/jsx/PostRenderer'
import TextEditor from 'components/jsx/admin/editor/TextEditor'

export default class BlockEditor extends React.Component {
  render = () => (
    <div id='block-editor'>
      <div className='left'>
        <h1 style={{ textAlign: 'center' }}>Edit:</h1>
        {this.props.blocks ? (
          <section className='content'>
            <TextEditor
              blocks={this.props.blocks}
              updateBlocks={(content) => this.props.updateBlocks(content)}
              AdminAPI={this.props.AdminAPI}
            />
          </section>
        ) : (
          <div>loading...</div>
        )}
      </div>
      <div className='right'>
        <h1 style={{ textAlign: 'center' }}>Preview:</h1>
        {this.props.beforePostRenderer}
        <PostRenderer blocks={this.props.blocks} />
        {this.props.afterPostRenderer}
      </div>
    </div>
  )
}
