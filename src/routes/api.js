const router = require('express').Router()
const { Layout } = require('../models/Layout')
// const auth = require('./auth')
// const uuid = require('short-uuid')
const { env } = require('../server-env')
router.get('/', (req, res) => {
	res.json('ok')
})

// router.get('/layouts/:page', async (req, res, next) => {
// 	// // .create
// 	// // .push
// 	Layout.create({
// 		page: req.params.page
// 	}).then((res) => console.log(res))

// 	res.json('good!')
// })

const defaultLayouts = {
	lg: [ { w: 12, h: 10, x: 0, y: 0, i: '0', moved: false, static: false } ]
}

router.get('/layouts/new/:page', async (req, res, next) => {
	// const layouts = req.body.layouts
	Layout.create({
		page: req.params.page,
		layouts: defaultLayouts
	})
		.then((layoutObject) => {
			// layoutObject.layouts = layouts
			console.log(layoutObject)
			res.json(layoutObject)
		})
		.catch((rej) => {
			console.log(rej)
			res.json(rej)
		})
})

// get or update layouts

router.get('/layouts/:page', async (req, res, next) => {
	console.log('getting layouts')
	Layout.findOne({ page: req.params.page })
		.then((layoutObject) => {
			console.log('layouts: ', layoutObject)
			res.json(layoutObject)
		})
		.catch((rej) => {
			console.log(rej)
			res.json(rej)
		})
})

router.post('/layouts/:page', async (req, res, next) => {
	Layout.updateOne({ page: req.params.page }, { layouts: req.body.layouts })
		// Layout.findOne({ page: req.params.page })
		.then((layoutObject) => {
			res.json(layoutObject)
		})
		.catch((rej) => {
			res.json(rej)
		})
})

module.exports = router

// dropbox
// router.get('/auth', async (req, res, next) => {
// 	const code = req.query.code
// 	if (code) {
// 		const tokenHash = await auth.getHashTokenFromCode(code).catch((err) => console.log('Err:', err))
// 		res.redirect(`${env.app.url}/?tokenHash=${tokenHash}`)
// 	}
// })

// router.post('/auth', async (req, res, next) => {
// 	let token = req.body.token
// 	const tokenHash = req.body.tokenHash
// 	if (token) {
// 		const accessToken = await auth.authenticateToken(token)
// 		res.json(accessToken)
// 	} else if (tokenHash) {
// 		token = auth.decryptTokenHash(tokenHash)
// 		const accessToken = await auth.authenticateToken(token)
// 		res.json(accessToken)
// 	}
// })

// router.get('/get-auth-url', async (req, res, next) => {
// 	const url = await auth.getAuthorizationUrl()
// 	res.json({ url })
// })

// // create new playlist
// router.post('/:userId/playlists', async (req, res, next) => {
// 	const userId = req.params.userId
// 	const playlist = req.body
// 	playlist._id = uuid.generate()

// 	User.findById(userId).then((user) => {
// 		user.playlists.push({ _id: playlist._id })
// 		user.save()
// 		console.log('created playlist', playlist)
// 	})
// 	Playlist.create(playlist).then((data) => res.json(data)).catch((err) => res.json({ error: err }))
// })

// // delete a playlist
// router.delete('/:userId/playlists/:playlistId', (req, res, next) => {
// 	const userId = req.params.userId
// 	const playlistId = req.params.playlistId
// 	const tokenHash = req.body.tokenHash
// 	User.updateOne({ _id: userId }, { $pull: { playlists: { _id: playlistId } } })
// 		.then((data) => res.json(data))
// 		.catch(next)
// })

// // replace playlist: PUT
// router.put('/:userId/playlists/:playlistId', (req, res, next) => {
// 	const userId = req.params.userId
// 	const playlistId = req.params.playlistId
// 	const newPlaylist = req.body
// 	newPlaylist._id = playlistId
// 	User.findById(userId).then((user) => {
// 		const oldPlaylist = user.playlists.id(playlistId).remove()
// 		user.playlists.push(newPlaylist)
// 		user.save()
// 	})
// })

// // get all playlists of user
// router.get('/:userId/playlists', ({ params }, res, next) => {
// 	let playlistIds
// 	User.findById(params.userId).then((user) => {
// 		// if no playlists return an empty array
// 		playlistIds = user.playlists ? user.playlists : []

// 		// playlistIds = playlistIds.map((playlistId) => playlistId)
// 		Playlist.find(
// 			{
// 				_id: { $in: playlistIds }
// 			},
// 			function(err, playlists) {
// 				playlists = playlists.sort((a, b) => b.date - a.date)
// 				res.json(playlists)
// 			}
// 		)
// 	})
// })

// // get a playlist by its id
// router.get('/playlists/:playlistId', ({ params }, res, next) => {
// 	const playlistId = params.playlistId
// 	Playlist.findById(playlistId).then((playlist) => res.json(playlist))
// })

// // create new user
// router.post('/users', async ({ body }, res, next) => {
// 	// add IDs to each playlist if playlists object provided
// 	if (body.playlists) {
// 		body.playlists = body.playlists.map((playlist, i) => {
// 			playlist._id = i + 1
// 			return playlist
// 		})
// 	}
// 	User.create(body).then((data) => res.json(data)).catch((err) => res.json({ error: err }))
// })
