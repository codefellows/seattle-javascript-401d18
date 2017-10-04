const Node = require('./node')

const Queue = module.exports = class {
  constructor() {
    this.head = null
    this.tail = null
  }

  enqueue(val) {
    let node = new Node(val)
    if(!this.head) {
      this.head = this.tail = node
      return node
    }

    this.tail.next = node
    this.tail = node
    return this.tail
  }

  dequeue() {
    if(!this.head) return null
    if(this.head == this.tail) this.head = this.tail = null
    else {
      let tmp = this.head
      this.head = tmp.next
      tmp.next = null
      return tmp
    }
  }
}