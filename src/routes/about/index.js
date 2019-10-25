const about = require('express').Router()

const fetchAbout = require('./fetchAbout')

about.get('/', fetchAbout)

module.exports = about
