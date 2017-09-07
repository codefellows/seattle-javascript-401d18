'use strict'

require('dotenv').config({ path: `${__dirname}/lib/.test.env` })

const Toy = require('../model/toy')
const superagent = require('superagent')
require('../lib/server').listen(process.env.PORT)

require('jest')

describe('Testing toy routes', function() {
  describe('all requests to /api/toy', () => {
    describe('POST requests', () => {
      describe('Valid Requests', () => {

      })
      describe('Invalid Requests', () => {

      })
    })

    xdescribe('GET requests', () => {
      describe('Valid Requests', () => {

      })
      describe('Invalid Requests', () => {

      })
    })

    describe('PUT requests', function() {
      beforeAll(() => {
        return superagent.post(':4000/api/toy')
        .send({ name: 'Moana', desc: 'Badass sailor' })
        .then(res => {
          this.resPost = res
        })
      })
      afterAll(() => {
        return Promise.all([
          Toy.remove()
        ])
        // .then(() => delete this.resPost)
      })

      describe('Valid Requests', () => {
        test('should return a status of 204 No Content', () => {
          return superagent.put(`:4000/api/toy/${this.resPost.body._id}`)
          .send({ name: 'Moana', desc: 'Badass Wayfinder' })
          .then(res => {
            expect(res.status).toBe(204)
          })
        })
        test('should update the existing record in the DB', () => {
          return superagent.get(`:4000/api/toy/${this.resPost.body._id}`)
          .then(res => {
            expect(res.body.name).toBe('Moana')
            expect(res.body.desc).toBe('Badass Wayfinder')
          })
        })
      })
      describe('Invalid Requests', () => {

      })
    })

    describe('DELETE requests', () => {
      describe('Valid Requests', () => {

      })
      describe('Invalid Requests', () => {

      })
    })
  })
})