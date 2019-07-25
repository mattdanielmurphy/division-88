const grids = require('express').Router()
const newGrid = require('./newGrid')
const updateGrid = require('./updateGrid')

grids.post('/new', newGrid)
grids.post('/:page', updateGrid)

module.exports = grids
