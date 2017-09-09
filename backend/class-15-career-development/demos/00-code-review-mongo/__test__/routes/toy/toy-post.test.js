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

  describe('POST requests', function () {
    beforeAll(() => {
      return childMock.createOne()
      .then(child => this.child = child)
      .then(() => {
        this.data = {
          name: faker.random.word(),
          desc: faker.random.words(12),
          child: this.child._id.toString(),
        }

        return superagent.post(':4000/api/toy')
        .send(this.data)
        .then(res => this.res = res)
      })
    })

    describe('Valid Requests', () => {
      test('should create a new toy record', () => {
        expect(this.res.body.name).toBe(this.data.name)
        expect(this.res.body.desc).toBe(this.data.desc)
        expect(this.res.body.child).toBe(this.data.child)
        expect(this.res.body).toHaveProperty('_id')
      })
      test('should return a status of 201 Created', () => {
        expect(this.res.status).toBe(201)
      })
    })
    describe('Invalid Requests', () => {
      test('shoudld return a 400 Bad Request given improper body', () => {
        return superagent.post(':4000/api/toy')
        .send({})
        .catch(err => {
          expect(err.status).toBe(400)
          expect(err.message).toBe('Bad Request')
        })
      })
      test('should return a 404 given a bad route', () => {
        return superagent.post(':4000/api/bad/route')
        .send({ name: 'wat', desc: 'who', child: 'why' })
        .catch(err => {
          expect(err.status).toBe(404)
          expect(err.message).toBe('Not Found')
        })
      })
    })
  })
})
