const ProducerTool = require('../../../models/admin/ProducerTool')

module.exports = async (req, res) => {
  const name = req.params.name
  console.log('name', name)
  ProducerTool.findOne({ page: name }).then((producerTool) => {
    res.json(producerTool)
  })
}
