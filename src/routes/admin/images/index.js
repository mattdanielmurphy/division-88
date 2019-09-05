const images = require('express').Router()
const isUserAuthenticated = require('../../authMiddleware')
const newImage = require('./newImage')

images.post('/new', isUserAuthenticated, newImage)

module.exports = images
