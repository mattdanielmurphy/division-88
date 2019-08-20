const admin = require('firebase-admin')

const serviceAccount = require('../division-88-6430e-firebase-adminsdk-2xkkv-1f71869bce.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://division-88-6430e.firebaseio.com',
})

module.exports = (idToken) => {
  return new Promise((resolve, reject) => {
    admin
      .auth()
      .verifyIdToken(idToken)
      .then(function(decodedToken) {
        let uid = decodedToken.uid
        resolve(true)
      })
      .catch(function(error) {
        console.log(error)
        resolve(false)
      })
    setTimeout(() => {
      resolve(false)
    }, 1000)
  })
}
