const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  blocks: { type: Array, required: true, default: [{ type: 'text' }] },
  tableData: { type: Object },
  title: { type: String, required: true, default: 'new post' },
  // category: { type: String, required: true },
  // index: { type: Number, required: true },
})

const Post = mongoose.model('admin-post', PostSchema)

module.exports = Post
