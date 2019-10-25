const about = require('express').Router()
const isUserAuthenticated = require('../../authMiddleware')

const fetchAbout = require('./fetchAbout')
const updateAbout = require('./updateAbout')

about.get('/', fetchAbout)
about.post('/', isUserAuthenticated, updateAbout)

module.exports = about
