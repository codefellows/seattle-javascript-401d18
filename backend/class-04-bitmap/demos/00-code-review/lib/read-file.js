'use strict'

const fs = require('fs')

module.exports = (dirPath, callback) => {
  let results = {}

  fs.readdir(dirPath, (err, files) => {
    if(err) callback(err)
      // ['one.txt', 'two.txt', 'three.txt']
    readFiles(files)
  })
  
  function readFiles(filesArr) {
    if(!filesArr.length) {
      callback(null, results)
      return
    }
    
    fs.readFile(`${dirPath}/${filesArr.pop()}`, (err, data) => {
      if(err) callback(err)
        results[filesArr.length] = data.toString('hex', 0, 16)
          // obj = {
          //   "0": 'some val',
          //   "1": 'some val'
          // }
      readFiles(filesArr)
    })
  }
}
