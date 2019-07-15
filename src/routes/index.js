const routes = require('express').Router()
const layouts = require('./layouts')
const artists = require('./artists')

routes.get('/', (req, res) => {
	res.status(200).json('Hey friend!')
})

routes.use('/layouts', layouts)
routes.use('/artists', artists)

module.exports = routes
