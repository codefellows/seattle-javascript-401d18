'use strict'

require('jest')
const faker = require('faker')
const server = require('../../server')
const superagent = require('superagent')

describe('Testing Toy Routes', function() {
  beforeAll(done => {
    
    done()
  })
  afterAll(done => server.close(done))

  describe('requests made to /api/toy', () => {
    describe('using GET method', () => {
      test('should return a toy object given a properly formatted request', done => {
       
      })
    })
  })
})