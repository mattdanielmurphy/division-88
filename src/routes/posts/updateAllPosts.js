const Post = require('../../models/Post')

module.exports = async (req, res) => {
	const posts = req.body
	console.log(posts)
	Post.updateMany({}, posts)
		.then((response) => {
			res.status(200).json(response)
		})
		.catch((rej) => {
			console.error(`Error updating posts ${rej}`)
			res.status(500).json(rej)
		})
}
