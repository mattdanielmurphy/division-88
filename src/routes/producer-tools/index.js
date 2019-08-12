const producerTools = require('express').Router()
const fetchProducerTools = require('./fetchProducerTools')
const fetchProducerToolByName = require('./fetchProducerToolByName')
const fetchProducerToolByIndex = require('./fetchProducerToolByIndex')
const updateProducerTool = require('./updateProducerTool')
const deleteProducerTool = require('./deleteProducerTool')
const newProducerTool = require('./newProducerTool')

producerTools.get('/', fetchProducerTools)
producerTools.get('/:name', fetchProducerToolByName)
producerTools.get('/index/:index', fetchProducerToolByIndex)
producerTools.get('/:producerTool/delete', deleteProducerTool)
producerTools.post('/new', newProducerTool)
producerTools.post('/:index', updateProducerTool)

module.exports = producerTools
