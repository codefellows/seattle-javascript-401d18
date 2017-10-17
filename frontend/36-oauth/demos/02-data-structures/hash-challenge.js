function wordCount(str) {
  // instantiate a new hash table (SLL for each bucket)
  // split the string into an array of words
  // map array of words
    // hash.get using the hashed word
      // if hash exists: 
        // traverse SLL in bucket to find word
          // if word exists
            // increment count
      // else hash.set using hashed word as key, and {word: '', count: 1} as value
  let hashTable = new hashTable(1024)
  let strArr = str.split(' ')

  for(i = 0; i < strArr.length; i++) {
    let tmp = hashTable.get(hashTable.hash(strArr[i]))
    if(!tmp) hashTable.set(hashTable.hash(strArr[i]), {word: strArr[i], count: 1})
    else {
      let current = tmp

      while(current) {
        if(current.val.word === strArr[i]) {
          current.val.count++
          break
        }
        current = current.next
      }

      hashTable.set(hashTable.hash(strArr[i]), {word: strArr[i], count: 1})
    }
  }
}

function getTopFive(hashTable) {
  
}