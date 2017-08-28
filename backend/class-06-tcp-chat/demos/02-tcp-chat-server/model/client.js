'use strict'

const uuid = require('uuid/v4')

// TODOs: Client needs a nickName, _id, socket

module.exports = function(socket) {
  this.socket = socket
  this.nick = `guest_${Math.random() * 10000}`
  this._id = uuid()
}