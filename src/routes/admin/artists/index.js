const artists = require('express').Router()
const isUserAuthenticated = require('../../authMiddleware')
const fetchArtists = require('./fetchArtists')
const fetchArtistByIndex = require('./fetchArtistByIndex')
const fetchArtistByName = require('./fetchArtistByName')
const updateArtist = require('./updateArtist')
const deleteArtist = require('./deleteArtist')
const newArtist = require('./newArtist')

artists.get('/', fetchArtists)
artists.delete('/', deleteArtist)
artists.get('/index/:index', fetchArtistByIndex)
artists.get('/:name', fetchArtistByName)
artists.post('/new', isUserAuthenticated, newArtist)
artists.post('/:index', isUserAuthenticated, updateArtist)

module.exports = artists
