const pageInfo = require('express').Router()
const fetchPageInfoByName = require('./fetchPageInfoByName')
const updatePageInfoByName = require('./updatePageInfoByName')
const newPageInfo = require('./newPageInfo')

pageInfo.get('/:name', fetchPageInfoByName)
pageInfo.post('/:name', updatePageInfoByName)
pageInfo.post('/new', newPageInfo)

module.exports = pageInfo
