const AdminProduct = require('../../../models/admin/Product')

module.exports = async (req, res) => {
	AdminProduct.find().then((product) => res.json(product))
}
