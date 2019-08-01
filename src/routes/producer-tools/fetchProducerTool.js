const { Artist } = require('../../models/Artist')

module.exports = async (req, res) => {
	const index = req.params.artist
	Artist.find().then((artists) => {
		const artist = artists[index]
		res.json(artist)
	})
}
