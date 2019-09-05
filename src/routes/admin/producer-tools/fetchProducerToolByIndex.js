const ProducerTool = require('../../../models/admin/ProducerTool')

module.exports = async (req, res) => {
  const index = req.params.index
  ProducerTool.find().then((producerTools) => {
    const producerTool = producerTools[index]
    res.json(producerTool)
  })
}
