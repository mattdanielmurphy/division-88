const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LayoutSchema = new Schema({
	page: { type: String, required: true },
	layouts: {
		type: Object,
		default: {
			lg: [ { w: 12, h: 10, x: 0, y: 0, i: '0', moved: false, static: false } ]
		},
		required: true
	}
})
const Layout = mongoose.model('layout', LayoutSchema)

module.exports = { Layout }
