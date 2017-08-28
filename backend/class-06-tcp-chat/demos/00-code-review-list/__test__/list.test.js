'use strict'

// sample setup for what testing the list object may look like.

describe('FP.js', function() {
  beforeAll(() => this.list = new List({ name: 'a', age: 25 }, { name: 'b', age: 30 }))
  describe('#map', () => {
    describe('what functionality of this method we are testing', () => {
      test('should return a new List with modified objects', () => {
        let newList = this.list.map(ele => {
          return {
            firstName: ele.name,
            daysOld: ele.age * 365
          }
        })
  
        // Reminder: Generally want to limit your test assertions to no more than 2 `expects`
        expect(newList[0].firstName).toBe('a')
        expect(newList[0]).toHaveProperty('firstName')

        // The following expect should be separated out to it's own test block
        // That will explicitely define what test constraints this assertion is validating.
        expect(newList[0].daysOld).toBe(9125)
      })
    })
  })
})