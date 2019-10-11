import React from 'react'
import TextBlock from './TinyMCEEditor'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import uuid from 'short-uuid'
import ImageUploader from 'components/jsx/admin/editor/ImageUploader'
import { FaTrash } from 'react-icons/fa'

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list)
	const [ removed ] = result.splice(startIndex, 1)
	result.splice(endIndex, 0, removed)

	return result
}

const grid = 20

const getItemStyle = (isDragging, draggableStyle) => ({
	// some basic styles to make the blocks look a bit nicer
	userSelect: 'none',
	padding: grid,
	margin: `0 0 ${grid / 2}px 0`,

	// change background colour if dragging
	background: isDragging ? '#333' : '#222',

	// styles we need to apply on draggables
	...draggableStyle
})

const getListStyle = (isDraggingOver) => ({
	background: isDraggingOver ? '#111' : 'none',
	padding: grid
})

class VideoBlock extends React.Component {
	state = {
		videoSrc: this.props.videoSrc || '',
		youtubeId: this.props.youtubeId || '',
		imgSrc: this.props.imgSrc || ''
	}
	getYoutubeId = (videoSrc) => {
		const matches = /\?v=([^?]*)/.exec(videoSrc)
		return matches ? matches[1] : ''
	}
	getYoutubeThumbnail = (videoId) => `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`
	handleVideoSrcChange = (videoSrc) => {
		const youtubeId = this.getYoutubeId(videoSrc)
		const imgSrc = this.getYoutubeThumbnail(youtubeId)
		this.setState({ youtubeId, videoSrc, imgSrc }, () => this.props.updateContent(this.state))
	}
	handleImgSrcChange = (imgSrc) => {
		if (!imgSrc) this.handleVideoSrcChange(this.state.videoSrc)
		this.setState({ imgSrc }, () => this.props.updateContent(this.state))
	}
	render = () => (
		<div>
			<h2>Video</h2>
			<div className="property-input">
				<label>video URL:</label>
				<input
					onChange={(e) => this.handleVideoSrcChange(e.target.value)}
					type="text"
					value={this.state.videoSrc}
					placeholder="example: https://www.youtube.com/watch?v=zyG8Vlw5aAw"
				/>
			</div>
			<div className="property-input">
				<label>video placeholder image:</label>
				<ImageUploader
					AdminAPI={this.props.AdminAPI}
					image={this.state.imgSrc}
					setImage={(url) => this.handleImgSrcChange(url)}
				/>
			</div>
		</div>
	)
}

class PhotoBlock extends React.Component {
	state = {
		src: this.props.src || '',
		altText: this.props.altText || ''
	}
	handleInputChange = async ({ e, path, value }) => {
		if (e) {
			path = e.target.id
			value = e.target.value
		}
		this.setState({ [path]: value }, () => this.props.updateContent(this.state))
	}
	render = () => (
		<div className="content-block-image">
			<h2>Photo</h2>
			<div className="property-input">
				<label>image url</label>
				<ImageUploader
					AdminAPI={this.props.AdminAPI}
					image={this.state.src}
					setImage={(url) => this.handleInputChange({ path: 'src', value: url })}
				/>
			</div>
			<div className="property-input">
				<label>alt text (short description of image for accessibility purposes):</label>
				<input
					id="altText"
					onChange={(e) => this.handleInputChange({ e })}
					type="text"
					value={this.state.altText}
					placeholder="headshot of Billy Wild"
				/>
			</div>
		</div>
	)
}

class SoundCloudBlock extends React.Component {
	state = {
		src: this.props.src || ''
	}
	handleInputChange = async ({ e, path, value }) => {
		if (e) {
			path = e.target.id
			value = e.target.value
		}
		this.setState({ [path]: value }, () => this.props.updateContent(this.state))
	}
	render = () => (
		<div className="content-block-soundcloud">
			<h2>Soundcloud Player</h2>
			<div className="property-input">
				<label>song URL</label>
				<input
					id="src"
					onChange={(e) => this.handleInputChange({ e })}
					type="text"
					value={this.state.src}
					placeholder="https://soundcloud.com/rojoaquim/touchdown"
				/>
			</div>
		</div>
	)
}

