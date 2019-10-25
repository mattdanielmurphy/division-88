import React, {useState, useEffect} from 'react'
import {Responsive, WidthProvider} from 'react-grid-layout'
import Video from 'components/jsx/Video'
import SoundCloudWidget from 'react-simple-soundcloud-widget'
import BlockEditorModal from "components/jsx/admin/editor/BlockEditorModal";
import * as uuid from "short-uuid";

const ResponsiveGridLayout = WidthProvider(Responsive)

const Block = ({content, type}) => {
  return (<div style={{pointerEvents: 'none', height: '100%'}}>
    {!content ? (
        <div className='content-block'> this block has no content </div>)
      : type === 'text' ? (
        <div className='content-block text' dangerouslySetInnerHTML={{__html: content.text}}/>
      ) : type === 'photo' ? (
        <div className='content-block photo'>
          <img onDragStart={(e) => e.preventDefault()} src={content.src} alt={content.altText}/>
        </div>
      ) : type === 'soundcloud' ? (
        <div className='content-block soundcloud'>
          <SoundCloudWidget url={content.src}/>
        </div>
      ) : type === 'downloadLink' ? (
        <div className='content-block download-link'>
          <a href={content.directDropboxDownloadLink} className='button big'>
            {content.downloadButtonText || 'Download'}
          </a>
        </div>
      ) : type === 'video' ? (
        <div className='content-block video'>
          <Video youtubeId={content.youtubeId} imgSrc={content.imgSrc}/>
        </div>
      ) : ''}
  </div>)
}

const BlockEditor = ({
                       blocks,
                       databaseLayouts,
                       updateLayouts,
                       updateBlocks,
                       AdminAPI,
                       view,
                       pageDimensions,
                     }) => {
  const [gridWidth, setGridWidth] = useState(pageDimensions[view].width)
  const [layouts, setLayouts] = useState(databaseLayouts)
  console.log('layouts', databaseLayouts)
  const [rowHeight, setRowHeight] = useState(30)
  const [selectedBlock, selectBlock] = useState(0)
  const [clickEventTarget, setClickEventTarget] = useState()
  const handleLayoutChange = (layout, layouts) => {
    setLayouts(layouts)
    updateLayouts(layouts)
  }

  const handleClick = (event, index) => {
    if (event.currentTarget === clickEventTarget) {
      selectBlock(null)
      setClickEventTarget(null)
    } else {
      selectBlock(index)
      setClickEventTarget(event.currentTarget)
    }
  }

  const updateBlock = (block) => {
    blocks[selectedBlock] = block
    updateBlocks(blocks)
  }

  const deleteBlock = () => {
    handleCloseModal()
    const block = blocks[selectedBlock]
    const index = blocks.findIndex(b => b.id === block.id)
    blocks = [...blocks.slice(0, index), ...blocks.slice(index + 1)]
    updateBlocks(blocks)
  }

  const addBlock = async () => {
    const id = uuid.generate()
    const newBlock = {id}
    blocks.push(newBlock)
    await updateBlocks(blocks)
    const block = document.querySelectorAll(`div[id=${id}]`)[0]
    block.click()
  }

  const handleCloseModal = () => setClickEventTarget(null)
  return (
    <div id='index'>
      <BlockEditorModal handleCloseModal={handleCloseModal}
                        clickEventTarget={clickEventTarget}
                        block={blocks[selectedBlock]}
                        updateBlock={updateBlock}
                        deleteBlock={deleteBlock}
                        AdminAPI={AdminAPI}
      />
      <ResponsiveGridLayout
        measureBeforeMount
        className='layout'
        layouts={layouts}
        rowHeight={rowHeight}
        width={gridWidth}
        nb
        verticalCompact={false}
        isDraggable={!!gridWidth}
        isResizable={!!gridWidth}
        breakpoints={{
          desktop: 1326,
          tablet: 750,
          mobile: 0,
        }}
        cols={{
          desktop: 24,
          tablet: 24,
          mobile: 24,
        }}
        rows={{
          desktop: 24,
          tablet: 24,
          mobile: 24,
        }}
        containerPadding={[0, 0]}
        margin={[10, 10]}
        onLayoutChange={(layout, layouts) => handleLayoutChange(layout, layouts)}
      >
        {blocks.map((block, index) => (
          <div className="block" key={index} id={block.id}
               onClick={(event) => handleClick(event, index)}>
            <Block {...block}/>
          </div>
        ))}
      </ResponsiveGridLayout>
      <div className="add-block-button-wrapper">
        <button className='add-block-button' onClick={addBlock}>Add block</button>
      </div>
    </div>
  )
}

export default BlockEditor
