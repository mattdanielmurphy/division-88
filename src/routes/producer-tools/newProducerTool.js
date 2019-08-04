const { ProducerTool } = require('../../models/ProducerTool')

module.exports = async (req, res) => {
	ProducerTool.create(req.body).then((result) => res.status(200).json({ sent: req.body, response: result }))
}
