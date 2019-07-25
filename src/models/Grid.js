const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GridSchema = new Schema({
	page: { type: String, required: true },
	layouts: {
		type: Object,
		default: {
			lg: [ { w: 4, h: 4, x: 0, y: 0, i: 0 }, { w: 4, h: 4, x: 0, y: 0, i: 0 } ],
			md: [ { w: 4, h: 4, x: 0, y: 0, i: 0 }, { w: 4, h: 4, x: 0, y: 0, i: 0 } ],
			sm: [ { w: 4, h: 4, x: 0, y: 0, i: 0 }, { w: 4, h: 4, x: 0, y: 0, i: 0 } ],
			xs: [ { w: 4, h: 4, x: 0, y: 0, i: 0 }, { w: 4, h: 4, x: 0, y: 0, i: 0 } ]
		},
		required: true
	},
	cells: {
		type: Array,
		default: [
			{
				link: '',
				bottomText: { text: 'Neon Bambi -- New Release', height: '50px', backgroundColor: 'rgb(239,0,160)' },
				backgroundText: { heading: 'Heading' },
				imgSrc: '/images/neon-bambi.jpg'
			},
			{
				imgSrc: '/images/skoop.jpg',
				videoSrc: 'http://www.youtube.com/watch?v=aUdfLZJkqFs'
			}
		],
		required: true
	}
})
const Grid = mongoose.model('grid', GridSchema)

module.exports = { Grid }
