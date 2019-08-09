const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AboutSchema = new Schema({
	text: { type: String, required: true }
})

const About = mongoose.model('about', AboutSchema)

module.exports = About
