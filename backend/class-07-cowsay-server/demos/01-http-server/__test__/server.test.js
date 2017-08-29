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
        .send({'value': 'scott-is-awesome'})
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(err).toBeNull()
          expect(res.status).toBe(200)
          done()
        })
    })

    test('should respond with user input', done => {
      superagent.post('localhost:3000/echo')
        .send({'value': 'scott'})
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(err).toBeNull()
          expect(res.body.value).toEqual('scott')
          done()
        })
    })


    test('undefined endpoint', done => {
      superagent.post('localhost:3000/')
        .send({'value': 'scott'})
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(err).not.toBeNull()
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
        .type('application/json')
        .end((err, res) => {
          expect(err).toBeNull()
          expect(res.body).toHaveProperty('now')
          expect(res.body).toHaveProperty('date')
          done()
        })
    })

    test('undefined endpoint', done => {
      superagent.get('localhost:3000/')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(err).not.toBeNull()
          expect(res.status).toBe(404)
          done()
        })
    })
  })
})