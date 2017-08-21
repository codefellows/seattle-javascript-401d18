'use strict'

// NOTE: Do not use this without Allie's approval
// module.exports = {
//   name: 'Katherine'
// }

// NOTE: This exports a singular function for use elsewhere
// module.exports = (name) => {
//   return `Hello world!, my name is ${name}`
// }

let NinjaCat = module.exports = {}
NinjaCat.name = 'Fred'

NinjaCat.meow = function() {
  return `meow, meow, ${this.name}`
}

NinjaCat.bark = function() {
  return `woof, woof, ${this.name}`
}
