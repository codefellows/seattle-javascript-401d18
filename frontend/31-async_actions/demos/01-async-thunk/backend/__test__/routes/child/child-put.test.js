'use strict'

const childMock = require('../../lib/mocks').child
const server = require('../../../lib/server')
const superagent = require('superagent')
const faker = require('faker')

describe('Testing Child Routes', function () {
  beforeAll(server.start)
  afterAll(server.stop)
  afterAll(childMock.removeAll)

  describe('PUT request', function () {
    beforeAll(() => {
      return childMock.createOne()
      .then(child => {
        this.child = child
      })
    })

    describe('Valid requests', () => {
      test('should return a 204 No Content', () => {
        return superagent.put(`:4000/api/child/${this.child._id}`)
        .send({ name: 'Moana' })
        .then(res => {
          expect(res.status).toBe(204)
        })
      })

      test('should return an updated recod from the DB', () => {
        return superagent.get(`:4000/api/child/${this.child._id}`)
        .then(res => {
          expect(res.body.name).toBe('Moana')
        })
      })
    })

    describe('Invalid requests', () => {
      test('should return a 404 Not Found given a bad _id', () => {
        return superagent.put(':4000/api/child/badid')
        .send({ name: 'will' })
        .catch(err => {
          expect(err.status).toBe(404)
        })
      })

      test('should return a 400 given bad request data', () => {
        return superagent.put(`:4000/api/child/${this.child._id}`)
        .send({ wat: 'heyo' })
        .catch(err => {
          expect(err.status).toBe('400')
        })
      })
    })
  })
})
