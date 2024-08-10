let numbers = [5, 3, 8, 1, 2];


function addNumber(array, number) {
  array.push(number);
}

function removeNumber(array, number) {
  let index = array.indexOf(number);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

function sortNumbers(array) {
  return array.slice().sort((a, b) => a - b);
}


function calculateSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}


function calculateAverage(array) {
  if (array.length === 0) return 0;
  return calculateSum(array) / array.length;
}


console.log("Initial Array:");
console.log(numbers);

console.log("\nAdding number 10:");
addNumber(numbers, 10);
console.log(numbers);

console.log("\nRemoving number 3:");
removeNumber(numbers, 3);
console.log(numbers);

console.log("\nSorted Array:");
console.log(sortNumbers(numbers));

console.log("\nSum of numbers:");
console.log(calculateSum(numbers));

console.log("\nAverage of numbers:");
console.log(calculateAverage(numbers));
