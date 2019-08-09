const Grid = require('../../../models/Grid')

module.exports = async (req, res) => {
	const page = req.params.page
	const cell = req.params.cell
	// add layoutsObj to existing arrays for each size provided
	// for NOW: assume all sizes provided
	Grid.findOne({ page }).then((page) => {
		const { layouts, cells } = page
		Object.values(layouts).forEach((layout) => {
			layout.splice(cell, 1)
			layout = layout.map((cell, index) => {
				cell.i = String(index)
			})
		})

		cells.splice(cell, 1)

		page.markModified('cells')
		page.markModified('layouts')
		page.save().then((result) => res.status(200).json({ layouts, cells }))
	})
}

c = {
	page: 'index',
	cells: [
		{
			imgSrc: '/images/trees.jpg',
			backgroundText: {
				heading: ''
			},
			video: false
		},
		{
			link: '',
			bottomText: {
				text: 'Neon Bambi -- New Release',
				height: '25px',
				backgroundColor: 'rgb(239,0,160)'
			},
			imgSrc: '/images/neon-bambi.jpg',
			backgroundText: {
				heading: ''
			},
			video: false
		},
		{
			link: '/artists/billy-wild',
			backgroundText: {
				heading: '',
				subheading: ''
			},
			imgSrc: '/images/billy.jpg',
			video: false
		},
		{
			link: '/artists',
			backgroundText: {
				heading: 'hi',
				subheading: ''
			},
			imgSrc: 'https://picsum.photos/id/958/1920/1080',
			bottomText: {
				text: '',
				height: '',
				backgroundColor: ''
			},
			video: false
		},
		{
			imgSrc: '/images/skoop.jpg',
			video: true,
			videoSrc: 'http://www.youtube.com/watch?v=aUdfLZJkqFs',
			bottomText: {
				backgroundColor: '',
				height: '',
				text: ''
			},
			backgroundText: {
				heading: ''
			}
		}
	],
	layouts: {
		desktop: [
			{
				w: 12,
				h: 8,
				x: 0,
				y: 0,
				i: '0',
				minW: 4,
				minH: 2
			},
			{
				w: 12,
				h: 4,
				x: 0,
				y: 4,
				i: '1',
				minW: 4,
				minH: 2
			},
			{
				w: 12,
				h: 4,
				x: 0,
				y: 8,
				i: '2',
				minW: 4,
				minH: 2
			},
			{
				w: 12,
				h: 4,
				x: 0,
				y: 16,
				i: '3',
				minW: 4,
				minH: 2
			},
			{
				w: 12,
				h: 4,
				x: 0,
				y: 16,
				i: '4',
				minW: 4,
				minH: 2
			}
		],
		tablet: [
			{
				w: 12,
				h: 8,
				x: 0,
				y: 0,
				i: '0',
				minW: 4,
				minH: 2
			},
			{
				w: 12,
				h: 4,
				x: 0,
				y: 4,
				i: '1',
				minW: 4,
				minH: 2
			},
			{
				w: 12,
				h: 4,
				x: 0,
				y: 8,
				i: '2',
				minW: 4,
				minH: 2
			},
			{
				w: 12,
				h: 4,
				x: 0,
				y: 16,
				i: '3',
				minW: 4,
				minH: 2
			},
			{
				w: 12,
				h: 4,
				x: 0,
				y: 16,
				i: '4',
				minW: 4,
				minH: 2
			}
		],
		mobile: [
			{
				w: 12,
				h: 8,
				x: 0,
				y: 0,
				i: '0',
				minW: 4,
				minH: 2
			},
			{
				w: 12,
				h: 4,
				x: 0,
				y: 4,
				i: '1',
				minW: 4,
				minH: 2
			},
			{
				w: 12,
				h: 4,
				x: 0,
				y: 8,
				i: '2',
				minW: 4,
				minH: 2
			},
			{
				w: 12,
				h: 4,
				x: 0,
				y: 16,
				i: '3',
				minW: 4,
				minH: 2
			},
			{
				w: 12,
				h: 4,
				x: 0,
				y: 16,
				i: '4',
				minW: 4,
				minH: 2
			}
		]
	}
}
