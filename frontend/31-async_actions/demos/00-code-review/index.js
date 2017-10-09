const BST = require('./bst')
const fs = require('fs')
let bst

// let arr = [...Array(10).keys()]
// arr.sort(() => .5 - Math.random())

[5, 2, 8, 1, 25, 34].map((n, i) => i === 0 ? bst = new BST(n, i) : bst.insert(new BST(n, i)))

let svg = bst.treeify()

fs.writeFile('./tree.html', svg, () => {})
