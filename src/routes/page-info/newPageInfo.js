const PageInfo = require('../../models/PageInfo')

module.exports = async (req, res) => {
	PageInfo.create(req.body).then((result) => res.status(200).json({ sent: req.body, response: result }))
}
