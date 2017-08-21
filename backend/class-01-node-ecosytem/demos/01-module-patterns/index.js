'use strict'

const greet = require('./lib/greet')
console.log(greet.toString())

let message = greet('Scott')

console.log('This is my log:', message)