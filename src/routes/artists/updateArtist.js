const { Artist } = require('../../models/Artist')

module.exports = async (req, res) => {
	const index = req.params.artist
	const artist = req.body

	const artists = await Artist.find()
	const existingArtist = artists[index]
	const id = artists[index].id

	const newArtist = Object.assign(existingArtist, artist)
	console.log(newArtist)
	console.log(id)
	Artist.updateOne({ _id: id }, newArtist)
		.then((response) => {
			console.log(response)
			res.status(200).json(newArtist)
		})
		.catch((rej) => {
			console.error(`Error fetching cells for page ${page}... ${rej}`)
			res.status(500).json(rej)
		})
}
