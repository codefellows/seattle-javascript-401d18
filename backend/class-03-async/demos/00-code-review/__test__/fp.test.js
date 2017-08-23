'use strict'

const fp = require('../lib/fp')

describe('Testing the FP module', function() {
  describe('#map method', () => {
    test('should return an array of [2, 4] given [1, 2]', () => {
      let doubles = fp.map([1, 2], n => n * 2)
      expect(doubles).toEqual([2, 4])
    })
    test('should map each string char to an array and concat 2 to each char', () => {
      let gnarf = fp.map('hello', n => n + 2)
      expect(gnarf).toEqual(['h2', 'e2', 'l2', 'l2', 'o2'])
    })
    // test('should throw an error', () => {
    //   expect(() => {
    //     fp.map()
    //   }).toThrowError()
    // })
  })
  describe('#filter method', () => {
    test('should return an array of [1, 1, 1] given [1, 2, 1, 2, 1, 2]', () => {
      let ones = fp.filter([1, 2, 1, 2, 1, 2], n => n === 1)
      expect(ones).toEqual([1, 1, 1])
    })
    test('should return an array of [f, f, f, f] given "snuffaluffagus"', () => {
      let effs = fp.filter('snuffaluffagus', n => n === 'f')
      expect(effs).toEqual(['f', 'f', 'f', 'f'])
    })
  })
  describe('#reduce method', () => {
    test('should return 6 given [1, 2, 3]', () => {
      let six = fp.reduce([1, 2, 3], (acc, curr) => acc + curr)
      expect(six).toEqual(6)
    })
    test('should return "hello" given ["h", "e", "l", "l", "o"]', () => {
      let str = fp.reduce(['h', 'e', 'l', 'l', 'o'], (acc, curr) => acc + curr)
      expect(str).toEqual('hello')
    })
  })
  describe('#concat method', () => {
    test('should return [1, 2, 3, 4] given [1, 2] and [3, 4]', () => {
      let join = fp.concat([1, 2], [3, 4])
      expect(join).toEqual([1, 2, 3, 4])
    })
    test('should return [{}, {}] given [{}] and [{}]', () => {
      let join = fp.concat([{}], [{}])
      expect(join).toEqual([{}, {}])
    })
  })
  describe('#splice method', () => {
    test('should return [3, 4] given [1, 2, 3, 4] with a start of 2 and a count of 2', () => {
      let cut = fp.splice([1, 2, 3, 4], 2, 2)
      expect(cut).toEqual([3, 4])
    })
  })
})