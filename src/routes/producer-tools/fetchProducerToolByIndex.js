const ProducerTool = require('../../models/ProducerTool')

module.exports = async (req, res) => {
	const index = req.params.index
	ProducerTool.find().then((producerTools) => {
		const producerTool = producerTools[index]
		res.json(producerTool)
	})
}
