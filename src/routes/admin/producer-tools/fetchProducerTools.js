const ProducerTool = require('../../../models/admin/ProducerTool')

module.exports = async (req, res) => {
  ProducerTool.find().then((tools) => {
    res.json(Object.values(tools))
  })
}
