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
}