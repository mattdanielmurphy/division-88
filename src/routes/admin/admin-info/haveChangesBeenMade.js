const AdminInfo = require('../../../models/admin/AdminInfo')

module.exports = async (req, res) => {
  AdminInfo.findOne({}).then(async ({ changesMade }) => {
    res.json({ changesMade })
  })
}
