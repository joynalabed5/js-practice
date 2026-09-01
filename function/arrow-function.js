function add(num1, num2) {
  return num1 + num2;
}

//function expression
const addExpression = function(num1, num2) {
  return num1 + num2;
};

//arrow function
const addArrow = (num1, num2) => {
  return num1 + num2;
};

//arrow function with implicit return
const addArrowImplicit = (num1, num2) => num1 + num2;
console.log(addArrowImplicit(5, 10)); // Output: 15 

//arrow function with single parameter
const square = num => num * num;
console.log(square(5)); // Output: 25   

//arrow function with no parameters
const greet = () => "Hello!";
console.log(greet()); // Output: Hello!

//multi-line arrow function 
const multiply = (num1, num2) => {
  const result = num1 * num2;
  return result;
}
console.log(multiply(5, 10)); // Output: 50

const numbers = [1, 2, 3, 4, 5];