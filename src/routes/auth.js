const auth = require('express').Router()
// const bcrypt = require('bcrypt')

// const pw = 'password'
// let token = '123'
// let hashy

// auth.get('/gen-hash', (req, res) => {
// 	bcrypt
// 		.hash(pw, 10)
// 		.then((hash) => {
// 			hashy = hash
// 			res.status(200).send({ hash })
// 		})
// 		.catch((err) => {
// 			res.status(500).send(err)
// 		})
// })

// auth.get('/check-hash/:hash', (req, res) => {
//   const hash = req.params.hash
// 	bcrypt.compare(pw, req.params.hash)
// 	// console.log(req.params.code)
// 	res.status(200).send('code received')
// })

module.exports = auth
