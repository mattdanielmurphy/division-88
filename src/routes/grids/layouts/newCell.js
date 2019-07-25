const { Grid } = require('../../../models/Grid')

module.exports = async (req, res) => {
	const page = req.params.page
	// add layoutsObj to existing arrays for each size provided
	// for NOW: assume all sizes provided
	const { newLayouts, newCell } = req.body
	const { layouts, cells } = await Grid.findOne({ page })

	Object.entries(newLayouts).forEach(([ size, layout ]) => {
		layouts[size].push(layout)
	})

	cells.push(newCell)

	Grid.updateOne({ page }, { layouts, cells })
		.then((layoutObject) => res.status(200).json(layoutObject))
		.catch((rej) => {
			console.error(`Error updating layouts for page ${page}... ${rej}`)
			res.status(500).res.json(rej)
		})
}
