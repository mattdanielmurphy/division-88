const Post = require('../../../models/admin/Post')

module.exports = async (req, res) => {
  console.log('new post')
  const post = req.body
  Post.create(post)
    .then((post) => res.status(200).json(post))
    .catch((err) => console.log(err))
}
