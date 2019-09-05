import React from 'react'
import Page from '../components/jsx/Page'

export default class extends React.Component {
  state = {}

  publish = async () => {
    const result = await this.props.AdminAPI.get('/publish')
    if (result.data.updated === true) {
      window.alert(
        'Successfully published. You may need to reload the browser, but probably not.',
      )
      this.props.setChangesMade(false)
    } else
      window.alert(
        'Publish failed. The server might be down... try again in a few minutes.',
      )
  }

  revert = async () => {
    const result = await this.props.AdminAPI.get('/reset')
    if (result.data.updated === true) {
      window.alert(
        'Successfully reset. You may need to reload the browser, but probably not.',
      )
      this.props.setChangesMade(false)
    } else
      window.alert(
        'Reset failed. The server might be down... try again in a few minutes.',
      )
  }
  handleClickPublish = async () => {
    const confirmed = await window.confirm(
      "You sure? There's no going back (yet) after you do this. All your changes will go live immediately.",
    )
    if (confirmed) this.publish()
  }
  handleClickRevert = async () => {
    const confirmed = await window.confirm(
      'You sure? You will lose all your changes forever, reverting to the publicly available version of the site.',
    )
    if (confirmed) this.revert()
  }
  render = () => (
    <Page heading='Publish' id='publish'>
      <section className='text'>
        <button onClick={() => this.handleClickPublish()}>
          Publish changes
        </button>
        <button onClick={() => this.handleClickRevert()}>
          Revert changes to currently deployed version
        </button>
      </section>
    </Page>
  )
}
