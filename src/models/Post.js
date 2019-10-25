const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  blocks: {
    type: Array,
    required: true,
    default: [{type: 'text', content: '', id: 'abc123'}],
  },
  layouts: {
    type: Object,
    default: {
      lg: [{w: 4, h: 4, x: 0, y: 0, i: 0}, {w: 4, h: 4, x: 0, y: 0, i: 0}],
      md: [{w: 4, h: 4, x: 0, y: 0, i: 0}, {w: 4, h: 4, x: 0, y: 0, i: 0}],
      sm: [{w: 4, h: 4, x: 0, y: 0, i: 0}, {w: 4, h: 4, x: 0, y: 0, i: 0}],
      xs: [{w: 4, h: 4, x: 0, y: 0, i: 0}, {w: 4, h: 4, x: 0, y: 0, i: 0}]
    },
    required: true
  },
  tableData: {type: Object},
  title: {type: String, required: true, default: 'new post'},
  // category: { type: String, required: true },
})

const Post = mongoose.model('post', PostSchema)

module.exports = Post
