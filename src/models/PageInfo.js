const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PageInfoSchema = new Schema({
	page: { type: String, required: true },
	headingBackgroundImage: { type: String, required: true }
})
const PageInfo = mongoose.model('pageInfo', PageInfoSchema)

module.exports = PageInfo
