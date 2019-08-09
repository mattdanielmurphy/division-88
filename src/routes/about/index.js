const about = require('express').Router()

const fetchAboutText = require('./fetchAboutText')
const updateAbout = require('./updateAbout')

about.get('/text', fetchAboutText)
about.post('/', updateAbout)

module.exports = about
