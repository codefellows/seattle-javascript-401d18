'use strict'

const http = require('http')
const cowsay = require('cowsay')
const urlParse = require('url').parse
const queryParse = require('querystring').parse
const bodyParse = require('./lib/body-parser')

const server = module.exports = http.createServer((req, res) => {
  req.url = urlParse(req.url)
  req.url.query = queryParse(req.url.query)
  
  bodyParse(req, (err, body) => {
    if(err) {
      // resond to the user with a 500 server error
      res.writeHead(500)
      res.end()
      return
    }

    // parse the body as json
    try {
      req.body = JSON.parse(body)
    } catch (err) {
      // if there was mal formated JSON we send back a 400 bad request
      res.writeHead(400, {'Content-Type': 'text/plain'})
      res.write('bad request: no body provided in the request')
      res.end()
      return
    }

    if(req.url.pathname === '/') {
      res.writeHead(200, {'Content-Type': 'text/plain'})
      res.write('Hello from my server')
      res.end()
      return 
    }

    if (req.method === 'GET' && req.url.pathname === '/cowsay') {
      res.writeHead(200, {'Content-Type': 'text/plain'})
      // debugger
      console.log('query', req.url.query)
      let cow = cowsay.say(
        {
          text: req.url.query.text, 
          f: req.url.query.f 
        }
      )
      res.write(cow)
      res.end()
      return
    }

    if (req.method === 'POST' && req.url.pathname === '/cowsay') {
      res.writeHead(200, {'Content-Type': 'text/plain'})
      let cow = cowsay.say({text: req.body.text})
      res.write(cow)
      res.end()
      return
    }

    // otherwise 400
    res.writeHead(400, {'Content-Type': 'text/plain'})
    let cow = cowsay.say({text: 'bad request; did not meet any available routes'})
    res.write(cow)
    res.end()
  })

})

server.listen(3000, () => console.log('server up :: 3000'))
