'use strict'

const childMock = require('../../lib/mocks').child
const server = require('../../../lib/server')
const superagent = require('superagent')
const faker = require('faker')

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

      test('should return a new Child instance', () => {
        expect(this.res.body.name).toBe(this.data.name)
        expect(this.res.body).toHaveProperty('_id')
        expect(this.res.body).toHaveProperty('toys')
      })
    })
    describe('Invalid Requests', () => {
      test('should return a 400 given bad request body', () => {
        return superagent.post(':4000/api/child')
        .send({})
        .catch(err => {
          expect(err.status).toBe(400)
        })
      })

      test('should return a 400 given bad data types as values', () => {
        return superagent.post(':4000/api/toy')
        .send({ name: 1234 })
        .catch(err => {
          expect(err.status).toBe(400)
        })
      })
    })
  })
})
