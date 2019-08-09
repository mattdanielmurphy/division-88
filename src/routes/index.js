const routes = require('express').Router()
const grids = require('./grids')
const layouts = require('./grids/layouts')
const artists = require('./artists')
const producerTools = require('./producer-tools')
const workInProgress = require('./work-in-progress')
const pageInfo = require('./page-info')
const about = require('./about')
const auth = require('./auth')

routes.get('/', (req, res) => res.status(200).json('All good'))

routes.use('/grids', grids)
routes.use('/grids', layouts)
routes.use('/producer-tools', producerTools)
routes.use('/artists', artists)
routes.use('/about', about)
routes.use('/auth', auth)
routes.use('/wip', workInProgress)
routes.use('/page-info', pageInfo)

module.exports = routes
