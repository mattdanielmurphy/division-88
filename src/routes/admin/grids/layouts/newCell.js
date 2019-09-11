const Grid = require('../../../../models/admin/Grid')

module.exports = async (req, res) => {
  const page = req.params.page
  // add layoutsObj to existing arrays for each size provided
  // for NOW: assume all sizes provided
  const { newLayouts, newCell } = req.body
  Grid.findOne({ page }).then((page) => {
    const { layouts, cells } = page
    let index
    Object.entries(newLayouts).forEach(([size, layout]) => {
      const index = layouts[size].length
      const lastY = layouts[size][layouts[size].length - 1].y
      const lastHeight = layouts[size][layouts[size].length - 1].h
      layout.i = String(index)
      layout.y = lastY + lastHeight
      layouts[size].push(layout)
    })

    cells.push(newCell)
    console.log(layouts)
    console.log(cells)

    page.markModified('layouts')
    page.markModified('cells')
    page
      .save()
      .then((result) => res.status(200).json({ index, layouts, cells }))
      .catch((rej) => {
        console.error(`Error updating layouts for page ${page}... ${rej}`)
        res.status(500).res.json(rej)
      })
  })
  console.log(
    layouts.mobile.length,
    layouts.mobile[layouts.mobile.length - 1],
    cells.length,
    cells[cells.length - 1],
  )
}

l = {
  desktop: [
    { w: 12, h: 4, x: 0, y: 0, i: '0', moved: false, static: false },
    { w: 4, h: 5, x: 0, y: 4, i: '1', moved: false, static: false },
    { w: 8, h: 3, x: 0, y: 9, i: '2', moved: false, static: false },
    { w: 4, h: 5, x: 4, y: 4, i: '3', moved: false, static: false },
    { w: 4, h: 5, x: 8, y: 4, i: '4', moved: false, static: false },
  ],
  tablet: [
    { w: 12, h: 4, x: 0, y: 0, i: '0', moved: false, static: false },
    { w: 6, h: 9, x: 6, y: 4, i: '1', moved: false, static: false },
    { w: 6, h: 9, x: 6, y: 13, i: '2', moved: false, static: false },
    { w: 6, h: 9, x: 0, y: 13, i: '3', moved: false, static: false },
    { w: 6, h: 9, x: 0, y: 4, i: '4', moved: false, static: false },
  ],
  mobile: [
    { w: 12, h: 4, x: 0, y: 0, i: '0', moved: false, static: false },
    { w: 12, h: 7, x: 0, y: 4, i: '1', moved: false, static: false },
    { w: 12, h: 6, x: 0, y: 26, i: '2', moved: false, static: false },
    { w: 12, h: 7, x: 0, y: 11, i: '3', moved: false, static: false },
    { w: 12, h: 8, x: 0, y: 18, i: '4', moved: false, static: false },
  ],
}
