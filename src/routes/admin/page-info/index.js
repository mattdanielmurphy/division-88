const pageInfo = require('express').Router()
const isUserAuthenticated = require('../../authMiddleware')
const fetchPageInfoByName = require('./fetchPageInfoByName')
const updatePageInfoByName = require('./updatePageInfoByName')

pageInfo.get('/:name', fetchPageInfoByName)
pageInfo.post('/:name', isUserAuthenticated, updatePageInfoByName)

module.exports = pageInfo
