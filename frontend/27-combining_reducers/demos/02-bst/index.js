const BST = require('./bst')
const fs = require('fs')
let bst

[...Array(20).keys()].sort(() => .5 - Math.random()).map((n, i) => i === 0 ? bst = new BST(n) : bst.insert(new BST(n)))

let svg = bst.treeify()

fs.writeFile('./tree.html', svg, () => {})
