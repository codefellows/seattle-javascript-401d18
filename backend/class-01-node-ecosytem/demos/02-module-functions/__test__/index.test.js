'use strict'

const greet = require('../lib/greet')

describe('index.js', function() {
  describe('default properties', () => {
    test('should have a default name of Fred', () => {
      expect(greet.name).toEqual('Fred')
    })
    test('should be falsy', () => {
      expect(false).toBeFalsy()
    })
  })
  describe('#bark', () => {
    test('should return some woofs and the name Fred', () => {
      expect(greet.bark()).toEqual('woof, woof, Fred')
    })
  })
  describe('#meow', () => {
    test('should return some woofs and the name Fred', () => {
      expect(greet.meow()).toEqual('meow, meow, Fred')
    })
  })
})