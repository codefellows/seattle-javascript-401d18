'use strict'

const index = require('../index.js')

// NOTE: General Pattern for writing tests
// describe('ModuleName', function() {
//   describe('default properties', () => {
//     test('should have ...' , () => {
//       expect(true).toBeTrue
//     })
//   })
//   describe('#someMethod', () => {
//     test('should have ...' , () => {
//       expect(true).toBeTrue
//     })
//   })
// })

describe('index.js', function() {
  test('default properties', () => {
    expect(index.name).toEqual('Katherine')
  })
})