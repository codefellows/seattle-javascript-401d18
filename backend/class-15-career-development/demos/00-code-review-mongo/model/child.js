'use strict'

const debug = require('debug')('http:child')
const Toy = require('./toy')
const mongoose = require('mongoose')

const Child = mongoose.Schema({
  name: { type: String, required: true },
  toys: [{ type: mongoose.Schema.Types.ObjectId, ref: 'toy' }]
}, { timestamps: true })

Child.post('remove', function(doc, next) {
  console.log(doc)
  // let toyPromises = this.toys.forEach(toy => Toy.findByIdAndRemove(toy._id.toString()))
  // if(toyPromises.length) return next(Promise.all(toyPromises))
  next()
})

module.exports = mongoose.model('child', Child)