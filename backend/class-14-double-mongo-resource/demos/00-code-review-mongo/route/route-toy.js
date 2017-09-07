'use strict'

const Toy = require('../model/toy')
const debug = require('debug')('http:route-toy')

module.exports = function(router) {
  router.post('/api/toy', (req, res, next) => {
    debug('/api/toy POST')

    return new Toy(req.body).save()
    .then(toy => res.status(201).json(toy))
    .catch(err => next(err))
  })

  router.get('/api/toy/:_id', (req, res, next) => {
    debug('/api/toy/:_id GET')

    return Toy.findById(req.params._id)
    .then(toy => res.json(toy))
    .catch(next)
  })

  router.get('/api/toy', (req, res, next) => {
    debug('/api/toy GET')

    return Toy.find()
    .then(toys => res.json(toys.map(toy => toy._id)))
    .catch(next)
  })

  router.put('/api/toy/:_id', (req, res, next) => {
    debug('/api/toy PUT')

    return Toy.findByIdAndUpdate(req.params._id, req.body, { upsert:true, runValidators:true })
    .then(() => res.sendStatus(204))
    .catch(next)
  })

  router.delete('/api/toy/:_id', (req, res, next) => {
    debug('/api/toy DELETE')

    return Toy.findByIdAndRemove(req.params._id)
    .then(() => res.sendStatus(204))
    .catch(next)
  })

  // This would allow a full drop of the DB, given a user has admin rights
  // admin rights are validate through a 'isAdmin' module (we've not created that in this demo)
  // router.delete('/api/toy/', isAdmin, (req, res, next) => {
  //   debug('/api/toy DELETE')

  //   return Promise.all([
  //     Toy.remove(),
  //   ])
  //   .then(() => res.sendStatus(204))
  //   .catch(next)
  // })
}