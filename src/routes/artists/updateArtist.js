const { Artist } = require('../../models/Artist')

module.exports = async (req, res) => {
	const index = req.params.artist
	const artist = req.body

	const artists = await Artist.find()
	const id = artists[index].id
	// artists[index] = artist
	console.log(artist)
	Artist.findOneAndUpdate({ _id: id }, artist).then((result) => {
		res.json(result)
	})
}
