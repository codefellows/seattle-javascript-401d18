'use strict'

const Node = require('./node')

// module.exports = function() {
//   this.head = null
// }

// class expression
// const SLL = class {
//   constructor() {
//     this.head = null
//   }
// }

// class definition
// class SLL {
//   constructor() {
//     this.head = null
//   }
// }

module.exports = class {
  constructor() {
    this.head = null
  }

  prepend(val) {
    let node = new Node(val)
    if(!this.head) {
      this.head = node
      return node
    }
    node.next = this.head
    this.head = node
    return node
  }

  append(val) {
    let node = new Node(val)
    let lastNode

    if(!this.head) {
      this.head = node
      return node
    }

    _findLastNode(this.head)
    lastNode.next = node
    return node

    function _findLastNode(node) {
      if(!node) return
      lastNode = node
      _findLastNode(node.next)
    }
  }
}
