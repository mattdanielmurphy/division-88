const layouts = require('express').Router()
const newLayout = require('./new')
const fetchLayouts = require('./fetchLayouts')
const updateLayouts = require('./updateLayouts')

layouts.get('/new/:page', newLayout)
layouts.get('/:page', fetchLayouts)
layouts.post('/:page', updateLayouts)

module.exports = layouts
