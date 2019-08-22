const ProducerTool = require('../../models/ProducerTool')

module.exports = async (req, res) => {
  const index = await ProducerTool.find({}).then((r) => r.length)
  ProducerTool.create(req.body).then((tool) =>
    res.status(200).json({ tool, index }),
  )
}
