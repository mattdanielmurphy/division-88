const  = require('express').Router()

producerTools.get('/', fetchProducerTools)
producerTools.get('/:name', fetchProducerToolByName)
producerTools.get('/index/:index', fetchProducerToolByIndex)
producerTools.get('/:producerTool/delete', deleteProducerTool)
producerTools.post('/:producer-tool', updateProducerTool)
producerTools.post('/new', newProducerTool)

module.exports = producerTools
