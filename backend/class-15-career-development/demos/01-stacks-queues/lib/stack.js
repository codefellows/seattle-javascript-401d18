const Node = require('./node')

const Stack = module.exports = class {
  constructor() {
    this.top = null
  }

  push(val) {
    let node = new Node(val)

    if(!this.top) {
      this.top = node
      return node
    }
    node.next = this.top
    this.top = node    
    return this.top
  }

  pop() {
    if(!this.top) return null
    let tmpVal = this.top.val
    this.top = this.top.next
    return tmpVal
  }
  
  peek() {
    return this.top
  }
}