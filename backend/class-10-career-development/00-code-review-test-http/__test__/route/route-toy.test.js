'use strict'

const superagent = require('superagent')
const server = require('../../server')
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'})
require('jest')

describe('Testing toy routes', function() {
  afterAll(done => server.close(done))

  describe('all requests to /api/toy', () => {
    describe('POST requests', () => {
      describe('Valid Requests', () => {
        beforeAll(done => {
          superagent.post(':3000/api/toy')
            .type('application/json')
            .send({
              name: 'barney',
              desc: 'purple dino'
            })
            .then(res => {
              this.mockToy = res.body
              this.resPost = res
              done()
            })
        })
        test('should create and return a new toy, given a valid request', () => {
          expect(this.mockToy).toBeInstanceOf(Object)
          expect(this.mockToy).toHaveProperty('name')
          expect(this.mockToy).toHaveProperty('desc')
          expect(this.mockToy).toHaveProperty('_id')
        })
        test('should have a name, given a valid request', () => {
          expect(this.mockToy.name).toBe('barney')
        })
        test('should have a desc, given a valid request', () => {
          expect(this.mockToy.desc).toBe('purple dino')
        })
        test('should have an _id, given a valid request', () => {
          expect(this.mockToy).toHaveProperty('_id')
          expect(this.mockToy._id).toMatch(/([a-f0-9]{8}(-[a-f\d]{4}){3}-[a-f\d]{12}?)/i)
        })
        test('should return a 201 CREATED, given a valid request', () => {
          expect(this.resPost.status).toBe(201)
        })
      })
      describe('Invalid Requests', () => {

      })
    })
    xdescribe('GET requests', () => {
      test('should get the record from the toy dir', done => {
        
        done()
      })
    })
    xdescribe('PUT requests', () => {
      test('should have ...', done => {

        done()
      })
    })
    describe('DELETE requests', () => {
      describe('Valid Requests', () => {
        beforeAll(done => {
          superagent.delete(':3000/api/toy')
          .query({_id: this.mockToy._id})
          .then(res => {
            this.resDelete = res
            done()
          })
        })
        test('should remove the record from the toy dir', done => {
          fs.readdirProm(`${__dirname}/../../data/toy`)
          .then(files => {
            let expectedFalse = files.includes(`${this.mockToy._id}.json`)
            expect(expectedFalse).toBeFalsy()
            done()
          })
        })
      })
      describe('Invalid Requests', () => {

      })
    })
  })
})