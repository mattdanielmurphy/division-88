const images = require('express').Router()
const newImage = require('./newImage')

images.post('/new', newImage)

module.exports = images
