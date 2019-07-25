import React from 'react'
import { setConfiguration } from 'react-grid-system'

import NonAdminRoot from 'components/jsx/root/NonAdminRoot'

// import { addPrefetchExcludes } from 'react-static'
// addPrefetchExcludes([ 'admin' ])

import * as log from 'loglevel'
log.warn('ultra-compatible')

import 'styles/app.scss'

setConfiguration({ gutterWidth: 0 })

export default () => <NonAdminRoot />
