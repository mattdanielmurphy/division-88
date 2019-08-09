const Grid = require('../../../models/Grid')

module.exports = async (req, res) => {
	const page = req.params.page
	const cell = req.params.cell

	Grid.findOne({ page })
		.then((page) => {
			res.status(200).json(page.cells[cell])
		})
		.catch((rej) => {
			console.error(`Error fetching cells for page ${page}... ${rej}`)
			res.status(500).res.json(rej)
		})
}
