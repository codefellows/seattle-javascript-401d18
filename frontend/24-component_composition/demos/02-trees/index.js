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

  }

  inOrder(cb) {

  }

  postOrder(cb) {

  }

  insert(node, parentVal) {
    
  }

  prune(val) {

  }

  remove(val) {

  }
}