'use strict'

const fs = require('fs')

console.log(`current dir: ${__dirname}`)

let x = module.exports = {}

x.read = () => {
  let first, second

  fs.readFile(`${__dirname}/../data/two.txt`, (err, data) => {
    if(err) console.error(err)
    console.log('two.txt', data.toString('utf-8', 0, 18))
    first = data.toString('utf-8', 0, 18)
  })

  fs.readFile(`${__dirname}/../data/one.txt`, (err, data) => {
    if(err) console.error(err)
    console.log('one.txt', data.toString('utf-8', 0, 18))
    second = data.toString('utf-8', 0, 18)
  })

  return {first, second}
}