class DownloadLinkBlock extends React.Component {
	state = {
		dropboxUrl: this.props.dropboxUrl || ''
	}
	getDropboxDirectDownloadLink = (url) =>
		url.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace('dl=0', 'dl=1')
	handleInputChange = (path, value) => {
		if (path === 'dropboxUrl') {
			const dropboxUrl = value
			const directDropboxDownloadLink = this.getDropboxDirectDownloadLink(dropboxUrl)
			this.setState({ dropboxUrl, directDropboxDownloadLink }, () => this.props.updateContent(this.state))
		} else {
			this.setState({ [path]: value }, () => this.props.updateContent(this.state))
		}
	}
	render = () => (
		<div className="content-block-download">
			<h2>Download Link</h2>
			<div className="property-input">
				<label>Dropbox file URL:</label>
				<input
					onChange={(e) => this.handleInputChange('dropboxUrl', e.target.value)}
					type="text"
					value={this.state.dropboxUrl}
					placeholder="https://www.dropbox.com/s/c7rc3ynobkzskt2/Realistic%20Concertmate.zip?dl=0"
				/>
				<label>Download button text:</label>
				<input
					onChange={(e) => this.handleInputChange('downloadButtonText', e.target.value)}
					type="text"
					value={this.state.downloadButtonText}
					placeholder="Download"
				/>
			</div>
		</div>
	)
}

class BlockChooser extends React.Component {
	render = () => (
		<div>
			<h3>Choose type</h3>
			<div className="button-group">
				<button onClick={() => this.props.chooseType('text')}>text</button>
				<button onClick={() => this.props.chooseType('photo')}>photo</button>
				<button onClick={() => this.props.chooseType('video')}>video</button>
				<button onClick={() => this.props.chooseType('soundcloud')}>Soundcloud</button>
				<button onClick={() => this.props.chooseType('downloadLink')}>download link</button>
			</div>
		</div>
	)
}

class BlockContainer extends React.Component {
	render = () => (
		<div className="content-block">
			<div className="block-options button-group">
				<button className="add-block-button" onClick={() => this.props.addBlockAbove()}>
					Add block above
				</button>
				<button className="move-block-button" onClick={() => this.props.moveBlockUp()}>
					Move up
				</button>
				<button className="move-block-button" onClick={() => this.props.moveBlockDown()}>
					Move down
				</button>
				<button onClick={() => this.props.deleteBlock()} className="trash-button">
					<FaTrash />
				</button>
			</div>
			<div className="content-block-content">
				{this.props.type === 'text' ? (
					<TextBlock
						text={this.props.content.text}
						updateContent={(content) => this.props.updateContent(content)}
						index={this.props.index}
					/>
				) : this.props.type === 'photo' ? (
					<PhotoBlock
						src={this.props.content.src}
						altText={this.props.content.altText}
						AdminAPI={this.props.AdminAPI}
						updateContent={(content) => this.props.updateContent(content)}
					/>
				) : this.props.type === 'video' ? (
					<VideoBlock
						videoSrc={this.props.content.videoSrc}
						imgSrc={this.props.content.imgSrc}
						AdminAPI={this.props.AdminAPI}
						updateContent={(content) => this.props.updateContent(content)}
					/>
				) : this.props.type === 'soundcloud' ? (
					<SoundCloudBlock
						src={this.props.content.src}
						AdminAPI={this.props.AdminAPI}
						updateContent={(content) => this.props.updateContent(content)}
					/>
				) : this.props.type === 'downloadLink' ? (
					<DownloadLinkBlock
						dropboxUrl={this.props.content.dropboxUrl}
						AdminAPI={this.props.AdminAPI}
						updateContent={(content) => this.props.updateContent(content)}
					/>
				) : (
					<BlockChooser chooseType={(type) => this.props.chooseType(type)} />
				)}
			</div>
			<button className="add-block-button" onClick={() => this.props.addBlockBelow()}>
				Add block below
			</button>
		</div>
	)
}

export default class TextEditor extends React.Component {
	state = {
		blocks: this.props.blocks
	}
	chooseType = (id, type) => {
		console.log('choose type', id, type)
		const blocks = this.state.blocks
		const blockIndex = blocks.findIndex((block) => block.id === id)
		const block = blocks[blockIndex]

		block.type = type
		if (type === 'text') block.content = { text: '' }
		else block.content = {}

		blocks[blockIndex] = block
		console.log('new blocks', blocks)
		this.setState({ blocks })
		this.props.updateBlocks(blocks)
	}
	handleEditorChange = (e, editor) => {
		const content = editor.getContent()
		if (content !== this.props.text) this.props.updateValue(content)
	}

