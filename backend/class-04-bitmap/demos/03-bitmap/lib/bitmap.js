'use strict'

module.exports = function(buffer) {
  this.allData = buffer
  this.type = buffer.toString('utf-8', 0, 2)
  this.fileSize = buffer.readInt32LE(2)
  this.offset = buffer.readInt32LE(10)
  this.width = buffer.readInt32LE(18)
  this.height = buffer.readInt32LE(22)
  this.pixelArray = buffer.slice(54, this.offset)
}