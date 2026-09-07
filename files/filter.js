//filter
const filter = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};

//example usage
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filter(numbers, (num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

//filter with arrow function
const filterArrow = (arr, callback) => arr.filter(callback);
console.log(filterArrow(numbers, (num) => num % 2 === 0)); // Output: [2, 4]  

//filter with ternary operator
const filterTernary = (arr, callback) => {
  return arr.filter((item) => callback(item) ? true : false);
};
console.log(filterTernary(numbers, (num) => num % 2 === 0)); // Output: [2, 4]