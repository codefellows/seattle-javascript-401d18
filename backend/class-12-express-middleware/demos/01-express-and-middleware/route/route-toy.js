'use strict'
const storage = require('../lib/storage')
const debug = require('debug')('http:route-toy')

module.exports = function(router) {
  router.post('/api/toy', (req, res, next) => {
    debug('/api/toy POST')

    return storage.create(req.body)
    .then(toy => res.status(201).json(toy))
    .catch(err => next(err))
  })

  // This is how express allows dynamic routes via parameters
  // http GET :3000/api/toy/1234-5678 
  // req.params._id => 1234-5678
  
  // This is how our vanilla http servers were structured
  // http GET :3000/api/toy?_id=1234-5678 
  // req.query._id => 1234-5678
  
  // superagent request:
  // superagent.get(':3000/api/toy/1234-5678')
  // .then(...)
  // .catch(...)
  router.get('/api/toy/:_id', (req, res, next) => {
    debug('/api/toy/:_id GET')

    return storage.fetchOne(req.params._id)
    .then(toy => res.json(toy))
    .catch(next)

    // if(req.url.query._id) {
    //   return storage.fetchOne('toy', req.url.query._id)
    //   .then(toy => response(res, 201, toy))
    //   .catch(err => response(res, 400, err.message))
    // }
    // return storage.fetchAll('toy')
    // .then(ids => response(res, 200, ids))
    // .catch(err => response(res, 404, err.message))
  })

  router.get('/api/toy', (req, res, next) => {
    debug('/api/toy GET')

  })

  router.put('/api/toy/:_id', (req, res, next) => {
    debug('/api/toy PUT')
    // if(!req.url.query._id) {
    //   try {
    //     let newToy = new Toy(req.body.name, req.body.desc)

    //     return storage.create('toy', newToy)
    //     .then(toy => response(res, 201, toy))
    //   } catch (e) {
    //     response(res, 400, 'bad request: could not update toy')
    //   }
    //   return
    // }
    // return storage.update('toy', req.body)
    // .then(() => response(res, 204))
    // .catch(err => response(res, 400, err.message))
  })

  router.delete('/api/toy/:_id', (req, res, next) => {
    debug('/api/toy DELETE')
  //   if(req.url.query._id) {
  //     return storage.destroy('toy', req.url.query._id)
  //     .then(() => response(res, 204))
  //     .catch(err => response(res, 404, err.message))
  //   }
  //   response(res, 400, 'bad request; could not delete resource')
  })
}