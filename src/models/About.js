const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AboutSchema = new Schema({
	blocks: { type: Array, required: true }
})

const About = mongoose.model('about', AboutSchema)

const myModule = (module.exports = About)
myModule.AboutSchema = AboutSchema
