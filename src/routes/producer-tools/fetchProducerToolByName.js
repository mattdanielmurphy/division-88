const ProducerTool = require('../../models/ProducerTool')

module.exports = async (req, res) => {
	const name = req.params.name
	ProducerTool.find({ page: name }).then((producerTool) => {
		res.json(producerTool[0])
	})
}
