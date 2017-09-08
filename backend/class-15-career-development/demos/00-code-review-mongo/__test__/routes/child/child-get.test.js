'use strict'

const childMock = require('../../lib/mocks').child 
const server = require('../../../lib/server')
const superagent = require('superagent')
const faker = require('faker')
require('jest') // Just an autocomplete requirement for Scott

describe('Testing Child Routes', function() {
  beforeAll(server.start)
  afterAll(server.stop)
  afterAll(childMock.removeAll)

  describe('GET Requests', function() {
    describe('Valid Requests', () => {
      beforeAll(() => {
        return childMock.createMany(4)
        .then(children => this.children = children)
      })

      test('should return an existing record from the DB given an Id in the route', () =>  {
        return superagent.get(`:4000/api/child/${this.children[0]._id}`)
        .then(res => {
          this.res = res
          expect(res.body.name).toBe(this.children[0].name)
          expect(res.body._id).toBe(this.children[0]._id.toString())
        })
      })

      test('should return status of 200 OK', () => {
        expect(this.res.status).toBe(200)
      })

      test('should return an array of Ids given no Id in the route', () => {
        return superagent.get(':4000/api/child')
        .then(res => {
          expect(res.body).toBeInstanceOf(Array)
          expect(res.body.length).toBeGreaterThan(0)
          expect(res.body).toContain(this.children[0]._id.toString())
        })
      })
    })

    describe('Invalid Requests', () => {

    })
  })
})