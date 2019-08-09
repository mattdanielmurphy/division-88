const ProducerTool = require('../../models/ProducerTool')

module.exports = async (req, res) => {
	const index = req.params.producerTool

	const producerTools = await ProducerTool.find()
	const id = producerTools[index].id
	ProducerTool.findOneAndRemove({ _id: id }).then((result) => {
		res.json(result)
	})
}
