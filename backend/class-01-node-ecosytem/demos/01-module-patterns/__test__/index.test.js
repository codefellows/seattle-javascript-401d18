'use strict'

const index = require('../index.js')

describe('index.js', function() {
  test('default properties', () => {
    expect(index.name).toEqual('Katherine')
  })
})