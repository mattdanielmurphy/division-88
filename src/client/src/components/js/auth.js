const firebase = require('firebase')

const provider = new firebase.auth.GoogleAuthProvider()
firebase
  .auth()
  .signInWithPopup(provider)
  .then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result.credential.accessToken
    console.log(token)
    // The signed-in user info.
    const user = result.user
    // ...
  })
  .catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code
    const errorMessage = error.message
    // The email of the user's account used.
    const email = error.email
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential
    // ...
  })
