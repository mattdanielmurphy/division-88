const ProducerTool = require('../../models/ProducerTool')

module.exports = async (req, res) => {
  const index = req.params.index
  const producerTool = req.body

  const producerTools = await ProducerTool.find()
  const id = producerTools[index].id
  ProducerTool.findOneAndUpdate({ _id: id }, producerTool).then((result) => {
    res.json(result)
  })
}
