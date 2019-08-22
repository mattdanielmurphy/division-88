import tinymce from 'tinymce'

import React from 'react'
import { Editor } from '@tinymce/tinymce-react'

export default class extends React.Component {
  handleEditorChange = (e, editor) => {
    const content = editor.getContent()
    if (content !== this.props.text) this.props.updateValue(content)
  }
  render = () => {
    return this.props.text ? (
      <Editor
        initialValue={this.props.text}
        init={{
          height: 600,
          plugins: 'link image code',
          toolbar:
            'undo redo | bold italic | alignleft aligncenter alignright | code',
        }}
        onKeyUp={(e, editor) => this.handleEditorChange(e, editor)}
        onChange={(e, editor) => this.handleEditorChange(e, editor)}
      />
    ) : (
      <div>loading...</div>
    )
  }
}
