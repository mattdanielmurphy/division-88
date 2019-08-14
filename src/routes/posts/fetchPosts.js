const Post = require('../../models/Post')

module.exports = async (req, res) => {
	Post.find().then((posts) => {
		res.json(Object.values(posts))
	})
}
