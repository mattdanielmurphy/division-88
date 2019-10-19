const env = require('firebase-functions').config()
env.mode = 'production'

module.exports = { env }
