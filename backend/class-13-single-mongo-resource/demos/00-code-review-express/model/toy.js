'use strict'

const debug = require('debug')('http:model-toy')
const uuid = require('uuid/v4')

module.exports = function(name, desc) {
  debug(`model-toy: ${name} created`)
  this.name = name
  this.desc = desc
  this._id = uuid()
}