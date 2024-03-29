const functions = require('firebase-functions') // production-mode specific
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const { env } = require('./server-env')

const app = express()

mongoose
  .connect(
    `mongodb+srv://mattmurphy:${env.db.password}@cluster0-1psk0.gcp.mongodb.net/test?retryWrites=true`,
    {
      dbName: 'division88',
      useNewUrlParser: true,
    },
  )
  .then(() => console.log('Database connected successfully.'))
  .catch((err) => console.log(err))

mongoose.Promise = global.Promise // override deprecated promise

app.use(cors({ origin: true }), bodyParser.json())
app.use('/api', routes)

let api = functions.https.onRequest(app) // production-mode specific

module.exports = { api } // production-mode specific
