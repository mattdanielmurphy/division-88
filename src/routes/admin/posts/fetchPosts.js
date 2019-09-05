const Post = require('../../../models/admin/Post')

module.exports = async (req, res) => {
  Post.find().then((posts) => {
    res.json(Object.values(posts))
  })
}
