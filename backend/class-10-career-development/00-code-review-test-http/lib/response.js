'use strict'

const debug = require('debug')('http:response')

module.exports = function(res, status, data) {
  try {
    debug('#response sending json')
    let json = JSON.stringify(data)
    res.writeHead(status, { 'Content-Type': 'application/json' })
    res.write(json)
    res.end()
  } catch(e) {
    debug('#response sending text')
    res.writeHead(status, { 'Content-Type': 'text/plain' })
    res.write(data)
    res.end()
  }
}