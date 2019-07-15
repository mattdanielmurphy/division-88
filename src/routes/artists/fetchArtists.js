// const { Layout } = require('../../models/Layout')

const artists = require('../../client/src/components/js/artists')

module.exports = async (req, res) => {
	res.json({
		...artists
	})
}
