// Big-O - O(1) Contstant

function findVal(obj, keyOne, keyTwo) {
  return {
    name: obj[keyTwo],
    age: obj[keyTwo]
  }
}


// Big-O - O(n) Linear
function findEle(arr, val, valTwo) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === val || arr[i] === valTwo) return i
  }
  return null
}

// Big-O - O(n^2)

// Big-O - O(log n)

// Big-O - O(2^n)


