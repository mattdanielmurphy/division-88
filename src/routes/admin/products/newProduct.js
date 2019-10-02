const AdminProduct = require('../../../models/admin/Product')

module.exports = async (req, res) => {
	AdminProduct.create([ req.body ], { new: true }).then((r) => res.json(r))
}
