'use strict'

const EE = require('events').EventEmitter
const ee = new EE()

ee.on('speak', () => {
  console.log('Hello world!')
})

ee.emit('speak')



function fireTheThing() {
  ee.emit('sayHello', 'Ron')
}


console.log(ee)