'use strict'

const transform = require('../lib/transform')
const fs = require('fs')
require('jest')

// mock info that we might create for unit testing:
// myBmpObj = {
//   colorArray: Buffer.from('hello world')
// }

// let myCb = (err, data) => {
//   if (err) console.log(err)
//   console.log(data)
// }

describe('Transformer', function () {
  beforeAll(done => {
    done()
  })

  describe('default properties', () => {
    test('should have ...', done => {
      expect(true).toBeTrue
      done()
    })
  })
})