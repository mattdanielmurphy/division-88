const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ImageSchema = new Schema({
	url: { type: String, required: true },
	filename: { type: String, required: true }
})
const Image = mongoose.model('image', ImageSchema)

module.exports = Image
