// Activity 2...
// The array method .map is an example of a higher-order function.
// Declare a variable with five numbers, then use .map to iterate
// through the array and multiply each array item by 3.


const num = [1, 3, 5, 7, 9];
const newNum = num.map(timesThree);

function timesThree(num) {
  return num * 3;
}

console.log(num);
console.log(newNum);

