'use strict'

const childMock = require('../../lib/mocks').child
const server = require('../../../lib/server')
const superagent = require('superagent')
const faker = require('faker')

describe('Testing Child Routes', function () {
  beforeAll(server.start)
  afterAll(server.stop)
  afterAll(childMock.removeAll)

  describe('DELETE requests', function () {
    beforeAll(() => {
      return childMock.createMany(4)
      .then(children => {
        this.children = children
      })
    })

    describe('Valid Requests', () => {
      test('should return a status 204 No Content', () => {
        return superagent.delete(`:4000/api/child/${this.children[0]._id}`)
        .then(res => {
          expect(res.status).toBe(204)
        })
      })

      test('should remove a record from the db', () => {
        return superagent.delete(`:4000/api/child/${this.children[1]._id}`)
        .then(() => {
          return superagent.get(`:4000/api/child/${this.children[1]._id}`)
          .catch(err => {
            expect(err.status).toBe(404)
          })
        })
      })
    })
    describe('Invalid Requests', () => {
      test('should return a 404 Not Found given an invalid Id', () => {
        return superagent.delete(`:4000/api/child/badId`)
        .catch(err => {
          expect(err.status).toBe(404)
        })
      })
    })
  })
})
