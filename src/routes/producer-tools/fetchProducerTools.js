const { Artist } = require('../../models/Artist')

module.exports = async (req, res) => {
	Artist.find().then((artists) => {
		res.json({
			...artists
		})
	})
}
