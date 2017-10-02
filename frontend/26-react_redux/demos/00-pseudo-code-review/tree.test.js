let TreeNode = require('./tree')
require('jest')

describe('Testing TreeNode', function() {
  test('should instantiate a new TreeNode', () => {
    expect('...')
  })

  test('should insert a new node into the tree', () => {
    let root = new TreeNode(1)
    expect(root.children.length).toBeFalsy()
    root.insert(new TreeNode(2), 1)
    expect(root.children.length).not.toBeFalsy()
    expect(root.children[0].val).toBe(2)
  })
})
