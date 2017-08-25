'use strict'

const List = require('../lib/list')

describe('Testing List Module:', function() {
  beforeAll(() => this.list = new List())
  afterAll(() => delete this.list)

  // afterEach()
  
  describe('Given a new instance it...', () => {
    // beforeEach()
    test('should have a length property of 0' , done => {
      expect(this.list.length).toBe(0)
      done()
    })
  })
})