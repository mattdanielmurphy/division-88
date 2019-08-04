const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProducerToolSchema = new Schema({
	name: { type: String, required: true },
	page: { type: String, required: true },
	imgSrc: { type: String, required: true },
	description: {
		type: String,
		required: true
	},
	dropboxUrl: { type: String, required: true }
})
const ProducerTool = mongoose.model('producerTool', ProducerToolSchema)

module.exports = { ProducerTool }
