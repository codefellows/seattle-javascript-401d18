'use strict'

const childMock = require('../../lib/mocks').child
const server = require('../../../lib/server')
const superagent = require('superagent')
const faker = require('faker')

describe('Testing Child Routes', function () {
  beforeAll(server.start)
  afterAll(server.stop)
  afterAll(childMock.removeAll)

  describe('GET requests', function () {
    beforeAll(() => {
      return childMock.createMany(4)
      .then(children => {
        this.children = children
      })
    })
    describe('Valid Requests', () => {
      test('should return an existing record from the DB', () => {
        return superagent.get(`:4000/api/child/${this.children[0]._id}`)
        .then(res => {
          expect(res.body._id.toString()).toBe(this.children[0]._id.toString())
          expect(res.body.name).toBe(this.children[0].name)
        })
      })

      test('should return a status 200', () => {
        return superagent.get(`:4000/api/child/${this.children[0]._id}`)
        .then(res => {
          expect(res.status).toBe(200)
        })
      })

      test('should return an array of Ids given no Id specification in the route', () => {
        return superagent.get(':4000/api/child')
        .then(res => {
          expect(res.body).toBeInstanceOf(Array)
        })
      })
    })
    describe('Invalid Requests', () => {
      test('should return a 404 Not Found given an invalid Id', () => {
        return superagent.get(`:4000/api/child/badId`)
        .catch(err => {
          expect(err.status).toBe(404)
        })
      })

      test('should return a 404 to a bad route', () => {
        return superagent.get(`:4000/api/bad/route`)
        .catch(err => {
          expect(err.status).toBe(404)
        })
      })
    })
  })
})
