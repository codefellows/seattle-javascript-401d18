'use strict'

const toyMock = require('../../lib/mocks').toy
const server = require('../../../lib/server')
const superagent = require('superagent')
const faker = require('faker')

describe('Testing Toy Routes', function () {
  beforeAll(server.start)
  afterAll(server.stop)
  afterAll(toyMock.removeAll)

  describe('DELETE requests', function () {
    beforeAll(() => {
      return toyMock.createOne()
      .then(toy => {
        this.toy = toy.toy
        this.child = toy.child
      })
    })

    describe('Valid Requests', () => {
      beforeAll(() => {
        return superagent.delete(`:4000/api/toy/${this.toy._id}`)
        .then(res => this.res = res)
      })

      test('should return a status of 204 No Content', () => {
        expect(this.res.status).toBe(204)
      })
      test('should remove the Toy from the DB', () => {
        return superagent.get(`:4000/api/toy/${this.toy._id}`)
        .catch(err => {
          expect(err.status).toBe(404)
        })
      })
    })

    describe('Invalid Requests', () => {
      test('should return a 404 Not Found given bad Id in route', () => {
        return superagent.delete(':4000/api/toy/badId')
        .catch(err => {
          expect(err.status).toBe(404)
        })
      })
      test('should return a 404 Not Found given bad route', () => {
        return superagent.delete(':4000/api/bad/route')
        .catch(err => {
          expect(err.status).toBe(404)
        })
      })
    })
  })
})
