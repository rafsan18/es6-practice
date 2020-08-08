// function doubleIt(num) {
//   return num * 2;
// }

// New way of writing function
// const doubleIt = function (num) {
//   return num * 2;
// };

// const doubleIt = function myfun(num) {
//   return num * 2;
// };
// here
// function expression ==> const doubleIt
// function declaration ==> function(num)

// arrow function
const doubleIt = (num) => num * 2; // single parameter
const add = (x, y) => x + y; // multiple parameter

const give5 = () => 5; // no parameter

// arrow function for multiline function.
const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  return result;
};

// const result = doubleIt(50);
const result = add(50, 45);
const result2 = give5();
const result3 = doMath(7, 5);
console.log(result2);
console.log(result);
console.log(result3);
