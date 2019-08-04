const { ProducerTool } = require('../../models/ProducerTool')

module.exports = async (req, res) => {
	const index = req.params.index
	console.log('fetch by index')
	ProducerTool.find().then((producerTools) => {
		console.log(producerTools)
		const producerTool = producerTools[index]
		res.json(producerTool)
	})
}
