'use strict'

const debug = require('debug')('http:child')
const Toy = require('./toy')
const mongoose = require('mongoose')

const Child = mongoose.Schema({
  name: { type: String, required: true },
  toys: [{ type: mongoose.Schema.Types.ObjectId, ref: 'toy' }]
}, { timestamps: true })


// need to tweak this to make it fully functional but doesn't work right now
// Child.post('remove', function(doc, next) {
//   let toyPromises = doc.toys.map(toy => Toy.findByIdAndRemove(toy._id))
//   return Promise.all(toyPromises)
// })

module.exports = mongoose.model('child', Child)