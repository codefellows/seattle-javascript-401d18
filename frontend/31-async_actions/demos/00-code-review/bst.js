let Viz = require('viz.js')

const BstNode = module.exports = class {
  constructor(key, val=null) {
    this.key = key
    this.val = val
    this.data = null
    this.parent = null
    this.left = null
    this.right = null
  }

  preOrder(cb) {
    _walk(this)

    function _walk(node) {
      cb(node)
      if(node.left) _walk(node.left)
      if(node.right) _walk(node.right)
    }
  }

  inOrder(cb) {
    _walk(this)

    function _walk(node) {
      if(node.left) _walk(node.left)
      cb(node)
      if(node.right) _walk(node.right)
    }
  }

  postOrder(cb) {
    _walk(this)

    function _walk(node) {
      if(node.left) _walk(node.left)
      if(node.right) _walk(node.right)
      cb(node)
    }
  }

  breadthFirst(cb) {
    let q = [this]
    let current

    while(q.length > 0) {
      current = q.pop()
      cb(current)
      if(current.left) q.unshift(current.left)
      if(current.right) q.unshift(current.right)
    }
    return result
  }

  contains(key) {
    if(key === this.key) return true
    if(key < this.key) {
      if(!this.left) return false
      return this.left.contains(key)
    }
    if(key > this.key) {
      if(!this.right) return false
      return this.right.contains(key)
    }
  }

  lookup(key) {
    if(key === this.key) return this
    if(key < this.key) {
      if(!this.left) return null
      return this.left.lookup(key)
    }
    if(key > this.key) {
      if(!this.right) return null
      return this.rightleft.lookup(key)
    }
  }

  insert(node) {
    if(!node instanceof BstNode) throw new Error('VALIDATION ERROR: Value must be BstNode')
    if(node.key === this.key) throw new Error('VALIDATION ERROR: Value must be unique')
    if(node.key > this.key) {
      if(!this.right) {
        this.right = node
        this.right.parent = this
      } else this.right.insert(node)
    } else if(node.key < this.key) {
      if(!this.left) {
        this.left = node
        this.left.parent = this
      } else this.left.insert(node)
    }
    return 
  }

  flatten() {
    let SLL = require('./sll')
    let s = new SLL()
    
    inOrder(node => {
      if(!node) return
      s.insert(node)
    })
    return s
  }

  getDotInfo() {
    let result = 'digraph { '

    this.preOrder(node => {
      if(!node) return
      if(node.left) result += `${node.key} -> ${node.left.key} `
      if(node.right) result += `${node.key} -> ${node.right.key} `
    })

    return `${result};}`
  }

  treeify() {
    return Viz(this.getDotInfo())
  }
}

function compareBst(a, b) {
  let result = true
  // a => null
  // !a => true !!a => false
  if(!!a !== !!b) {
    result = false 
    return
  }
  if(a.left && b.left) compareBst(a.left, b.left)
  if(a.right && b.right) compareBst(a.right, b.right)
  return result ? false : true
}