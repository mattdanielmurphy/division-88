

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/matt/Documents/web-dev/projects/division-88/src/client/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('../src/pages/404.jsx'), universalOptions)
      t_0.template = '../src/pages/404.jsx'
      
const t_1 = universal(import('../src/pages/about.jsx'), universalOptions)
      t_1.template = '../src/pages/about.jsx'
      
const t_2 = universal(import('../src/pages/artist.jsx'), universalOptions)
      t_2.template = '../src/pages/artist.jsx'
      
const t_3 = universal(import('../src/pages/artists.jsx'), universalOptions)
      t_3.template = '../src/pages/artists.jsx'
      
const t_4 = universal(import('../src/pages/blog.jsx'), universalOptions)
      t_4.template = '../src/pages/blog.jsx'
      
const t_5 = universal(import('../src/pages/index.jsx'), universalOptions)
      t_5.template = '../src/pages/index.jsx'
      
const t_6 = universal(import('../src/pages/producer-tool.jsx'), universalOptions)
      t_6.template = '../src/pages/producer-tool.jsx'
      
const t_7 = universal(import('../src/pages/producer-tools.jsx'), universalOptions)
      t_7.template = '../src/pages/producer-tools.jsx'
      
const t_8 = universal(import('../src/containers/Post'), universalOptions)
      t_8.template = '../src/containers/Post'
      

// Template Map
export default {
  '../src/pages/404.jsx': t_0,
'../src/pages/about.jsx': t_1,
'../src/pages/artist.jsx': t_2,
'../src/pages/artists.jsx': t_3,
'../src/pages/blog.jsx': t_4,
'../src/pages/index.jsx': t_5,
'../src/pages/producer-tool.jsx': t_6,
'../src/pages/producer-tools.jsx': t_7,
'../src/containers/Post': t_8
}
// Not Found Template
export const notFoundTemplate = "../src/pages/404.jsx"

