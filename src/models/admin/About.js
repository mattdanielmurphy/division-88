const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AboutSchema = new Schema({
  blocks: {type: Object, required: true},
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
})

const About = mongoose.model('admin-about', AboutSchema)

const myModule = (module.exports = About)
myModule.AboutSchema = AboutSchema
