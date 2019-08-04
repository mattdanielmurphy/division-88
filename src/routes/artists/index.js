const artists = require('express').Router()
const fetchArtists = require('./fetchArtists')
const fetchArtistByIndex = require('./fetchArtistByIndex')
const fetchArtistByName = require('./fetchArtistByName')
const updateArtist = require('./updateArtist')
const deleteArtist = require('./deleteArtist')
const newArtist = require('./newArtist')

artists.get('/', fetchArtists)
artists.get('/index/:index', fetchArtistByIndex)
artists.get('/:name', fetchArtistByName)
artists.get('/:artist/delete', deleteArtist)
artists.post('/:artist', updateArtist)
artists.post('/new', newArtist)

module.exports = artists
