'use strict'

const faker = require('faker')
const mocks = require('../lib/mocks')
const server = require('../../lib/server')
const Gallery = require('../../model/gallery')
const superagent = require('superagent')
require('jest')

describe('Testing Gallery Routes', function() {
  beforeAll(server.start)
  afterAll(server.stop)
  afterEach(mocks.user.removeAll)
  afterEach(mocks.gallery.removeAll)

  describe('POST', function() {
    beforeAll(() => {
      this.galleryFake = { name: faker.random.word(), desc: faker.random.words(12) }

      return mocks.user.createOne()
      .then(userData => this.userData = userData)
      .then(() => {
        return superagent.post(':4444/api/gallery')
        .set('Authorization', `Bearer ${this.userData.token}`)
        .send(this.galleryFake)
      })
      .then(res => this.res = res)
    })

    describe('Valid Requests', () => {
      test('should return a status 200', () => {
        expect(this.res.status).toBe(200)
      })
      test('should return the new gallery resource', () => {
        expect(this.res.body.name).toBe(this.galleryFake.name)
        expect(this.res.body.desc).toBe(this.galleryFake.desc)
      })
      test('should have a userId prop', () => {
        expect(this.res.body).toHaveProperty('userId')
      })
    })

    describe('Invalid Requests', () => {
      test('should return a status 401 given no Auth creds', () => {
        return superagent.post(':4444/api/gallery')
        .send({ name: 'wat', desc: 'who' })
        .catch(err => {
          expect(err.status).toBe(401)
        })
      })

      test('should return a 401 given bad token', () => {
        return superagent.post(':4444/api/gallery')
        .set('Authorization', 'Bearer bad-token')
        .send({ name: 'wat', desc: 'who' })
        .catch(err => {
          expect(err.status).toBe(401)
        })
      })

      test('should return 400 given bad request body', () => {
        return superagent.post(':4444/api/gallery')
        .set('Authorization', `Bearer ${this.userData.token}`)
        .send({ name: 'wat' })
        .catch(err => {
          // console.log(err)
          expect(err.status).toBe(400)
        })
      })
    })
  })

  describe('GET', function() {
    describe('Valid Requests', () => {

    })

    describe('Invalid Requests', () => {

    })
  })

  describe('PUT', function() {
    describe('Valid Requests', () => {

    })

    describe('Invalid Requests', () => {

    })
  })

  describe('DELETE', function() {
    describe('Valid Requests', () => {

    })

    describe('Invalid Requests', () => {

    })
  })
})