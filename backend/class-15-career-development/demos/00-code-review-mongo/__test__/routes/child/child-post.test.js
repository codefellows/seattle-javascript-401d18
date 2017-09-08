'use strict'

const childMock = require('../../lib/mocks').child
const server = require('../../../lib/server')
const superagent = require('superagent')
const faker = require('faker')
require('jest')

describe('Testing Child Routes', function() {
  beforeAll(server.start)
  afterAll(server.stop)
  afterAll(childMock.removeAll)

  describe('POST requests', function() {
    describe('Valid Requests', () => {
      beforeAll(() => {
        this.data = { name: faker.name.firstName() }

        return superagent.post(':4000/api/child')
        .send(this.data)
        .then(res => {
          this.res = res
        })
      })

      test('should return a status of 201', () => {
        expect(this.res.status).toBe(201)
      })
      test('should return a new Child object', () => {
        expect(this.res.body.name).toBe(this.data.name)
      })
    })

    describe('Invalid Requests', () => {
      test('should return 400 given improper body data', () => {
        return superagent.post(':4000/api/child')
        .send({})
        .catch(err => {
          expect(err.status).toBe(400)
        })
      })
    })
  })
})