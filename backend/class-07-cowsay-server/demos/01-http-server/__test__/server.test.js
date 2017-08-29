'use strict'

const server = require('../server.js')
const superagent = require('superagent')

describe('Testing the server file', function () {
  afterAll((done) => {
    server.close(done)
  })

  describe('POST method, /echo endpoint', () => {
    test('should return a status code of 200', done => {
      superagent.post('localhost:3000/echo')
        .send({ 'value': 'hello-world' })
        .set('Content-Type', 'application/json')
        // .type('application/json')  <- show another way to set the content type
        .end((err, res) => {
          expect(err).toBeNull()
          expect(res.status).toBe(200)
          done()
        })
    })

    test('should respond with user input', done => {
      superagent.post('localhost:3000/echo')
        .send({ 'value': 'hello-world' })
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(err).toBeNull()
          // expect(res.status).toBe(200)
          expect(res.body.value).toBe('hello-world')
          done()
        })
    })

    test('sent without a value', done => {
      // leave this one in here as an additional point to discuss where we might improve our server.js validation
      superagent.post('localhost:3000/echo')
        .send({})
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(err).toBeNull()
          expect(res.status).toBe(200)
          done()
        })
    })

    test('undefined endpoint', done => {
      superagent.post('localhost:3000/')
        .send({ 'value': 'hello-world' })
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(err).not.toBeNull()
          expect(err).toBeInstanceOf(Error)
          expect(res.status).toBe(404)
          done()
        })
    })
  })

  describe('GET method, /time endpoint', () => {
    test('should return a status code of 200', done => {
      superagent.get('localhost:3000/time')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(err).toBeNull()
          expect(res.status).toBe(200)
          done()
        })
    })

    test('should respond with the current date', done => {
      superagent.get('localhost:3000/time')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(err).toBeNull()
          console.log('res', res.body)
          // expect(res.body.date).toBeInstanceOf(Date)
          expect(res.body).toHaveProperty('now')
          expect(res.body).toHaveProperty('date')
          done()
        })
    })

    test('undefined endpoint', done => {
      superagent.get('localhost:3000/monkey')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(err).not.toBeNull()
          expect(res.status).toBe(404)
          done()
        })
    })
  })
})