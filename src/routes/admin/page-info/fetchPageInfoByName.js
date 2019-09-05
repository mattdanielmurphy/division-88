const PageInfo = require('../../../models/admin/PageInfo')

module.exports = async (req, res) => {
  const name = req.params.name
  PageInfo.find({ page: name }).then((pageInfo) => {
    res.json(pageInfo[0])
  })
}
