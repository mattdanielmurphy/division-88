const { Artist } = require('../../models/Artist')

module.exports = async (req, res) => {
	Artist.create(req.body).then((result) => res.status(200).json({ sent: req.body, response: result }))
}
