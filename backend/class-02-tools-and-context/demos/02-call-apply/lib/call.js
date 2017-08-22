'use strict'

function User(name, age, location) {
  console.log('user this:', this)
  this.name = name
  this.age = age
  this.location = location
}

let bob = new User('Bob', 44, 'Seattle')
console.log('Bob', bob)

function SuperUser(name, age, location) {
  console.log('super user this:', this)
  User.call(this, name, age, location)
  this.isAdmin = true
}

let annie = new SuperUser('Annie', 25, 'Portland')
console.log('Annie', annie)



// let arrTwo = [2, 4, 6, 8]
// arrTwo.map(num => num * 2)

function map(arr, callback) {
  return Array.prototype.map.call(arr, callback)
}

let doubleArr = map(arrTwo, num => num * 2)

console.log(doubleArr)

