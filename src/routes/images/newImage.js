const Image = require('../../models/Image')

module.exports = async (req, res) => {
	console.log(req.body)
	Image.create(req.body)
		.then((layoutObject) => {
			console.log(layoutObject)
			res.json(layoutObject)
		})
		.catch((rej) => {
			console.log(rej)
			res.json(rej)
		})
}
