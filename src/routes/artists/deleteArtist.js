const Artist = require('../../models/Artist')

module.exports = async (req, res) => {
  const id = req.body['_id']
  Artist.findOneAndRemove({ _id: id })
    .then((result) => {
      console.log(result)
      res.json(result)
    })
    .catch((err) => console.log(err))
}