	spliceBlock(index, numBlocksToDelete, newBlock) {
		let blocks = this.state.blocks
		if (newBlock) blocks = [ ...blocks.slice(0, index), newBlock, ...blocks.slice(index + numBlocksToDelete) ]
		else blocks = [ ...blocks.slice(0, index), ...blocks.slice(index + numBlocksToDelete) ]
		this.setState({ blocks })
		this.props.updateBlocks(blocks)
	}

	addBlock = (index) => {
		const newBlock = {
			id: uuid.generate()
		}
		this.spliceBlock(index, 0, newBlock)
	}
	addBlockAbove = (index) => this.addBlock(index)
	addBlockBelow = (index) => this.addBlock(index + 1)
	addFirstBlock = () => {
		this.addBlockAbove(0)
		this.setState({ noBlocks: false })
	}

	moveBlock = (oldIndex, newIndex) => {
		const oldBlock = this.state.blocks[oldIndex]
		const newBlock = this.state.blocks[newIndex]
		if (newBlock) {
			let blocks = this.state.blocks
			blocks[oldIndex] = newBlock
			blocks[newIndex] = oldBlock
			this.setState({ blocks })
			this.props.updateBlocks(blocks)
		}
	}
	moveBlockUp = (index) => this.moveBlock(index, index - 1)
	moveBlockDown = (index) => this.moveBlock(index, index + 1)

	deleteBlock = (index) => {
		const deletingLastBlock = this.state.blocks.reduce((count, block) => (block ? count + 1 : count), 0) === 1
		if (deletingLastBlock) this.setState({ noBlocks: true })
		this.spliceBlock(index, 1)
	}
	onDragEnd = (result) => {
		// dropped outside the list
		if (!result.destination) {
			return
		}

		const blocks = reorder(this.state.blocks, result.source.index, result.destination.index)

		this.setState({ blocks })
		this.props.updateBlocks(blocks)
	}
	updateContent = (id, content) => {
		const blocks = this.state.blocks
		console.log('update content id', id)
		const index = this.state.blocks.findIndex((block) => block.id === id)
		blocks[index].content = content
		this.setState({ blocks })
		this.props.updateBlocks(blocks)
	}
	render = () =>
		this.state.blocks ? (
			<div id="text-editor">
				<DragDropContext onDragEnd={(result) => this.onDragEnd(result)}>
					<Droppable droppableId="droppable">
						{(provided, snapshot) => (
							<div
								{...provided.droppableProps}
								ref={provided.innerRef}
								style={getListStyle(snapshot.isDraggingOver)}
							>
								{this.state.noBlocks ? (
									<div>
										<button onClick={() => this.addFirstBlock()}>Add block</button>
									</div>
								) : (
									this.state.blocks.map(
										(block, index) =>
											block ? (
												<Draggable key={block.id} draggableId={block.id} index={index}>
													{(provided, snapshot) => (
														<div
															ref={provided.innerRef}
															{...provided.draggableProps}
															style={getItemStyle(
																snapshot.isDragging,
																provided.draggableProps.style
															)}
															className="content-block"
														>
															<div
																{...provided.dragHandleProps}
																className="drag-handle"
															/>
															<BlockContainer
																moveBlockUp={() => this.moveBlockUp(index)}
																moveBlockDown={() => this.moveBlockDown(index)}
																AdminAPI={this.props.AdminAPI}
																deleteBlock={() => this.deleteBlock(index)}
																chooseType={(type) => this.chooseType(block.id, type)}
																key={block.id}
																index={index}
																addBlockAbove={() => this.addBlockAbove(index)}
																addBlockBelow={() => this.addBlockBelow(index)}
																content={block.content}
																updateContent={(content) =>
																	this.updateContent(block.id, content)}
																type={block.type}
															/>
														</div>
													)}
												</Draggable>
											) : (
												undefined
											)
									)
								)}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</div>
		) : (
			<div>loading...</div>
		)
}
