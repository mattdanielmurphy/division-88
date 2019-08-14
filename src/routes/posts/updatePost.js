const Post = require('../../models/Post')

module.exports = async (req, res) => {
	const index = req.params.index
	const post = req.body
	// const posts = await Post.find()
	// const existingPost = posts[index]
	// const id = posts[index].id

	// const newPost = Object.assign(existingPost, post)
	// console.log(newPost)
	Post.updateOne({ index }, post)
		.then((response) => {
			res.status(200).json(response)
		})
		.catch((rej) => {
			console.error(`Error fetching post ${rej}`)
			res.status(500).json(rej)
		})
}
