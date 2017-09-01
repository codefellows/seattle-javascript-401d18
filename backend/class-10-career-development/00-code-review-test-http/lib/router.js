'use strict'

const debug = require('debug')('http:router')
const parseUrl = require('./parse-url')
const parseJson = require('./parse-json')
const response = require('./response')

const Router = module.exports = function() {
  this.routes = {
    GET: {},
    POST: {},
    PUT: {},
    DELETE: {}
  }
}

let methods = ['get', 'post', 'put', 'delete']
methods.forEach(verb => {
  Router.prototype[verb] = function(endpoint, callback) {
    debug(`#Router mounted: ${endpoint} ${verb.toUpperCase()}`)
    this.routes[verb.toUpperCase()][endpoint] = callback
  }
})

Router.prototype.route = function() {
  return (req, res) => {
    Promise.all([
      parseUrl(req),
      parseJson(req)
    ])
    .then(() => {
      if(typeof this.routes[req.method][req.url.pathname] === 'function') {
        this.routes[req.method][req.url.pathname](req, res)
        return
      }
      response(res, 400, 'route not found')
    })
    .catch(err => response(res, 400, 'bad request; something went wrong in the router'))
  }
}