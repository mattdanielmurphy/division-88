const Post = require('../../models/Post')

module.exports = async (req, res) => {
  const id = req.body['_id']
  Post.findOneAndRemove({ _id: id })
    .then((result) => {
      console.log(result)
      res.json(result)
    })
    .catch((err) => console.log(err))
}
