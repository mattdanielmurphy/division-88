const { Layout } = require('../../models/Layout')

module.exports = async (req, res) => {
	const page = req.params.page

	Layout.findOne({ page }).then((layoutObject) => res.status(200).json(layoutObject)).catch((rej) => {
		console.error(`Error fetching layouts for page ${page}... ${rej}`)
		res.status(500).res.json(rej)
	})
}
