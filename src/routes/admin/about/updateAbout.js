const About = require('../../../models/admin/About')

module.exports = async (req, res) => {
  const newAbout = req.body
  // const about = About.findOne()
  // Object.assign(about, newAbout)
  About.findOneAndUpdate({}, newAbout, (result) => {
    res.json(result)
  })
}
