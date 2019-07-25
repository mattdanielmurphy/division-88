const { Grid } = require('../../../models/Grid')

module.exports = async (req, res) => {
	const page = req.params.page
	const size = req.params.size

	Grid.findOne({ page })
		.then((page) => {
			res.status(200).json(page.layouts[size])
		})
		.catch((rej) => {
			console.error(`Error fetching layouts for page ${page}... ${rej}`)
			res.status(500).res.json(rej)
		})
}
