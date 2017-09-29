const TreeNode = module.exports = class {
  constructor(val) {
    this.val = val
    this.children = []
  }

  breadthFirst(cb) {
    let q = [this]
    let current

    while(q.length) {
      current = q.shift()
      if(cb) cb(current)
      if(current.children.length) q = [...q, ...current.children]
    }
  }

  preOrder(cb) {
    _walk(this) // => the root

    function _walk(node) {
      cb(node)
      node.children.forEach(_walk)
    }
  }

  // inOrder(cb) { // push off to next week when we just have a left and right node
  //   _walk(this) // => the root

  //   function _walk(node) {
  //     cb(node)
  //     node.children.forEach(_walk)
  //   }
  // }

  postOrder(cb) {
    _walk(this) // => the root

    function _walk(node) {
      node.children.forEach(_walk)
      cb(node)
    }
  }

  insert(newNode, parentVal) {
    if(!newNode instanceof TreeNode) throw new Error('must be a valid Tree Node')

    this.preOrder(node => {
      if(!node) return 

      if(node.val === parentVal) node.children.push(newNode)
      return this
    })
  }

  prune(val) {
    this.breadthFirst(node => {
      if(!node) return
      node.children = node.children.filter(child => child.val !== val)
    })
  }

  remove(val) {

  }
}