'use strict'

const readFile = require('./lib/read-file')

console.log('arguments',  process.argv.slice(2))
let dir = process.argv[2]

// TODO: Add a CLI interface to accept dynamic directory paths

readFile(`${__dirname}/${dir}`, (err, data) => {
  if(err) console.error(err)
  console.log(data)
})


// NOTE: Solution for code from 03-lab
// const fs = require('fs')

// let readFile = module.exports = callback => {
//   let results = []

//   fs.readFile('./data/one.txt', (err, oneData) => {
//     if(err) callback(new Error('barf'))
//       results.push(oneData.toString('hex', 0, 8))
    
//     fs.readFile('./data/two.txt', (err, twoData) => {
//       if(err) callback(new Error('barf'))
//         results.push(twoData.toString('hex', 0, 8))
      
//       fs.readFile('./data/three.txt', (err, threeData) => {
//         if(err) callback(new Error('barf'))
//         results.push(threeData.toString('hex', 0, 8))

//         callback(null, results)
//       })
//     })
//   })
// }

// readFile((err, data) => {
//   if(err) console.error(err)
//   console.log(data)
// })