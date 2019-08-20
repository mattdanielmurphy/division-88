const ProducerTool = require('../../models/ProducerTool')
const authenticateCall = require('../authenticateCall')

module.exports = async (req, res) => {
  const idToken = req.body.idToken

  authenticateCall(idToken).then(async (isAuthenticated) => {
    if (isAuthenticated) {
      const index = req.params.index
      const producerTool = req.body.content

      const producerTools = await ProducerTool.find()
      const id = producerTools[index].id
      ProducerTool.findOneAndUpdate({ _id: id }, producerTool).then(
        (result) => {
          res.json(result)
        },
      )
    } else {
      console.log('auth failed')
      res.json('not authenticated')
    }
  })
}
