const Artist = require('../../../models/admin/Artist')

module.exports = async (req, res) => {
  const name = req.params.name
  Artist.find({ page: name }).then((artist) => {
    res.json(artist[0])
  })
}
