'use strict'

const math = require('../lib/arithmetic')

// create an add (two ints) and sub (two ints) method 
// return the sum or diff respectively
// if args no number, NaN

describe('Testing arithmetic.js', function() {
  describe('#add', () => {
    test('should accept two numbers and return the sum', () => {
      expect(math.add(2, 2)).toEqual(4)
    })
    test('should return NaN if args are not numbers', () => {
      expect(math.add('a', 'b')).toBeNaN()
      expect(math.add(1, 'b')).toBeNaN()
    })
  })
  describe('#sub', () => {
    test('should accept two numbers and return the diff', () => {
      expect(math.sub(6, 2)).toEqual(4)
    })
    test('should return NaN if args are not numbers', () => {
      expect(math.sub('a', 'b')).toBeNaN()
      expect(math.sub(1, 'b')).toBeNaN()
    })
  })
})