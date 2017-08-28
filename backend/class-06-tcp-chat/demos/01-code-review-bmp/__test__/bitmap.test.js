'use strict'

const Bitmap = require('../lib/bitmap')
const fs = require('fs')
// require('jest')

describe('Bitmap Constructor', function() {
  beforeAll(done => {
    fs.readFile(`${__dirname}/../assets/bitmap.bmp`, (err, data) => {
      this.bmp = new Bitmap(data)
      done()
    })
  })

  describe('default properties', () => {
    test('should have a AllData property with a value of a raw Buffer', done => {
      expect(this.bmp).toHaveProperty('all')
      expect(this.bmp.all).toBeInstanceOf(Buffer)
      done()
    })
    test('should have a Type property of "BM"', done => {
      expect(this.bmp).toHaveProperty('type')
      expect(this.bmp.type).toBe('BM')
      done()
    })
    test('should have a Size property', done => {
      expect(this.bmp).toHaveProperty('size')
      done()
    })
    test('should have an Offset property set to 1078', done => {
      expect(this.bmp).toHaveProperty('offset')
      expect(this.bmp.offset).toBe(1078)
      done()
    })
    test('should have HeaderSize property', done => {
      expect(this.bmp).toHaveProperty('headerSize')
      done()
    })
    test('should have a Width property', done => {
      expect(this.bmp).toHaveProperty('width')
      done()
    })
    test('should have a Height property', done => {
      expect(this.bmp).toHaveProperty('height')
      done()
    })
    test('should have a BitsPerPixel property', done => {
      expect(this.bmp).toHaveProperty('bitsPerPixel')
      done()
    })
    test('should have a ColorArray property with a value of a raw buffer', done => {
      expect(this.bmp).toHaveProperty('colorArray')
      expect(this.bmp.colorArray).toBeInstanceOf(Buffer)
      done()
    })
  })
})