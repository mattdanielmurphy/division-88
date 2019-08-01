const artists = require('express').Router()
const fetchArtists = require('./fetchArtists')
const fetchArtist = require('./fetchArtist')
const updateArtist = require('./updateArtist')
const deleteArtist = require('./deleteArtist')
const newArtist = require('./newArtist')

artists.get('/', fetchArtists)
artists.get('/:artist', fetchArtist)
artists.get('/:artist/delete', deleteArtist)
artists.post('/:artist', updateArtist)
artists.post('/new', newArtist)

module.exports = artists
