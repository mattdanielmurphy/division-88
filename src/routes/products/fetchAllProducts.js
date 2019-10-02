const Product = require('../../models/Product')

module.exports = async (req, res) => {
	Product.find().then((product) => res.json(product))
}
