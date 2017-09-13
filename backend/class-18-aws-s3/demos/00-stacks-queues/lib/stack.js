'use strict'

const Node = require('./node')

module.exports = class {
  constructor() {
    this.top = null
    // this.maxSize = maxSize || null
    // this.size = 0
  }

  push(val) {
    let node = new Node(val)

    if(!this.top) {
      this.top = node
      return this.top
    }

    node.next = this.top
    this.top = node
    return this.top
  }

  pop() {

  }

  peek() {

  }
}