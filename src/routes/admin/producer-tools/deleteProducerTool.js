const ProducerTool = require('../../../models/admin/ProducerTool')

module.exports = async (req, res) => {
  const id = req.body['_id']
  ProducerTool.findOneAndRemove({ _id: id })
    .then((result) => {
      console.log(result)
      res.json(result)
    })
    .catch((err) => console.log(err))
}
