'use strict'

const toyMock = require('../../lib/mocks').toy
const server = require('../../../lib/server')
const superagent = require('superagent')
const faker = require('faker')

describe('Testing Toy Routes', function () {
  beforeAll(server.start)
  afterAll(server.stop)
  afterAll(toyMock.removeAll)

  describe('PUT requests', function () {
    beforeAll(() => {
      return toyMock.createOne()
      .then(toy => {
        this.toy = toy.toy
        this.child = toy.child
      })
    })

    describe('Valid Requests', () => {
      beforeAll(() => {
        return superagent.put(`:4000/api/toy/${this.toy._id}`)
        .send({ name: 'Will' })
        .then(res => this.res = res)
      })

      test('should return a status of 204 No Content', () => {
        expect(this.res.status).toBe(204)
      })
      test('should update the name to Will in the DB', () => {
        return superagent.get(`:4000/api/toy/${this.toy._id}`)
        .then(res => {
          expect(res.body.name).toBe('Will')
        })
      })
    })
    describe('Invalid Requests', () => {
      test('should return a status 404 Not Found given bad Id', () => {
        return superagent.put(':4000/api/toy/badId')
        .send({ name: 'Will' })
        .catch(err => {
          expect(err.status).toBe(404)
        })
      })
      test('should return a 400 Bad Request given bad request body', () => {
        return superagent.put(`:4000/api/toy/${this.toy._id}`)
        .send({})
        .catch(err => {
          expect(err.status).toBe(400)
        })
      })
    })
  })
})
