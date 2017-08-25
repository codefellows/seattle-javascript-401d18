// Pure function

let x = 25

function foo(num) {
  // this is not pure - effects the x variable in the outter scope
  x += num
}

function bar(num, base) {
// this is a pure function - does not effect the value of x in the outter scope
  return base += num
}

bar(30, x)
