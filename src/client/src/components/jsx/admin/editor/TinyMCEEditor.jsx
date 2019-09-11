import 'tinymce'

import React from 'react'
import { Editor } from '@tinymce/tinymce-react'

export default class extends React.Component {
  state = {
    text: this.props.text,
  }
  handleEditorChange = (e, editor) => {
    const content = editor.getContent()
    if (content !== this.state.text) {
      this.setState({ text: content })
      this.props.updateContent({ text: content })
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.index !== prevProps.index) {
      const text = this.state.text
      this.setState({ text: undefined }, () => this.setState({ text }))
    }
  }

  render = () => {
    return this.state.text !== undefined ? (
      <Editor
        initialValue={this.props.text}
        init={{
          height: 300,
          plugins: 'link code',
          toolbar:
            'undo redo | bold italic | alignleft aligncenter alignright | removeformat | link insert | blockquote | indent outdent',
        }}
        onKeyUp={(e, editor) => this.handleEditorChange(e, editor)}
        onChange={(e, editor) => this.handleEditorChange(e, editor)}
      />
    ) : (
      <div>loading...</div>
    )
  }
}
