const Post = require('../../../models/admin/Post')

module.exports = async (req, res) => {
  const post = req.body
  Post.updateOne({ _id: post._id }, post)
    .then((response) => {
      res.status(200).json(response)
    })
    .catch((rej) => {
      console.error(`Error updating post ${rej}`)
      res.status(500).json(rej)
    })
}
