const { Layout } = require('../../models/Layout')

module.exports = async (req, res) => {
	Layout.create({
		page: req.params.page,
		layouts: defaultLayouts
	})
		.then((layoutObject) => {
			console.log(layoutObject)
			res.json(layoutObject)
		})
		.catch((rej) => {
			console.log(rej)
			res.json(rej)
		})
}
