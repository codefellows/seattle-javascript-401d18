'use strict'

const User = require('../../model/user')
const faker = require('faker')

const mocks = module.exports = {}
mocks.user = {}

mocks.user.createOne = function() {
  let result = {}
  result.password = faker.internet.password()
  
  let user = new User({
    username: faker.internet.userName(),
    email: faker.internet.email()
  })

  return user.generatePasswordHash(result.password)
  .then(user => {
    result.user = user
    return user.save()
  })
  .then(user => user.generateToken())
  .then(token => {
    result.token = token
    return result
  })
}

mocks.user.removeAll = function() {
  return Promise.all([
    User.remove()
  ])
}