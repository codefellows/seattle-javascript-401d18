const TreeNode = module.exports = class {
  constructor(val) {
    this.val = val
    this.children = []
  }

  breadthFirst(cb) {
    let q = [this]
    let current

    while(q.length) {
      current = q.shift() // q => [empty]
      if(cb) cb(current)
      if(current.children.length) q = [...q, ...current.children]
    }
  }

  insert(node, parentVal) {
    
  }
}