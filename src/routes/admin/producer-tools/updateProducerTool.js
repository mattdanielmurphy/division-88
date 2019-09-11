const ProducerTool = require('../../../models/admin/ProducerTool')

module.exports = async (req, res) => {
  const producerTool = req.body
  ProducerTool.findOneAndUpdate({ _id: producerTool._id }, producerTool).then(
    (result) => {
      res.json(result)
    },
  )
}
