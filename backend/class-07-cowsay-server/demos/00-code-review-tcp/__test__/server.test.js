'use strict'

const server = require('../server')
const net = require('net')
require('jest')

describe('Server instance', function() {
  afterAll(done => {
    server.close()
    done()
  })

  describe('new client joins chat', () => {
    test('should notify other users that a new user has joined', done => {
      let client = net.connect({port: 3000}, () => {
        client.on('data', data => {
          expect(data.toString()).toMatch(/joined the channel/)
          client.end()
          done()
        })
      })
    })

    test('should write hello world to client2 from client1', done => {
      let client1 = net.connect({port: 3000}, () => { // .emit('data')
        client1.on('data', data => {
          console.log(data.toString())
          if(!data.toString().includes('joined the channel')) {
            expect(data.toString()).toMatch(/Hello world/)
          }
        })
      })
      let client2 = net.connect({port: 3000}, () => { // .emit('data')
        client2.write('@all Hello world', () => { // .emit('data')
          client1.end()
          client2.end()
          done()
        })
      })
    })
  })
})
