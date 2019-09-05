const grids = require('express').Router()
const isUserAuthenticated = require('../../authMiddleware')
// const newGrid = require('./newGrid')
const updateGrid = require('./updateGrid')

// grids.post('/new', isUserAuthenticated, newGrid)
grids.post('/:page', isUserAuthenticated, updateGrid)

module.exports = grids
