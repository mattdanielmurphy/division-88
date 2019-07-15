const artists = require('express').Router()
const fetchArtists = require('./fetchArtists')

artists.get('/', fetchArtists)

module.exports = artists
