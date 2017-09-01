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
      return storage.create('toy', newToy)
      .then(toy => response(res, 201, toy))
    } catch(e) { 
      response(res, 400, 'bad request: could not create a new toy')
    }
  })
  
  router.get('/api/toy', (req, res) => {
    debug('/api/toy GET')
    if(req.url.query._id) {
      return storage.fetchOne('toy', req.url.query._id)
      .then(toy => response(res, 201, toy))
      .catch(err => response(res, 400, err.message))
    }
    return storage.fecthAll('toy')
    .then(ids => response(res, 200, ids))
    .catch(err => response(res, 404, err.message))
  })

  router.put('/api/toy', (req, res) => {
    debug('/api/toy PUT')
    if(!req.url.query._id) {
      try {
        let newToy = new Toy(req.body.name, req.body.desc)

        return storage.create('toy', newToy)
        .then(toy => response(res, 201, toy))
      } catch (e) {
        response(res, 400, 'bad request: could not update toy')
      }
      return
    }
    return storage.update('toy', req.body)
    .then(() => response(res, 204))
    .catch(err => response(res, 400, err.message))
  })

  router.delete('/api/toy', (req, res) => {
    debug('/api/toy DELETE')
    if(req.url.query._id) {
      return storage.destroy('toy', req.url.query._id)
      .then(() => response(res, 204))
      .catch(err => response(res, 404, err.message))
    }
    response(res, 400, 'bad request; could not delete resource')
  })
}