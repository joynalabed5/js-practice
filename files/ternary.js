4>3 ? console.log("4 is greater than 3") : console.log("4 is not greater than 3");

const age = 20;
age >= 18 ? console.log("You are an adult") : console.log("You are a minor");   

const number = 10;
number % 2 === 0 ? console.log("The number is even") : console.log("The number is odd");

// Using ternary operator to assign a value
const isEven = number % 2 === 0 ? true : false;
console.log(isEven); // Output: true    

// Using ternary operator to return a value
const result = number % 2 === 0 ? "Even" : "Odd";
console.log(result); // Output: Even

// Using ternary operator in a function
function checkAge(age) {
  return age >= 18 ? "You are an adult" : "You are a minor";
}       

// Example usage
console.log(checkAge(20));
