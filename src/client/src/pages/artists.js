import React from 'react'
import { Link } from 'components/Router'
import { Container, Row, Col } from 'react-grid-system'
import artists from 'components/artists'

export default () => (
	<Container style={{ padding: '0' }} fluid id="artists" className="main-container">
		<h1>Artists</h1>
		{artists.map((artist) => (
			<div className="artist-row">
				{/* <Row>
					<Col xs={12} sm={4}>
						
					</Col>
				</Row> */}
				<Row>
					<Col xs={12} sm={4}>
						<div>
							<img src={artist.imgSrc} alt="" />
							<div className="artist-name">
								<Link to={`/artist/${artist.page}`}>
									<h2>{artist.name}</h2>
								</Link>
							</div>
						</div>
					</Col>
					<Col xs={12} sm={8} className="artist-bio">
						<p>{artist.bio}</p>
					</Col>
				</Row>
			</div>
		))}
	</Container>
)
