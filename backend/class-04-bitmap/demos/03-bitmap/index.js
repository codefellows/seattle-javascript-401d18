'use strict'

const Bitmap = require('./lib/bitmap')
const fs = require('fs')

fs.readFile(`${__dirname}/assets/bitmap.bmp`, (err, data) => {
  if(err) console.error(err)
  
  let bmp = new Bitmap(data)
  
  console.log(bmp)
})
