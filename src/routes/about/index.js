const about = require('express').Router()
const isUserAuthenticated = require('../authMiddleware')

const fetchAboutText = require('./fetchAboutText')
const updateAbout = require('./updateAbout')

about.get('/text', fetchAboutText)
about.post('/', isUserAuthenticated, updateAbout)

module.exports = about
