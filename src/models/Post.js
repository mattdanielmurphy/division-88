const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
	text: { type: String, required: true },
	title: { type: String, required: true },
	category: { type: String, required: true },
	index: { type: Number, required: true }
})

const Post = mongoose.model('post', PostSchema)

module.exports = Post
