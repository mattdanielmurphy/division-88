import React from 'react'
import Video from 'components/jsx/Video'
import SoundCloudWidget from 'react-simple-soundcloud-widget'

export default class PostRenderer extends React.Component {
	render = () =>
		this.props.blocks ? (
			<section id="content-blocks-container">
				{this.props.blocks.map(
					(block, index) =>
						!block.content ? (
							<div>this block has no content</div>
						) : block.type === 'text' ? (
							<div key={index} dangerouslySetInnerHTML={{ __html: block.content.text }} />
						) : block.type === 'photo' ? (
							<div key={index} className="content-block-photo">
								<img src={block.content.src} alt={block.content.altText} />
							</div>
						) : block.type === 'soundcloud' ? (
							<div key={index} className="content-block-soundcloud">
								<SoundCloudWidget url={block.content.src} />
							</div>
						) : block.type === 'downloadLink' ? (
							<div key={index} className="content-block-download-link">
								<a href={block.content.directDropboxDownloadLink} className="button big">
									{block.content.downloadButtonText || 'Download'}
								</a>
							</div>
						) : block.type === 'video' ? (
							<div
								key={index}
								className="content-block-video"
								ref={(vidCont) => (this.videoContainer = vidCont)}
							>
								<Video youtubeId={block.content.youtubeId} imgSrc={block.content.imgSrc} />
							</div>
						) : (
							<div />
						)
				)}
			</section>
		) : (
			<div>Loading...</div>
		)
}
