const routes = require('express').Router()
const grids = require('./grids')
const layouts = require('./grids/layouts')
const artists = require('./artists')
const producerTools = require('./producer-tools')
const workInProgresss = require('./work-in-progress')
const auth = require('./auth')

routes.get('/', (req, res) => {
	res.status(200).json('Hey friend!')
})

routes.use('/grids', grids)
routes.use('/grids', layouts)
routes.use('/producer-tools', producerTools)
routes.use('/artists', artists)
routes.use('/auth', auth)
routes.use('/wip', workInProgress)

// /grids
// /grids/index
// /grids/index/layouts
// /grids/index/layouts/new -> {lg: {}, md: {}, ...}
// /grids/index/layouts/lg -> {}

module.exports = routes
