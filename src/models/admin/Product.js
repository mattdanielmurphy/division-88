const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminProductSchema = new Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	description: {
		type: Array,
		required: true,
		default: [ { type: 'text', content: { text: 'Product description' }, id: '1' } ]
	}
})

const AdminProduct = mongoose.model('admin-product', AdminProductSchema)

module.exports = AdminProduct
