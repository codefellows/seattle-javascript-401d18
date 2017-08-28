'use strict'

let t = module.exports = {}

t.grayScale = (bmp, callback) => {
  if(!bmp || !Buffer.isBuffer(bmp.colorArray)) callback(new Error('must pass valid bmp'))

  for(let i = 0; i < bmp.colorArray.length; i += 4) {
    let gray = (bmp.colorArray[i] + bmp.colorArray[i+1] + bmp.colorArray[i+2])/3
    bmp.colorArray[i] = gray
    bmp.colorArray[i+1] = gray
    bmp.colorArray[i+2] = gray
  }
  if(callback) callback(null, bmp)
} 
    
t.invert = (bmp, callback) => {
  if(!bmp || Buffer.isBuffer(bmp)) callback(new Error('must pass valid bmp'))

  for(let i = 0; i < bmp.colorArray.length; i += 4) {
    bmp.colorArray[i] = Math.abs(255 - bmp.colorArray[i])
    bmp.colorArray[i+1] = Math.abs(255 - bmp.colorArray[i+1])
    bmp.colorArray[i+2] = Math.abs(255 - bmp.colorArray[i+2])
  }
  if(callback) callback(null, bmp)
}