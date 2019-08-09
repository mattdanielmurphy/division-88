const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Artist = require('./Artist')
const ProducerTool = require('./ProducerTool')
const Grid = require('./Grid')

const WIPSchema = new Schema({
	artists: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Artist'
		}
	],
	producerTools: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'ProducerTool'
		}
	],
	grid: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Grid'
		}
	]
})

const WIP = mongoose.model('workInProgress', WIPSchema)

module.exports = WIP
