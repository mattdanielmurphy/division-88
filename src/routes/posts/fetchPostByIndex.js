const Post = require('../../models/Post')

module.exports = async (req, res) => {
	const index = req.params.index
	Post.findOne({ index }).then((post) => res.json(post))
}
