const About = require('../../../models/admin/About')

module.exports = async (req, res) => {
  About.findOne({}).then((about) => {
    res.json(about.text)
  })
}
