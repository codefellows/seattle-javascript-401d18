'use strict'

const greet = require('./lib/greet')
console.log('logged string value of import', greet)

console.log(greet.bark())
console.log(greet.meow())