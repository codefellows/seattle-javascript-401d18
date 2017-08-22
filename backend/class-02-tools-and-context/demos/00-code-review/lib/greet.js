'use strict'

module.exports = function(name) {
  if(typeof name !== 'string') return null
  return `Hello ${name}.`
}