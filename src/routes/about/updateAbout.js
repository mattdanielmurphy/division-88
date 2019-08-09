const About = require('../../models/About')

module.exports = async (req, res) => {
	const newAbout = req.body
	About.findOneAndUpdate({}, newAbout, { new: true, upsert: true }).then((result) => res.json(result))
}
