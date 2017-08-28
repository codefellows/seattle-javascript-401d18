'use strict'

const fs = require('fs')
const Bitmap = require('./bitmap')
const transforms = require('./transform')

const rw = module.exports = {}

rw.readBmp = (bmpPath, transform, cb) => {
  if(!bmpPath) cb(new Error('must provide valid bmpPath argument'))
  
  fs.readFile(`${__dirname}/../assets/${bmpPath}`, (err, bmpData) => {
    if(err) cb(err)
    if (cb) transforms[transform](new Bitmap(bmpData), cb)
 
    return null
  })
}
  
rw.writeBmp = (bmpPath, data, cb) => {
  if(!bmpPath) cb(new Error('must provide valid bmpPath argument'))
  if(!data || !Buffer.isBuffer(data.all)) cb(new Error('must provide a valid buffer to write to file'))
  
  fs.writeFile(`${__dirname}/../assets/${bmpPath}`, data.all, (err, output) => {
    if(err) cb(err)  
    if(cb) cb(null, output)

    return null
  })
}