'use strict'

const createError = require('http-errors')
const debug = require('debug')('http:error-middleware')

module.exports = function(err, req, res, next) {
  if(err.status) {
    debug('user error')
    res.status(err.status).send(err.name)
    // res.writeHead(400, 'Bad request; need more info')
    // res.write('you done did it now')
    // res.end()
    next()
    return
  }

  debug('server error')
  err = createError(500, err.message)
  res.status(err.status).send(err.name)
  next()
  // implicit return
}