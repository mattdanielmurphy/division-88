const AdminInfo = require('../../../models/admin/AdminInfo')

module.exports = async (req, res) => {
  AdminInfo.updateOne({}, req.body, { upsert: true }).then(async (result) =>
    res.json(result),
  )
}
