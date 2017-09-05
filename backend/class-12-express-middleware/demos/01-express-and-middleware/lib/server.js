'use strict'

const debug = require('debug')('http:server')

// express setup
const PORT = process.env.PORT || 3000
const express = require('express')
const router = express.Router()
const app = module.exports = express()

// middleware
const bodyParser = require('body-parser').json()
const cors = require('./cors')
const errorMiddleware = require('./error-middleware')

// routes 
require('../route/route-toy')(router)
// require('./route/route-kid')(router)
// require('./route/route-family')(router)

// mount middleware
app.use(bodyParser)
app.use(cors)
app.use(router)
// this should always be last to catch any errors within the callback chain
app.use(errorMiddleware)