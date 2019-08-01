import React from 'react'
import { setConfiguration } from 'react-grid-system'

import Root from 'components/jsx/root/Root'

// import { addPrefetchExcludes } from 'react-static'
// addPrefetchExcludes([ 'admin' ])

import * as log from 'loglevel'

import 'styles/app.scss'

setConfiguration({ gutterWidth: 0 })

export default () => <Root />
