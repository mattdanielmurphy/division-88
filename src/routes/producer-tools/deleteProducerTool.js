const { Artist } = require('../../models/Artist')

module.exports = async (req, res) => {
	const index = req.params.artist

	const artists = await Artist.find()
	const id = artists[index].id
	Artist.findOneAndRemove({ _id: id }).then((result) => {
		res.json(result)
	})
}
