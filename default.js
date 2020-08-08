function add(num1, num2 = 20) {
  // num2 = 20 is a default parameter
  return num1 + num2;
}

const total = add(15);
const total2 = add(5, 19);
console.log(total);
console.log(total2);
