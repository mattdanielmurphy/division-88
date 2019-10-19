import React, {useEffect, useState} from 'react';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import {ClickAwayListener} from "@material-ui/core";
import TextBlock from './TinyMCEEditor'
import ImageUploader from 'components/jsx/admin/editor/ImageUploader'
import {FaTrash} from 'react-icons/fa'

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
    this.setState({youtubeId, videoSrc, imgSrc}, () => this.props.updateContent(this.state))
  }
  handleImgSrcChange = (imgSrc) => {
    if (!imgSrc) this.handleVideoSrcChange(this.state.videoSrc)
    this.setState({imgSrc}, () => this.props.updateContent(this.state))
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
          noPreview
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
  handleInputChange = async ({e, path, value}) => {
    if (e) {
      path = e.target.id
      value = e.target.value
    }
    this.setState({[path]: value}, () => this.props.updateContent(this.state))
  }
  render = () => (
    <div className="content-block-image">
      <h2>Photo</h2>
      <div className="property-input">
        <label>image url</label>
        <ImageUploader
          AdminAPI={this.props.AdminAPI}
          image={this.state.src}
          noPreview
          setImage={(url) => this.handleInputChange({path: 'src', value: url})}
        />
      </div>
      <div className="property-input">
        <label>alt text (short description of image for accessibility purposes):</label>
        <input
          id="altText"
          onChange={(e) => this.handleInputChange({e})}
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
  handleInputChange = async ({e, path, value}) => {
    if (e) {
      path = e.target.id
      value = e.target.value
    }
    this.setState({[path]: value}, () => this.props.updateContent(this.state))
  }
  render = () => (
    <div className="content-block-soundcloud">
      <h2>Soundcloud Player</h2>
      <div className="property-input">
        <label>song URL</label>
        <input
          id="src"
          onChange={(e) => this.handleInputChange({e})}
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
      this.setState({dropboxUrl, directDropboxDownloadLink}, () => this.props.updateContent(this.state))
    } else {
      this.setState({[path]: value}, () => this.props.updateContent(this.state))
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

const BlockContainer = ({index, deleteBlock, content, updateContent, type, chooseType, AdminAPI}) => {
  if (!content) content = {}
  return (
    <div>
      <div className="content-block-content">
        {type === 'text' ? (
          <TextBlock
            text={content.text}
            updateContent={(content) => updateContent(content)}
            index={index}
          />
        ) : type === 'photo' ? (
          <PhotoBlock
            src={content.src}
            altText={content.altText}
            AdminAPI={AdminAPI}
            updateContent={(content) => updateContent(content)}
          />
        ) : type === 'video' ? (
          <VideoBlock
            videoSrc={content.videoSrc}
            imgSrc={content.imgSrc}
            AdminAPI={AdminAPI}
            updateContent={(content) => updateContent(content)}
          />
        ) : type === 'soundcloud' ? (
          <SoundCloudBlock
            src={content.src}
            AdminAPI={AdminAPI}
            updateContent={(content) => updateContent(content)}
          />
        ) : type === 'downloadLink' ? (
          <DownloadLinkBlock
            dropboxUrl={content.dropboxUrl}
            AdminAPI={AdminAPI}
            updateContent={(content) => updateContent(content)}
          />
        ) : (
          <BlockChooser chooseType={(type) => chooseType(type)}/>
        )}
      </div>
      <button onClick={() => deleteBlock()} className="trash-button">
        <FaTrash/>
      </button>
    </div>
  )
}

const Editor = ({block, updateBlock, deleteBlock, AdminAPI}) => {
  const chooseType = (type) => {
    console.log('choose type', type)
    block.type = type
    if (type === 'text') block.content = {text: ''}
    else block.content = {}
    console.log(block)
    updateBlock(block)
  }

  const updateContent = (content) => {
    block.content = content
    updateBlock(block)
  }
  return block ? (
    <BlockContainer
      AdminAPI={AdminAPI}
      deleteBlock={deleteBlock}
      chooseType={(type) => chooseType(type)}
      content={block.content}
      updateContent={(content) => updateContent(content)}
      type={block.type}
    />
  ) : (
    <div>loading...</div>
  )
}


export default function BlockEditorModal({handleCloseModal, clickEventTarget, block, updateBlock, deleteBlock, AdminAPI}) {
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    setAnchorEl(clickEventTarget)
  }, [clickEventTarget])

  const open = Boolean(anchorEl);
  const id = open ? 'transitions-popper' : undefined;

  return (
    <ClickAwayListener onClickAway={handleCloseModal}>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({TransitionProps}) => (
          <Fade {...TransitionProps} timeout={350}>
            <div className='block-editor-modal'>
              <Editor block={block} updateBlock={updateBlock} AdminAPI={AdminAPI} deleteBlock={deleteBlock}/>
            </div>
          </Fade>
        )}
      </Popper>
    </ClickAwayListener>
  );
}