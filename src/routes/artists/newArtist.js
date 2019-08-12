const Artist = require('../../models/Artist')

module.exports = async (req, res) => {
	console.log('newartist')
	const index = await Artist.find({}).then((r) => r.length + 1)
	Artist.create(req.body).then((artist) => res.status(200).json({ artist, index }))
}
