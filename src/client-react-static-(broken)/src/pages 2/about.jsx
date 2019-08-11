import React from 'react'
import Page from '../components/jsx/Page'
import AboutTextEditor from '../components/jsx/AboutTextEditor'

export default (props) => (
	<Page
		headingBackgroundImage={props.headingBackgroundImage}
		headingSelected={props.headingSelected}
		isPreview={props.isPreview}
		selectHeading={() => props.selectHeading()}
	>
		<section className="text">
			<AboutTextEditor text={props.aboutText} />
		</section>
	</Page>
)
