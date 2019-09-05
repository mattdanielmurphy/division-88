const Grid = require('../../../../models/admin/Grid')

module.exports = async (req, res) => {
  const page = req.params.page
  const cell = req.params.cell
  // add layoutsObj to existing arrays for each size provided
  // for NOW: assume all sizes provided
  Grid.findOne({ page }).then((page) => {
    const { layouts, cells } = page
    Object.values(layouts).forEach((layout) => {
      layout.splice(cell, 1)
      layout = layout.map((cell, index) => {
        cell.i = String(index)
      })
    })

    cells.splice(cell, 1)

    page.markModified('cells')
    page.markModified('layouts')
    page.save().then((result) => res.status(200).json({ layouts, cells }))
  })
}
