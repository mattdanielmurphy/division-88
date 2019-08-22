const ProducerTool = require('../../models/ProducerTool')

module.exports = async (req, res) => {
  const name = req.params.name
  console.log('name', name)
  ProducerTool.findOne({ page: name }).then((producerTool) => {
    res.json(producerTool)
  })
}
