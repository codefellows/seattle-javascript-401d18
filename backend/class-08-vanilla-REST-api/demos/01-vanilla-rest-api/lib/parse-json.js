'use strict'

const debug = require('debug')('http:parse-json')

module.exports = function(req) {
  return new Promise((resolve, reject) => {
    if(req.method === 'POST' || req.method === 'PUT') {
      debug('#parse-json POST || PUT')
      let body = ''

      req.on('data', buff => body += buff.toString())
      req.on('end', () => {
        try {
          req.body = JSON.parse(body)
          resolve(req)
        } catch(e) {
          console.error(e)
          reject(e)
        }
      })

      req.on('error', err => {
        console.error(err)
        reject(err)
      })
  
      return
    } 
    debug('parse-json GET || DELETE')
    resolve(req)
  })
}