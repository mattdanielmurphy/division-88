const Grid = require('../../../../models/admin/Grid')

module.exports = async (req, res) => {
  const page = req.params.page
  const cellIndex = req.params.index
  // add layoutsObj to existing arrays for each size provided
  // for NOW: assume all sizes provided
  Grid.findOne({ page }).then(async (page) => {
    const { layouts, cells } = page
    const updateLayouts = Object.values(layouts).map(async (layout) => {
      const layoutFiltered = layout.filter(
        async (cell, index) => index !== cellIndex,
      )
      //
      // // fix indexes
      await Promise.all(layoutFiltered)
      layout = layoutFiltered.map((cell, index) => {
        cell.i = String(index)
      })
      await Promise.all(layout)
      return layout
    })

    await Promise.all(updateLayouts)

    cells.splice(cellIndex, 1)

    page.markModified('cells')
    page.markModified('layouts')
    page.save().then((result) => res.status(200).json({ layouts, cells }))
  })
}
