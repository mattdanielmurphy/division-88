const models = [
	[ require('../../models/About'), require('../../models/admin/About') ],
	[ require('../../models/Artist'), require('../../models/admin/Artist') ],
	[ require('../../models/Grid'), require('../../models/admin/Grid') ],
	[ require('../../models/PageInfo'), require('../../models/admin/PageInfo') ],
	[ require('../../models/Post'), require('../../models/admin/Post') ],
	[ require('../../models/ProducerTool'), require('../../models/admin/ProducerTool') ]
]

// No Image model: uploaded images go directly to regular database.
//   whole point is so you can see all the images that have been uploaded

const AdminInfo = require('../../models/admin/AdminInfo')

const updateAllSubdocuments = async (AdminModel, Model, name) =>
	await Model.find({}).then(async (subdocuments) => {
		const allUpdated = subdocuments.map(async (subdocument, i) => {
			const doneUpdating = await AdminModel.findOneAndUpdate({ _id: subdocument._id }, subdocument, {
				upsert: true
			})
			// console.log(`updated ${name} ${i + 1} of ${subdocuments.length}`)
			return doneUpdating
		})

		await Promise.all(allUpdated)
		console.log(`...all ${name}s updated!`)
		return true
	})

module.exports = async (req, res) => {
	// About (will only ever be just the one document)
	// const about = await About.findOne()
	// console.log('original about', about)
	// const newAbout = await AdminAbout.findOne().then((about) => JSON.parse(JSON.stringify(about)))
	// delete newAbout._id
	// Object.assign(about, newAbout)
	// await About.findOneAndUpdate({}, newAbout, (result) => {
	// 	console.log('result of replace', result)
	// })

	const replaceAllModels = new Promise(async (resolve, reject) => {
		const tryAllModels = await models.map(async ([ PublicModel, AdminModel ]) => {
			// keep original models in case insert fails due to invalidation
			const publicModelDocs = await PublicModel.find()
			const adminModelDocs = await AdminModel.find()

			// empty docs in public collection
			await PublicModel.deleteMany()

			// try to insert new admin docs... will not insert anything if a single document fails validation
			return await PublicModel.insertMany(adminModelDocs).catch((err) => {
				// validation has failed so reinsert original docs, bypass validation
				console.log('validation failed... reinserting original docs')
				PublicModel.insertMany(publicModelDocs, { bypassDocumentValidation: true })
				res.json({ updated: false, error: `A document has failed validation. ${err}` })
				reject(err)
			})
		})
		await Promise.all(tryAllModels)
		resolve(res)
	})
	// const models = await Model.find()

	// set changesMade to false
	const setChangesMadeToFalse = await AdminInfo.updateOne({}, { changesMade: false }).then(
		async () => await AdminInfo.findOne()
	)

	await Promise.all([ replaceAllModels, setChangesMadeToFalse ])
	console.log('everything updated')
	res.json({ updated: true })
}
