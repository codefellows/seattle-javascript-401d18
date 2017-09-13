'use strict'

const Node = require('./node')

module.exports = class {
  constructor() {
    this.front = null
    // this.back = null // used for a double-ended queue
  }

  enqueue(val) {
    let node = new Node(val)
    let backNode

    if(!this.front) {
      this.front = node
      return this.front
    }

    _findBack(this.front)
    backNode.next = node
    return node
    
    function _findBack(node) {
      if(!node) return
      backNode = node
      _findBack(node.next)
    }
  }

  dequeue() {
    if(!this.front) return null
    let temp = this.front
    this.front = this.front.next
    temp.next = null
    return temp
  }
}