'use strict'

const toyMock = require('../../lib/mocks').toy
const childMock = require('../../lib/mocks').child
const server = require('../../../lib/server')
const superagent = require('superagent')
const faker = require('faker')

describe('Testing Toy Routes', function () {
  beforeAll(server.start)
  afterAll(server.stop)
  afterAll(toyMock.removeAll)
  afterAll(childMock.removeAll)

  describe('GET requests', function () {
    beforeAll(() => {
      return toyMock.createOne()
      .then(res => {
        this.toy = res.toy
        this.child = res.child
      })
    })

    describe('Valid Requests', () => {
      test('should return a valid instance of a Toy', () => {
        return superagent.get(`:4000/api/toy/${this.toy._id}`)
        .then(res => {
          this.res = res
          expect(res.body.name).toBe(this.toy.name)
          expect(res.body.child).toBe(this.toy.child.toString())
        })
      })
      test('should return a status of 200', () => {
        expect(this.res.status).toBe(200)
      })
      test('should return an array of Ids given no Id in route', () => {
        return superagent.get(`:4000/api/toy`)
        .then(res => {
          expect(res.body.length).toBe(1)
        })
      })
    })
    describe('Invalid Requests', () => {
      test('should return a 404 Not Found given a bad Id', () => {
        return superagent.get(`:4000/api/toy/badId`)
        .catch(err => {
          expect(err.status).toBe(404)
        })
      })
      test('should return 404 given bad route', () => {
        return superagent.get(`:4000/api/bad/route`)
        .catch(err => {
          expect(err.status).toBe(404)
        })
      })
    })
  })
})
