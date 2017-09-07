'use strict'

const debug = require('debug')('http:server')
require('dotenv').config()

// express setup
const express = require('express')
const router = express.Router()
const app = express()

// mongoose setup
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})

// routes (middleware)
require('../route/route-toy')(router)
require('../route/route-child')(router)
// require('./route/route-family')(router)

// mount middleware
app.use(require('body-parser').json())
app.use(require('cors')())
app.use(router)

app.all('/*', (req, res) => res.sendStatus(404))

module.exports = app