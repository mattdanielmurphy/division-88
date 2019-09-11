const About = require('../../../models/admin/About')

module.exports = async (req, res) => {
  const newAbout = req.body
  console.log('newAbout', newAbout.blocks[2].content)
  const about = About.findOne()
  Object.assign(about, newAbout)
  About.findOneAndReplace({}, newAbout, (result) => {
    res.json(result)
  })
}
