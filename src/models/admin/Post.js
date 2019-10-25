const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  blocks: {type: Array, required: true, default: [{type: 'text'}]},
  tableData: {type: Object},
  title: {type: String, required: true, default: 'new post'},
  layouts: {
    type: Object,
    default: {
      lg: [{w: 4, h: 4, x: 0, y: 0, i: 0}, {w: 4, h: 4, x: 0, y: 0, i: 0}],
      md: [{w: 4, h: 4, x: 0, y: 0, i: 0}, {w: 4, h: 4, x: 0, y: 0, i: 0}],
      sm: [{w: 4, h: 4, x: 0, y: 0, i: 0}, {w: 4, h: 4, x: 0, y: 0, i: 0}],
      xs: [{w: 4, h: 4, x: 0, y: 0, i: 0}, {w: 4, h: 4, x: 0, y: 0, i: 0}]
    },
    required: true
  }
  // category: { type: String, required: true },
})

const Post = mongoose.model('admin-post', PostSchema)

module.exports = Post
