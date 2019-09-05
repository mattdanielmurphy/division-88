const Artist = require('../../../models/admin/Artist')

module.exports = async (req, res) => {
  Artist.find().then((artists) => {
    res.json(Object.values(artists))
  })
}
