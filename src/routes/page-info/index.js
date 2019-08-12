const pageInfo = require('express').Router()
const fetchPageInfoByName = require('./fetchPageInfoByName')
const updatePageInfoByName = require('./updatePageInfoByName')

pageInfo.get('/:name', fetchPageInfoByName)
pageInfo.post('/:name', updatePageInfoByName)

module.exports = pageInfo
