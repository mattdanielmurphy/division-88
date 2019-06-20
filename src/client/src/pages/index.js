import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import Video from '../components/Video'

const Wrapper = (props) => (
	<div style={props.style} className={`wrapper ${props.className}`}>
		{props.children}
	</div>
)

export default () => (
	<Container style={{ padding: '0' }} fluid id="index" className="main-container">
		<Row>
			<Col xs={12}>
				<Wrapper>
					<img src="/images/neon-bambi.jpg" alt="" />
				</Wrapper>
			</Col>
		</Row>
		<Row>
			<Col xs={12}>
				<div id="banner" className="bottom-banner">
					<h3>Neon Bambi</h3>
					<h4>New Album available</h4>
				</div>
			</Col>
		</Row>
		<Row>
			<Col xs={5} md={4} className="just-text">
				<Wrapper style={{ backgroundColor: '#333' }} className="text">
					<div>
						<h3 className="big">J.E.W</h3>
						<h4>New sample pack by Billy Wild</h4>
					</div>
				</Wrapper>
			</Col>
			<Col xs={7} md={8}>
				<Wrapper>
					<Video imgSrc="/images/skoop.jpg" videoSrc="https://www.youtube.com/watch?v=aUdfLZJkqFs" />
				</Wrapper>
			</Col>
		</Row>
	</Container>
)
