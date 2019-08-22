const Post = require('../../models/Post')

module.exports = async (req, res) => {
  const post = req.body
  Post.updateOne({ _id: post['_id'] }, post)
    .then((response) => {
      res.status(200).json(response)
    })
    .catch((rej) => {
      console.error(`Error fetching post ${rej}`)
      res.status(500).json(rej)
    })
}
