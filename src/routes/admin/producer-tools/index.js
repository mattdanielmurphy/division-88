const producerTools = require('express').Router()
const isUserAuthenticated = require('../../authMiddleware')
const fetchProducerTools = require('./fetchProducerTools')
const fetchProducerToolByName = require('./fetchProducerToolByName')
const fetchProducerToolByIndex = require('./fetchProducerToolByIndex')
const updateProducerTool = require('./updateProducerTool')
const deleteProducerTool = require('./deleteProducerTool')
const newProducerTool = require('./newProducerTool')

producerTools.get('/', fetchProducerTools)
producerTools.get('/:name', fetchProducerToolByName)
producerTools.get('/index/:index', fetchProducerToolByIndex)
producerTools.delete('/', deleteProducerTool)
producerTools.post('/new', isUserAuthenticated, newProducerTool)
producerTools.post('/:index', isUserAuthenticated, updateProducerTool)

module.exports = producerTools
