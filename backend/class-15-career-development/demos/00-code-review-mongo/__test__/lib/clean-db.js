'use strict'

const Child = require('../../model/child')
const Toy = require('../../model/Toy')

module.exports = () => {
  return Promise.all([
    Toy.remove(),
    Child.remove(),
  ])
}