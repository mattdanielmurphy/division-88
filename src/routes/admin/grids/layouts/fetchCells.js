const Grid = require('../../../../models/admin/Grid')

module.exports = async (req, res) => {
  const page = req.params.page

  Grid.findOne({ page })
    .then((page) => {
      res.status(200).json(page.cells)
    })
    .catch((rej) => {
      console.error(`Error fetching cells for page ${page}... ${rej}`)
      res.status(500).res.json(rej)
    })
}
