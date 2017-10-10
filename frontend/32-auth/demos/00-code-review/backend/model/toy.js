'use strict'


const debug = require('debug')('http:model-toy')
const Child = require('../model/child')
const mongoose = require('mongoose')

const Toy = mongoose.Schema({
  name: {type: String, required: true},
  desc: {type: String, required: true},
  child: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'child'}
}, {timestamps: true})

Toy.pre('save', function(next) {
  debug('#pre-save Toy')

  Child.findById(this.child)
  .then(child => {
    let toyIdSet = new Set(child.toys)
    toyIdSet.add(this._id)
    child.toys = Array.from(toyIdSet)
    return child.save()
  })
  .then(next)
  .catch(() => next(new Error('validation failed to create toy because child does not exist')))
})

Toy.post('remove', function(doc, next) {
  debug('#post-remove Toy')

  Child.findById(doc.child)
  .then(child => {
    child.toys = child.toys.filter(toy => toy._id === doc._id)
    return child.save()
  })
  .then(next)
  .catch(next)
})

module.exports = mongoose.model('toy', Toy)