import React, {useState, useEffect} from 'react'
import {Responsive, WidthProvider} from 'react-grid-layout'
import Video from 'components/jsx/Video'
import SoundCloudWidget from 'react-simple-soundcloud-widget'
import BlockEditorModal from "components/jsx/admin/editor/BlockEditorModal";
import * as uuid from "short-uuid";

const ResponsiveGridLayout = WidthProvider(Responsive)

const Block = ({content, type}) => (
  !content ? (
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
    ) : ''
)


const PostRenderer = ({
                        blocks,
                        layouts,
                      }) => {
  const [rowHeight, setRowHeight] = useState(100)
  return (
    <div id='index'>
      <ResponsiveGridLayout
        measureBeforeMount
        className='layout'
        layouts={layouts}
        rowHeight={rowHeight}
        // width={gridWidth}
        nb
        isDraggable={false}
        isResizable={false}
        breakpoints={{
          desktop: 1326,
          tablet: 750,
          mobile: 0,
        }}
        cols={{
          desktop: 12,
          tablet: 12,
          mobile: 12,
        }}
        rows={{
          desktop: 12,
          tablet: 12,
          mobile: 12,
        }}
        containerPadding={[0, 0]}
        margin={[0, 0]}
      >
        {blocks.map((block, index) => (
          <div className="block" key={index} id={block.id}>
            <Block {...block}/>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  )
}

export default PostRenderer