const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AboutSchema = new Schema({
  blocks: { type: Object, required: true },
})

const About = mongoose.model('admin-about', AboutSchema)

const myModule = (module.exports = About)
myModule.AboutSchema = AboutSchema
