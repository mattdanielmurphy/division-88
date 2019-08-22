import React from 'react'
import TextEditor from 'components/jsx/admin/editor/TextEditor'
import Page from '../components/jsx/Page'
import API from 'components/js/api'
import { Link, Redirect } from 'react-router-dom'
import { Textfit } from 'react-textfit-17'
import HeadingEditor from 'components/jsx/admin/editor/HeadingEditor'

export default class extends React.Component {
  state = {}
  updateValue = (value) => {
    this.props.AdminAPI.post('/about', { text: value })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  getAboutText = async () => {
    const text = await API.get('/about/text').then((r) => r.data)
    this.setState({ text })
  }
  componentDidMount() {
    this.getAboutText()
  }
  render = () => (
    <Page
      heading='About'
      id='admin-about'
      headingBackgroundImage={this.props.headingBackgroundImage}
      headingSelected={this.props.headingSelected}
    >
      {this.state.text ? (
        <section className='text'>
          <TextEditor
            text={this.state.text}
            updateValue={(value) => this.updateValue(value)}
          />
        </section>
      ) : (
        <div>loading...</div>
      )}
      <HeadingEditor
        AdminAPI={this.props.AdminAPI}
        pageName='about'
        selectedHeading='about'
        updateHeading={(heading) => this.props.updateHeading(heading)}
      />
    </Page>
  )
}
