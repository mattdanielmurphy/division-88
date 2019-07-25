const { Grid } = require('../../models/Grid')

module.exports = async (req, res) => {
	const page = req.params.page

	const grid = await Grid.findOne({ page })
	const newGrid = Object.assign(grid, req.body)
	Grid.updateOne({ page }, newGrid).then((layoutObject) => res.status(200).json(layoutObject)).catch((rej) => {
		console.error(`Error updating grid for page ${page}... ${rej}`)
		res.status(500).res.json(rej)
	})
}
