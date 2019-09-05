const PageInfo = require('../../../models/admin/PageInfo')

module.exports = async (req, res) => {
  const name = req.params.name
  const newInfo = req.body

  console.log(newInfo)
  PageInfo.findOneAndUpdate({ page: name }, newInfo, {
    new: true,
    upsert: true,
  }).then((result) => res.json(result))
}
