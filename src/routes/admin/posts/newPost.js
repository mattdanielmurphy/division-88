const Post = require('../../../models/admin/Post')

module.exports = async (req, res) => {
  console.log('new post')
  const index = await Post.find({}).then((r) => r.length)
  const post = req.body
  post.index = index
  Post.create(post)
    .then((post) => res.status(200).json({ post, index }))
    .catch((err) => console.log(err))
}
