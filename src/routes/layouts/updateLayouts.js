const { Layout } = require('../../models/Layout')

module.exports = async (req, res) => {
	const page = req.params.page

	Layout.updateOne({ page }, { layouts: req.body.layouts })
		.then((layoutObject) => res.status(200).json(layoutObject))
		.catch((rej) => {
			console.error(`Error updating layouts for page ${page}... ${rej}`)
			res.status(500).res.json(rej)
		})
}
