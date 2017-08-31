'use strict'

const Toy = require('../model/toy')
const storage = require('../lib/storage')
const response = require('../lib/response')
const debug = require('debug')('http:route-toy')

module.exports = function(router) {
  router.post('/api/toy', (req, res) => {
    debug('/api/toy POST')
    try {
      let newToy = new Toy(req.body.name, req.body.desc)
      // if successful, store this thing in memory using the storage module
      storage.create('toy', newToy)
      .then(toy => response.sendJson(res, 201, toy))
    } catch(e) {
      console.error(e)
      response.sendText(res, 400, `bad request: ${e.message}`)
    }
  })
  
  router.get('/api/toy', (req, res) => {
    debug('/api/toy GET')
    if(req.url.query._id) {
      storage.fetchOne('toy', req.url.query._id)
      .then(toy => {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.write(JSON.stringify(toy))
        res.end()
      })
      .catch(err => {
        console.error(err)
        res.writeHead(400, {'Content-Type': 'text/plain'})
        res.write('bad request; could not find record')
        res.end()
      })
      return
    }

    res.writeHead(400, {'Content-Type': 'text/plain'})
    res.write('bad request; item id required to get record')
    res.end()
  })

  router.put('/api/toy', (req, res) => {
    debug('/api/toy PUT')
    if (req.url.query._id) {
      // {
      //   _id: 'val',
      //   name: 'val',
      //   desc: 'val'
      // }
      if(!req.body._id && !req.body.name && !req.body.desc) {
        res.writeHead(400, { 'Content-Type': 'application/json' })
        res.write(`bad request; body improperly formatted`)
        res.end()
        return
      }
      storage.update('toy', req.body)
      .then(() => {
        res.writeHead(204, {'Content-Type': 'text/plain'})
        res.end()
        return
      })
      .catch(err => {
        res.writeHead(400, {'Content-Type': 'application/json'})
        res.write(`bad request; ${err.message}`)
        res.end()
        return
      })
      return
    }

    res.writeHead(400, { 'Content-Type': 'text/plain' })
    res.write('bad request; item id required to get record')
    res.end()
  })
}