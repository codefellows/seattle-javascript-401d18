'use strict'

const faker = require('faker')
const Toy = require('../../model/toy')
const Child = require('../../model/child')

const mock = module.exports = {}
mock.toy = {}
mock.child = {}

mock.child.createOne = () => new Child({ name: faker.name.firstName() }).save()
mock.toy.createOne = () => {
  let result = {}

  return this.child.createOne()
  .then(child => {
    result.child = child
    return new Toy({ 
      name: faker.random.word(),
      desc: faker.random.words(12),
      child: child._id.toString()
     }).save()
  })
  .then(toy => {
    result.toy = toy
    return result
  })
}

// mockList.createMany = (n) => {
//   let mockListArray = new Array(n)
//     .fill(0).map(() => mockList.createOne())
//   return Promise.all(mockListArray)
// }

mock.child.createMany = n => {
  let childSavePromises = new Array(n)
  .fill(0).map(() => mock.child.createOne())
  return Promise.all(childSavePromises)
}

mock.toy.createMany = n => {
  let result = {}
  return this.child.createOne()
  .then(child => {
    reslut.child = child
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
    return toys
  })
}

mock.toy.removeAll = () => {
  return Promise.all([Toy.remove()])
}

mock.child.removeAll = () => {
  return Promise.all([Child.remove()])
}