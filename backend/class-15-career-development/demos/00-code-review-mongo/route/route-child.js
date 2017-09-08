'use strict'

const debug = require('debug')('http:route-child')
const errorHandler = require('../lib/error-handler')
const Child = require('../model/child')

module.exports = function(router) {
  debug('#route-child')

  router.post('/api/child', (req, res) => {
    debug('/api/child POST')

    return new Child(req.body).save()
    .then(child => res.status(201).json(child))
    .catch(err => errorHandler(err, req, res))
  })

  router.get('/api/child/:_id', (req, res) => {
    debug('/api/child/:_id GET')

    return Child.findById(req.params._id)
    .then(child => res.json(child))
    .catch(err => errorHandler(err, req, res))
  })

  router.get('/api/child', (req, res) => {
    debug('/api/child GET')

    return Child.find()
    .populate('toy')
    .then(children => res.json(children.map(child => child._id)))
    .catch(err => errorHandler(err, req, res))
  })

  router.put('/api/child/:_id', (req, res) => {
    debug('/api/child/:_id PUT')

    return Child.findByIdAndUpdate(req.params._id, req.body, { upsert: true, runValidators: true })
    .then(child => res.sendStatus(204))
    .catch(err => errorHandler(err, req, res))
  })

  router.delete('/api/child/:_id', (req, res) => {
    debug('/api/child/:_id DELETE')

    return Child.findByIdAndRemove(req.params._id)
    .then(child => res.sendStatus(204))
    .catch(err => errorHandler(err, req, res))
  })
}