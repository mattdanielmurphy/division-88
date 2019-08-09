const Grid = require('../../../models/Grid')

module.exports = async (req, res) => {
	const page = req.params.page
	const cell = req.params.cell
	const cellContents = req.body

	Grid.findOne({ page })
		.then((page) => {
			page.cells[cell] = cellContents
			page.markModified('cells')
			page.save().then((result) => res.status(200).json('update successful'))
		})
		.catch((rej) => {
			console.error(`Error fetching cells for page ${page}... ${rej}`)
			res.status(500).res.json(rej)
		})
}
