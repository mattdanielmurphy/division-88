import React from 'react'
import Page from '../components/jsx/Page'

export default () => (
  <Page id='404' heading='404: Page not found' headingBackgroundImage={false}>
    <section className='text'>
      <h2>
        A page does not exist at this location. Check the URL and try again.
      </h2>
    </section>
  </Page>
)
