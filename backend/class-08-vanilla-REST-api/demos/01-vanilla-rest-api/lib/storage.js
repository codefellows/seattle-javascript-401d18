'use strict'

const debug = require('debug')('http:storage')

const storage = module.exports = {}
const memory = {}
// const memory = {
//   'toy': {
//     '123-456-789': {_id: '123-456-789', name: 'barney', desc: 'purple dino'}
//   }
// }

storage.create = function(schema, item) {
  debug('#create')
  if(!schema) return Promise.reject(new Error('cannot create; schema required'))
  if(!item) return Promise.reject(new Error('cannot create; item required'))
  if(!memory[schema]) memory[schema] = {}

  memory[schema][item._id] = item
  return Promise.resolve(item)
}

storage.fetchOne = function(schema, itemId) {
  // These two formats are effectively the same functionality; different formats
  // if(!schema) return Promise.reject(new Error('cannot get item; schema required'))
  // if(!itemId) return Promise.reject(new Error('cannon get item; itemId required'))
  // if(!memory[schema]) return Promise.reject(new Error('cannot get item; schema does not exist'))
  // if(!memory[schema][itemId]) return Promise.reject(new Error('cannot get item; item does not exist'))
  
  // return Promise.resolve(memory[schema][itemId])

  return new Promise((resolve, reject) => {
    if(!schema) return reject(new Error('cannot get item; schema required'))
    if(!itemId) return reject(new Error('cannon get item; itemId required'))
    if(!memory[schema]) return reject(new Error('cannot get item; schema does not exist'))
    if(!memory[schema][itemId]) return reject(new Error('cannot get item; item does not exist'))

    return resolve(memory[schema][itemId])
  })
}
