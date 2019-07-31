const { Grid } = require('../../../models/Grid')

module.exports = async (req, res) => {
	const page = req.params.page
	const cell = req.params.cell
	// add layoutsObj to existing arrays for each size provided
	// for NOW: assume all sizes provided
	Grid.findOne({ page }).then((page) => {
		const { layouts, cells } = page
		Object.values(layouts).forEach((size) => {
			size.splice(cell, 1)
		})

		cells.splice(cell, 1)

		page.markModified('cells')
		page.markModified('layouts')
		page.save().then((result) => res.status(200).json({ layouts, cells }))
	})
}
l = {
	desktop: [
		{ w: 12, h: 4, x: 0, y: 0, i: '0', moved: false, static: false },
		{ w: 4, h: 5, x: 0, y: 4, i: '1', moved: false, static: false },
		{ w: 8, h: 3, x: 0, y: 9, i: '2', moved: false, static: false },
		{ w: 4, h: 5, x: 4, y: 4, i: '3', moved: false, static: false },
		{ w: 4, h: 5, x: 8, y: 4, i: '4', moved: false, static: false },
		{ w: 12, h: 4, x: 0, y: 0, i: '0', moved: false, static: false }
	],
	tablet: [
		{ w: 12, h: 4, x: 0, y: 0, i: '0', moved: false, static: false },
		{ w: 6, h: 9, x: 6, y: 4, i: '1', moved: false, static: false },
		{ w: 6, h: 9, x: 6, y: 13, i: '2', moved: false, static: false },
		{ w: 6, h: 9, x: 0, y: 13, i: '3', moved: false, static: false },
		{ w: 6, h: 9, x: 0, y: 4, i: '4', moved: false, static: false },
		{ w: 12, h: 4, x: 0, y: 0, i: '0', moved: false, static: false }
	],
	mobile: [
		{ w: 12, h: 4, x: 0, y: 0, i: '0', moved: false, static: false },
		{ w: 12, h: 7, x: 0, y: 4, i: '1', moved: false, static: false },
		{ w: 12, h: 6, x: 0, y: 26, i: '2', moved: false, static: false },
		{ w: 12, h: 7, x: 0, y: 11, i: '3', moved: false, static: false },
		{ w: 12, h: 8, x: 0, y: 18, i: '4', moved: false, static: false },
		{ w: 12, h: 5, x: 0, y: 32, i: '5', moved: false, static: false }
	]
}
