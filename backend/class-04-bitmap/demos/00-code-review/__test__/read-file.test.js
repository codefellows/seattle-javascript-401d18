'use strict'

const readFile = require('../lib/read-file')
const fs = require('fs')

describe('Testing read-file.js', function() {
  beforeAll(done => {
    fs.readdir(`${__dirname}/../data`, (err, files) => {
      this.files = files
      done()
    })
  })
  beforeAll(() => {
    fs.readFile(`${__dirname}/../data/${this.files[0]}`, (err, fd) => {
      this.a = fd.toString('hex', 0, 16)
    })
    fs.readFile(`${__dirname}/../data/${this.files[1]}`, (err, fd) => {
      this.b = fd.toString('hex', 0, 16)
    })
    fs.readFile(`${__dirname}/../data/${this.files[2]}`, (err, fd) => {
      this.c = fd.toString('hex', 0, 16)
    })
    fs.readFile(`${__dirname}/../data/${this.files[3]}`, (err, fd) => {
      this.d = fd.toString('hex', 0, 16)
    })
    fs.readFile(`${__dirname}/../data/${this.files[4]}`, (err, fd) => {
      this.e = fd.toString('hex', 0, 16)
    })
  })

  describe('validate that each file is read and returned in the same order', () => {
    test('should read a.txt and validate as the first item returned', done => {
      readFile(`${__dirname}/../data`, (err, data) => {
        expect(data[0]).toEqual(this.a)
        done()
      })
    })
    test('should read b.txt and validate as the second item returned', done => {
      readFile(`${__dirname}/../data`, (err, data) => {
        expect(data[1]).toEqual(this.b)
        done()
      })
    })
    test('should read c.txt and validate as the third item returned', done => {
      readFile(`${__dirname}/../data`, (err, data) => {
        expect(data[2]).toEqual(this.c)
        done()
      })
    })
    test('should read d.txt and validate as the fourth item returned', done => {
      readFile(`${__dirname}/../data`, (err, data) => {
        expect(data[3]).toEqual(this.d)
        done()
      })
    })
    test('should read e.txt and validate as the fifth item returned', done => {
      readFile(`${__dirname}/../data`, (err, data) => {
        expect(data[4]).toEqual(this.e)
        done()
      })
    })
  })

  describe('validating the path errors will throw errors', () => {
    test('should throw error given invalid directory path', () => {
      readFile('./badpath', (err) => {
        expect(err).toBeError()
      })
    })
  })
})