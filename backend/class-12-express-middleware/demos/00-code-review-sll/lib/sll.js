'use strict'

const Node = require('./node')

module.exports = class {
  constructor(arr) {
    this.head = null

    if(arr) arr.forEach(val => this.append(val))
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

  removeHead() {
    if (!this.head) return null
    let temp = this.head.next
    this.head.next = null
    this.head = temp
  }

  removeNthNode(n) {
    let prev = null
    let curr 
    let counter = 1

    _findNthNode(this.head)

    // console.log('prev', prev)
    // console.log('curr', curr)

    prev.next = curr.next
    curr.next = null

    return curr

    function _findNthNode(node) {
      if(counter === n) return
      counter++
      prev = node
      curr = node.next
      _findNthNode(node.next)
    }
  }

  removeLast() {
    let secondToLast

    _setSecondToLast(this.head)

    function _setSecondToLast(node) {
      if (!node.next) return
      secondToLast = node.next
      _setSecondToLast(node.next)
    }
  }

  reverse() {
    if(!this.head || !this.head.next) return 
    
    let p1 = null
    // let p2 = this.head
    let p3

    _flipHead(this.head)

    // while(p2) {
    //  p3 = p2.next
    //  p2.next = p1
    //  p1 = p2
    //  p2 = p3 
    // }

    this.head = p1
    return this

    function _flipHead(curr) {
      if(!curr) return
      p3 = curr.next
      curr.next = p1
      p1 = curr
      curr = p3
      _flipHead(curr)
    }
  }
}
