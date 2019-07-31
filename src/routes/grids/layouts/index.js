const layoutsObject = require('express').Router()
const fetchLayouts = require('./fetchLayouts')
const fetchLayout = require('./fetchLayout')
const fetchCells = require('./fetchCells')
const fetchCell = require('./fetchCell')
const updateCell = require('./updateCell')
const newCell = require('./newCell')
const deleteCell = require('./deleteCell')

layoutsObject.get('/:page/layouts', fetchLayouts)
layoutsObject.get('/:page/cells', fetchCells)
layoutsObject.get('/:page/cells/:cell', fetchCell)
layoutsObject.get('/:page/cells/:cell/delete', deleteCell)
layoutsObject.get('/:page/layouts/:size', fetchLayout)
layoutsObject.post('/:page/layouts/newCell', newCell)
layoutsObject.post('/:page/cells/:cell', updateCell)

module.exports = layoutsObject
