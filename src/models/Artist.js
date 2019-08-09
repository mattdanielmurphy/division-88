const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArtistSchema = new Schema({
	name: { type: String, required: true },
	page: { type: String, required: true },
	imgSrc: { type: String, required: true },
	description: {
		type: Object,
		default: {
			style: {
				backgroundColor: '#fff',
				color: '#000'
			},
			bio:
				'Bacon ipsum dolor amet meatloaf pig andouille kielbasa bacon picanha tenderloin. Ground round beef ribs rump, meatloaf spare ribs tongue brisket biltong leberkas pig kielbasa. Ribeye picanha sausage, tongue sirloin landjaeger flank venison ham hock tri-tip pork chop shank. Brisket fatback strip steak tail'
		},
		required: true
	},
	spotifyUrl: { type: String, required: true },
	releases: {
		type: Array,
		default: [
			{
				name: 'All Nighters',
				spotifyUrl: 'https://open.spotify.com/album/3t9S03TNKktyKlNysyJS8k?si=ZJk-l8WKRW692NLHGnPlow',
				cover: '/images/all-nighters.jpg'
			}
		],
		required: true
	}
})

const Artist = mongoose.model('artist', ArtistSchema)

module.exports = Artist

// const example = {
// 	name: 'Billy Wild',
// 	page: 'billy-wild',
// 	imgSrc: '/images/billy.jpg',
// 	description: {
// 		style: {
// 			backgroundColor: '#D2CFC1',
// 			color: '#2C25C5'
// 		},
// 		bio:
// 			'Bacon ipsum dolor amet meatloaf pig andouille kielbasa bacon picanha tenderloin. Ground round beef ribs rump, meatloaf spare ribs tongue brisket biltong leberkas pig kielbasa. Ribeye picanha sausage, tongue sirloin landjaeger flank venison ham hock tri-tip pork chop shank. Brisket fatback strip steak tail.'
// 	},
// 	spotifyUrl: 'https://open.spotify.com/artist/6zNQ51HIfnzskqL2R82jYD?si=rEm8CzOpQIOnzqqCJIBFYQ',
// 	releases: [
// 		{
// 			name: 'All Nighters',
// 			spotifyUrl: 'https://open.spotify.com/album/3t9S03TNKktyKlNysyJS8k?si=ZJk-l8WKRW692NLHGnPlow',
// 			cover: '/images/all-nighters.jpg'
// 		}
// 	]
// }
