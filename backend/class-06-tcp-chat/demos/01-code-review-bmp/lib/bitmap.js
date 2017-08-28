'use strict'

module.exports = function(bmp) {
  this.all = bmp
  this.type = bmp.toString('utf-8', 0, 2)
  this.size = bmp.readInt32LE(2)
  this.offset = bmp.readInt32LE(10)
  this.headerSize = bmp.readInt32LE(14)
  this.width = bmp.readInt32LE(18)
  this.height = bmp.readInt32LE(22)
  this.bitsPerPixel = bmp.readInt16LE(28)
  this.colorArray = bmp.slice(54, this.offset)
}