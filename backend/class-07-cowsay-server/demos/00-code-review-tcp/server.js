'use strict'

const net = require('net')
const EE =  require('events').EventEmitter
const ee = new EE()
const Client = require('./model/client')
const cmdParser = require('./lib/command-parser')
const PORT = process.env.PORT || 3000

const server = module.exports = net.createServer()

const pool = []

ee.on('default', (client, string) => client.socket.write(`Invalid command: ${string.trim().split(' ', 1)}\n`))
ee.on('@all', (client, string) => pool.forEach(c => c.socket.write(`${client.nick}: ${string.trim().split(' ').slice(1).join(' ')}\n`)))
ee.on('@nick', (client, string) => {
  pool.filter(c => c === client)[0].nick = string
  client.socket.write(`nick changed to ${string}\n`)
})
ee.on('@dm', (client, string) => {
  let targetNick = string.trim().split(' ', 2)[1] // @dm Allie Hey there
  let target = pool.filter(c => c.nick === targetNick)[0]

  target.socket.write(`${client.nick}: ${string.trim().split(' ').slice(1).join()}\n`)
  client.socket.write(`@dm to ${target.nick}: ${string.trim().split(' ').slice(1).join()}\n`)
})

ee.on('@quit', (client) => {
  pool.forEach(c => c.socket.write(`${client.nick} has left the channel\n`))
  client.socket.emit('close', client)
})

server.on('connection', socket => {
  let client = new Client(socket)
  pool.push(client)
  pool.forEach(c => c.socket.write(`${client.nick} joined the channel\n`))

  socket.on('data', data => cmdParser(client, data, ee))
  socket.on('close', () => {
    let idx = pool.indexOf(client)
    client.socket.end() // differs from .destroy()
    delete pool[idx]
  })
  socket.on('error', console.error)
})

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`))