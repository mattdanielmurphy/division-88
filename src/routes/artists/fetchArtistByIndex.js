const Artist = require('../../models/Artist')

module.exports = async (req, res) => {
	const index = req.params.index
	Artist.find().then((artists) => {
		const artist = artists[index]
		res.json(artist)
	})
}
