'use strict'

const debug = require('debug')('http:server')

// express setup
const express = require('express')
const router = express.Router()
const app = express()

// mongoose setup
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
let mongoConnection = mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})

// routes (middleware)
require('../route/route-toy')(router)
require('../route/route-child')(router)

// mount middleware
app.use(require('body-parser').json())
app.use(require('cors')())
app.use(router)

app.all('/*', (req, res) => res.sendStatus(404))


// NOTE: This is a nesessary separation of concerns for running our tests.
// Within each test file we can explicitely start and stop a server instance
const server = module.exports = {}
server.isOn = false;
server.start = () => {
  return new Promise((resolve, reject) => {
    if(!server || !server.isOn) {
      server.http = app.listen(process.env.PORT, () => {
        console.log(process.env.MONGODB_URI)
        server.isOn = true;
        resolve();
      })
      return
    }
    reject(new Error('server allread running'))
  })
}

server.stop = () => {
  return new Promise((resolve, reject) => {
    if(server.http && server.isOn) {
      return server.http.close(() => {
        server.isOn = false
        mongoConnection.close()
        resolve()
      })
    }
    reject(new Error('ther server is not running'))
  })
}