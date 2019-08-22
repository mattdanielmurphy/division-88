import React from 'react'
import Page from '../components/jsx/Page'
import TextEditor from 'components/jsx/admin/editor/TextEditor'
import API from 'components/js/api'

export default class extends React.Component {
  state = {}
  updateValue = (value) => {
    this.props.AdminAPI.post('/about', {
      text: JSON.stringify(value.toJSON()),
    })
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
      headingBackgroundImage={this.props.headingBackgroundImage}
      headingSelected={this.props.headingSelected}
      selectHeading={() => this.props.selectHeading()}
    >
      {this.state.text ? (
        <section className='text'>
          <div dangerouslySetInnerHTML={{ __html: this.state.text }} />
        </section>
      ) : (
        <div>Loading...</div>
      )}
    </Page>
  )
}
