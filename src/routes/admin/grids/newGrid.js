const Grid = require('../../../models/admin/Grid')

module.exports = async (req, res) => {
  Grid.create(req.body)
    .then((layoutObject) => {
      console.log(layoutObject)
      res.json(layoutObject)
    })
    .catch((rej) => {
      console.log(rej)
      res.json(rej)
    })
}
