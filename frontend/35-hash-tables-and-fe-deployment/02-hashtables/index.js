class HashTable {
  constructor(size=4096) {
    this.size = size
    this.memory = [...Array(this.size)]
  }

  hashKey(key) {
    return key.split('').reduce((a, b) => a + b.charCode(0), 0) % this.size
  }

  set(key, value) {
    // NOTE: This does not handle collisions.
    this.memory[this.hashKey(key)] = value
  }

  get(key) {
    // NOTE: If we use another data structure for each bucket, this would require traversal 
    return this.memory[this.hashKey(key)]
  }

  remove(key, anotherSearchTerm) {
    let address = this.hashKey(key)
    this.memory[address] ? delete this.memory[address] : new Error('key invalid')
  }
}