function sum(a, b) {
  return a + b;
}
sum(5, 10); // returns 15

function sum(a, b, c) {
    const d = a + b + c;
    const price = `the total price of ${a} and ${b} is ${d}`;
    return price;
}
sum(5, 10, 15); // returns "the total price of 5 and 10 is 30"

// Function with default parameters
function multiply(a, b = 1) {
    return a * b;
}

// Function with rest parameters
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Function with named parameters using object destructuring
function createUser({ name, age, email }) {
    return `Name: ${name}, Age: ${age}, Email: ${email}`;
}
