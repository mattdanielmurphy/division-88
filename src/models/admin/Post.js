const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  text: {
    type: String,
    default:
      '{"document":{"nodes":[{"object":"block","type":"paragraph","nodes":[{"object":"text","text":"Click to edit."}]}]}}',
  },
  tableData: { type: Object },
  title: { type: String, required: true },
  category: { type: String, required: true },
  index: { type: Number, required: true },
})

const Post = mongoose.model('admin-post', PostSchema)

module.exports = Post
