const About = require('../../models/About')
const AdminAbout = require('../../models/admin/About')
const models = [
  [require('../../models/Artist'), require('../../models/admin/Artist')],
  [require('../../models/Grid'), require('../../models/admin/Grid')],
  [require('../../models/PageInfo'), require('../../models/admin/PageInfo')],
  [require('../../models/Post'), require('../../models/admin/Post')],
  [
    require('../../models/ProducerTool'),
    require('../../models/admin/ProducerTool'),
  ],
]

// No Image model: uploaded images go directly to regular database.
//   whole point is so you can see all the images that have been uploaded

const AdminInfo = require('../../models/admin/AdminInfo')

const updateAllSubdocuments = async (Model, AdminModel, name) =>
  await Model.find({}).then(async (subdocuments) => {
    const allUpdated = subdocuments.map(async (subdocument, i) => {
      const doneUpdating = await AdminModel.findOneAndUpdate(
        { _id: subdocument._id },
        subdocument,
        { upsert: true },
      )
      // console.log(`updated ${name} ${i + 1} of ${subdocuments.length}`)
      return doneUpdating
    })

    await Promise.all(allUpdated)
    console.log(`...all ${name}s updated!`)
    return true
  })

module.exports = async (req, res) => {
  // About (will only ever be just the one document)
  const updateAbout = await About.findOne({}).then(
    async ({ text }) => await AdminAbout.findOneAndUpdate({}, { text }),
  )

  const allModelsUpdated = models.map(
    async ([Model, AdminModel]) =>
      await updateAllSubdocuments(Model, AdminModel, Model.modelName),
  )

  // set changesMade to false
  const updateAdminInfo = await AdminInfo.updateOne(
    {},
    { changesMade: false },
  ).then(async () => await AdminInfo.findOne())

  await Promise.all([updateAbout, ...allModelsUpdated, updateAdminInfo])
  console.log('everything updated')
  res.json({ updated: true })
}
