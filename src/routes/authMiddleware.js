const admin = require('firebase-admin')
const serviceAccount = require('../division-88-6430e-firebase-adminsdk-2xkkv-1f71869bce.json')
const env = require('../server-env')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://division-88-6430e.firebaseio.com',
})

const isUserAuthenticated = (req, res, next) => {
  let token = req.headers['access-token']
  console.log('token', token)

  if (token) {
    return admin
      .auth()
      .verifyIdToken(token)
      .then(function(decodedToken) {
        let uid = decodedToken.uid
        res.locals.auth = {
          uid,
        }
        next()
      })
      .catch(function(error) {
        console.log(error)
        res.status(401).json({
          status: 401,
          message: 'UNAUTHORIZED',
        })
      })
  } else {
    return res.status(403).json({
      status: 403,
      message: 'FORBIDDEN',
    })
  }
}

if (env.mode === 'production') module.exports = isUserAuthenticated
else module.exports = (req, res, next) => next()
