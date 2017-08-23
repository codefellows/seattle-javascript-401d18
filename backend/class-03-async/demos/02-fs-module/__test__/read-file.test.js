'use strict'

const readFile = require('../lib/read-file')

describe('My FS module', function() {
  test('should return some data', done => {
    console.log(readFile.read())
    done()
  })

  test('should return some data', done => {
    console.log(readFile.read())
    done()
  })

  test('should return some data', done => {
    console.log(readFile.read())
    done()
  })
})