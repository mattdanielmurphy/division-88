const About = require('../../../models/admin/About')

module.exports = async (req, res) => {
  const newAbout = req.body
  About.findOneAndUpdate({}, newAbout, { new: true, upsert: true }).then(
    (result) => res.json(result),
  )
}
