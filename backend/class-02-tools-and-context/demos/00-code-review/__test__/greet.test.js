'use strict'

const greet = require('../lib/greet')

// write a function that takes a string as arg
// returns 'hello ' + name
// return null if arg not a string

describe('Testing: index.js', function() {
  describe('#greet', () => {
    test('should return Hello and the name passed as arg', () => {
      expect(greet('Scott')).toEqual('Hello Scott.')
      expect(greet('True')).toEqual('Hello True.')
    })
    test('should return null if arg not a string', () => {
      expect(greet(1)).toBeNull()
      expect(greet(true)).toEqual(null)
    })
  })
})