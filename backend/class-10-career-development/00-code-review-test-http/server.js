'use strict'

const debug = require('debug')('http:server')
const http = require('http')
const Router = require('./lib/router')
const router = new Router()
const PORT = process.env.PORT || 3000

require('./route/route-toy')(router)

const server = module.exports = http.createServer(router.route())
server.listen(PORT, () => console.log(`Listening on ${PORT}`))
