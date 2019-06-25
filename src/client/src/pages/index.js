import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import Video from '../components/Video'
import * as log from 'loglevel'
log.warn('ultra-compatible')

const Wrapper = (props) => (
	<div style={props.style} className={`wrapper ${props.className || ''}`}>
		{props.children}
	</div>
)

// export default () => (
// 	<Container style={{ padding: '0' }} fluid id="index" className="main-container">
// 		<Row>
// 			<Col xs={12}>
// 				<Wrapper>
// 					<img src="https://placeimg.com/800/300/any" alt="" />
// 				</Wrapper>
// 			</Col>
// 		</Row>
// 		<Row>
// 			<Col xs={12}>
// 				<div id="banner" className="bottom-banner">
// 					<h3>Neon Bambi</h3>
// 					<h4>New Album available</h4>
// 				</div>
// 			</Col>
// 		</Row>
// 		<Row>
// 			<Col xs={4} md={4} className="just-text">
// 				<Wrapper style={{ backgroundColor: '#333' }} className="text">
// 					<div />
// 				</Wrapper>
// 			</Col>
// 			<Col xs={8} md={8}>
// 				<Video imgSrc="https://placeimg.com/600/200" videoSrc="https://www.youtube.com/watch?v=aUdfLZJkqFs" />
// 			</Col>
// 		</Row>
// 		<Row>
// 			<Col xs={5} className="just-text">
// 				<Wrapper style={{ backgroundColor: '#666' }} className="text">
// 					<div />
// 				</Wrapper>
// 			</Col>
// 			<Col xs={7}>
// 				<img src="https://placeimg.com/500/200" alt="" />
// 			</Col>
// 		</Row>
// 	</Container>
// )
import { Responsive, WidthProvider } from 'react-grid-layout'
const ResponsiveGridLayout = WidthProvider(Responsive)

export default class MyFirstGrid extends React.Component {
	render() {
		// layout is an array of objects, see the demo for more complete usage
		const layouts = {
			lg: [
				{ i: 'a', x: 0, y: 0, w: 1, h: 2 },
				{ i: 'b', x: 1, y: 0, w: 3, h: 2 },
				{ i: 'c', x: 4, y: 0, w: 1, h: 2 }
			],
			md: [
				{ i: 'a', x: 0, y: 0, w: 1, h: 2 },
				{ i: 'b', x: 3, y: 1, w: 3, h: 2 },
				{ i: 'c', x: 4, y: 2, w: 1, h: 2 }
			]
		}
		return (
			<ResponsiveGridLayout
				className="layout"
				layouts={layouts}
				cols={12}
				rowHeight={30}
				width={1200}
				breakpoints={{ lg: 1200, md: 996 }}
				cols={{ lg: 12, md: 12 }}
			>
				<div key="a">a</div>
				<div key="b">b</div>
				<div key="c">c</div>
			</ResponsiveGridLayout>
		)
	}
}
