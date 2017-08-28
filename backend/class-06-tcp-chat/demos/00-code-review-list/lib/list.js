'use strict';

// all the functions in this file are considered "pure functions"
// pure functions are functions that do not mutate any data that has been
// defined outside of their scope.
//
// this means that the methods on List do not change the instance
// of the list that calls the function, instead they create and return
// a new Array that has the desired change

// TODO: refactor the constructor into a factory function
const List = module.exports = function() {
  // this will create indexed values with all the arguments passed into it
  for (let key in arguments) {
    this[key] = arguments[key];
  }

  this.length = arguments.length;
}

// O(n)
List.prototype.copy = function () {
  let result = new List();
  for (let key in this) {
    result[key] = this[key];
  }
  return result;
}

// O(n) because it runs copy
List.prototype.push = function (value) {
  let result = this.copy()
  result[result.length++] = value;
  return result;
}

// O(n) because it runs copy
// returns {value, list}
// where value is the last item on the array
// and list is the new List with the popped value
// this was done to keep pop a "pure function"
List.prototype.pop = function () {
  let result = this.copy();
  delete result[--result.length];
  //copy.length--;

  return {
    value: this[this.length - 1],
    list: result,
  }
}

// [1, 2, 3, 4].reduce((acc, curr, idx, arr) => acc + curr) // => 10
// [1, 2, 3, 4].reduce((acc, curr, idx, arr) => acc + curr, 0) // => 10
// [{}, {}, {}].reduce((acc, curr, idx, arr) => {}, [])

// O(n)
List.prototype.reduce = function (callback, initial) {
  let i = 0;
  let result = initial ? initial : this[i++];

  for (i; i < this.length; ++i) {
    result = callback(result, this[i], i, this);
  }

  return result;
}

// [1, 2, 1, 2, 3, 4].filter((ele, idx, arr) => {
//   return ele === 2
// })

// O(n)
List.prototype.filter = function (callback) {
  let result = new List();
  for (let i = 0; i < this.length; ++i) {
    if (callback(this[i], i, this)) {
      result[result.length++] = this[i];
    }
  }

  return result;
}

// [{ name: 'a', age: 25 }, { name: 'b', age: 30 }].map(ele => {
//   return {
//     firstName: ele.name,
//     daysOld: ele.age * 365
//   }
//   }) // => [{firstName: 'a', daysOld: 9125}, {...}]

// O(n)
List.prototype.map = function (callback) {
  let result = new List();
  for (let i = 0; i < this.length; ++i) {
    result[i] = callback(this[i], i, this);
  }

  return result;
}


// O(n)
List.prototype.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}

// create an instance of List
let nums = new List(1, 33, 4, 53, 6, 24);
console.log('nums', nums);
console.log(); // these empty console logs just make the output more easy to read


// arrow functions can be assigned to variables to name them!!!!!
let isEven = num => !(num & 1);
let evens = nums.filter(isEven); // keeps all the numbers that are even
console.log('evens', evens);
// !(num & 1) uses the bitwise and opperator to determine if a number is even
// nums.filter takes the isEven function as an argument and returns a List that
// only has even numbers.
// naming functions is a big part of createing good functional programs
// naming a function makes the programg more readable
// "isEven" is much more readable than "num => !(num &1)"

// the above filter statement could also be written
// let evens = nums.filter(num => !(num & 1))
// I would argue this satement format is less readable


// forEach takes a function as an argument
// if we pass console.log as the function we can see the values that are passed
// to the callback they will be "(value, index, list)"
console.log('using console.log as an argument to forEach on evens')
evens.forEach(console.log)
console.log();


// map takes a function as an argument and creates a new list
// where each index is the result of that function
// when called with "(value, index, list)"
// create a new List where each index is Math.sqrt(nums[index])
let squareRoots = nums.map(Math.sqrt)
console.log('squareRoots', squareRoots);
console.log();


// @getify on github call's reduce "the swiss army knife of functional programming"
// reduce allows you to accumulate information
// it could be used to implement map and filter
// here we use reduce to get the sum of all the numbers in the list
let sum = nums.reduce((accumulator, current) => accumulator + current)
console.log('sum', sum);
console.log();

// this is how you implement map with reduce
let squareMap = nums.reduce((acc, current) => {
  acc.push(current * current);
  return acc;
}, []);
console.log('squareMap', squareMap);
console.log();

//TODO: implement filter with reduce

// push creates a new List with a new value at the end
console.log('nums.push(6000)', nums.push(6000));
console.log();


// push pop returns an object with the last value and a new List
// with the last value removed
console.log('nums.pop()', nums.pop());
console.log();
