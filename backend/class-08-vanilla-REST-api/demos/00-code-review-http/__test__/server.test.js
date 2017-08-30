'use strict'

const server = require('../server')
const cowsay = require('cowsay')
const superagent = require('superagent')
require('jest')

describe('Server module', function() {
  afterAll(done => {
    server.close()
    done()
  })

  describe('requests to / route', () => {
    test('a GET request', done => {
      superagent.get(':3000/')
      .end((err, res) => {
        expect(res.status).toBe(200)
        expect(res.text).toBe('Hello from my server')
        done()
      })
    })
    test('a POST request', done => {
      superagent.post(':3000/')
      .send({})
      .end((err, res) => {
        expect(res.text).toBe('Hello from my server')
        expect(res.status).toBe(200)
        done()
      })
    })
  })

  describe('requests to /cowsay route', () => {
    describe('correctly formatted', () => {
      test('a GET request', done => {
        superagent.get(':3000/cowsay')
        .query({text: 'hello!'})
        .end((err, res) => {
          this.cow = cowsay.say({text: 'hello!'})
          expect(res.text).toEqual(this.cow)
          expect(res.status).toBe(200)
          done()
        })
      })
      test('a POST request', done => {
        superagent.post(':3000/cowsay')
        .set('Content-Type', 'application/json')
        .send({'text': 'hello!'})
        .end((err, res) => {
          expect(res.text).toEqual(this.cow)
          expect(res.status).toBe(200)
          done()
        })
      })
    })
  })

  describe('requests to any other route', () => {
    describe('correctly formatted', () => {
      test('a GET request', done => {
        
        done()
      })
      test('a POST request', done => {

        done()
      })
    })
    describe('incorrectly formatted', () => {
      test('a GET request', done => {

        done()
      })
      test('a POST request', done => {

        done()
      })
    })
  })
})
