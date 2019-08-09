const About = require('../../models/About')

module.exports = async (req, res) => {
	About.findOne({}).then((about) => {
		res.json(about.text)
	})
}
