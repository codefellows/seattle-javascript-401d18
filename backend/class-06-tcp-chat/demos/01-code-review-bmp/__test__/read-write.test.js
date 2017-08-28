'use strict'

const rw = require('../lib/read-write')
const fs = require('fs')
require('jest')

describe('Read-Write', function () {
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