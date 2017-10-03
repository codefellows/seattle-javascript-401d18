let Viz = require('viz.js')

let BstNode = module.exports = class {
  constructor(key, val=null) {
    this.key = key
    this.val = val
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

  breadthFirst(cb) {
    let q = [this]
    let current

    while(q.length) {
      current = q.pop()
      cb(current)
      if(current.left) q.unshift(current.left)
      if(current.right) q.unshift(current.right)
    }
  }

  insert(node) {
    if(!node instanceof BstNode) throw new Error('VALIDATION ERROR: node must be instance of BST')
    if(node.key === this.key) throw new Error('VALIDATION ERROR: node must have a unique key')
    if(node.key > this.key) {
      if(!this.right) this.right = node
      else this.right.insert(node)
    } else if(node.key < this.key) { // could also be written without a condition as 'else {}'
      if(!this.left) this.left = node
      else this.left.insert(node) 
    }
    return
  }


  // helper methods for providing an HTML viz document of the tree
  getDotInfo() {
    let result = 'digraph { '

    this.preOrder(node => {
      if(!node) return
      if(node.left) result += `${node.key} -> ${node.left.key}`
      if(node.right) result += `${node.key} -> ${node.right.key}`
    })

    return `${result};}`
  }

  treeify() {
    return Viz(this.getDotInfo())
  }
}