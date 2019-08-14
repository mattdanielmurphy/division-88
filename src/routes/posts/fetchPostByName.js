const Post = require('../../models/Post')

module.exports = async (req, res) => {
	const name = req.params.name
	Post.findOne({ title: name.split('-').join(' ') }).then((post) => {
		res.json(post)
	})
}
