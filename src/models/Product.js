const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	description: {
		type: Array,
		required: true,
		default: [ { type: 'text', content: { text: 'Product description' }, id: '1' } ]
	}
})

const Product = mongoose.model('product', ProductSchema)

const myModule = (module.exports = Product)
myModule.ProductSchema = ProductSchema
