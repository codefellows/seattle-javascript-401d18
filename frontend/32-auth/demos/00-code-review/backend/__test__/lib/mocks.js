'use strict'

const faker = require('faker')
const Toy = require('../../model/toy')
const Child = require('../../model/child')

const mock = module.exports = {}
mock.toy = {}
mock.child = {}

mock.child.createOne = () => new Child({ name: faker.name.firstName() }).save()

mock.child.createMany = n => {
  let childSavePromises = new Array(n)
    .fill(0).map(() => mock.child.createOne())
  return Promise.all(childSavePromises)
}

mock.toy.createOne = () => {
  let result = {}

  return mock.child.createOne()
  .then(child => {
    result.child = child
    return new Toy({ 
      name: faker.random.word(),
      desc: faker.random.words(12),
      child: child._id
     }).save()
  })
  .then(toy => {
    result.toy = toy
    return result
  })
}

mock.toy.createMany = n => {
  let result = {}
  return mock.child.createOne()
  .then(child => {
    result.child = child
    let toySavePromises = new Array(n).fill(0)
      .map(() => new Toy({
        name: faker.random.word(),
        desc: faker.random.words(12),
        child: child._id.toString()
      }).save())
    return Promise.all(toySavePromises)
  })
  .then(toys => {
    result.toys = toys
    return result
  })
}

mock.toy.removeAll = () => Promise.all([Toy.remove()])
mock.child.removeAll = () => Promise.all([Child.remove()])