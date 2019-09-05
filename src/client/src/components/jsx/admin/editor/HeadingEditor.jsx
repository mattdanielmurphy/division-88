import React from 'react'

import ImageUploader from './ImageUploader'

export default class HeadingEditor extends React.Component {
  state = {}
  getHeading = async () =>
    await this.props.AdminAPI.get(`/page-info/${this.props.pageName}`).then(
      (r) => r.data,
    )
  handleSubmit = async (e) => {
    if (e) e.preventDefault()
    // just submit this modified value

    this.props.AdminAPI.post(
      `/page-info/${this.props.pageName}`,
      this.state.heading,
    ).then((r) => {
      this.setState({ headingFromDatabase: this.state.heading })
      this.props.updateHeading(this.state.heading)
    })
  }
  updateHeadingValue = async (path, value) => {
    return await new Promise((resolve) => {
      const heading = Object.assign({}, this.state.heading)
      function set(path, value) {
        let schema = heading // a moving reference to internal objects within obj
        let pList = path.split('.')
        let length = pList.length
        for (let i = 0; i < length - 1; i++) {
          let elem = pList[i]
          if (!schema[elem]) schema[elem] = {}
          schema = schema[elem]
        }

        schema[pList[length - 1]] = value
      }
      set(path, value)
      this.setState({ heading }, () => resolve())
    })
  }
  handleInputChange = async ({ e, path, value }) => {
    if (e) {
      path = e.target.id
      value = e.target.value
    }

    await this.updateHeadingValue(path, value)
    this.handleSubmit()
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
  componentDidMount = async () => {
    const heading = await this.getHeading()
    this.setState({ heading })
    window.onbeforeunload = null
    this.setKeyBindings()
  }
  render = () =>
    this.state.heading ? (
      <div id='property-editor'>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className='property-input'>
            <label>heading background image</label>
            <ImageUploader
              AdminAPI={this.props.AdminAPI}
              image={this.state.heading.headingBackgroundImage}
              setImage={(url) =>
                this.handleInputChange({
                  path: 'headingBackgroundImage',
                  value: url,
                })
              }
            />
          </div>
          {this.state.error}
        </form>
      </div>
    ) : (
      <div />
    )
}
