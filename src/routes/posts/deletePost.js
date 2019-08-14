const Post = require('../../models/Post')

module.exports = async (req, res) => {
	const index = req.params.post

	const posts = await Post.find()
	const id = posts[index].id
	Post.findOneAndRemove({ _id: id }).then((result) => {
		res.json(result)
	})
}
