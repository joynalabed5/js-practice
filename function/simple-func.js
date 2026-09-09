//named function
const hello = function hello() {
    console.log("Hello World");
}
hello(); // Output: Hello World

const ello = (joy, rahim) => {
    console.log(`Hello ${joy} and ${rahim}`);
}
ello("Joy", "Rahim"); 

// arrow function with no return
const greet = () => "Hello!";
console.log(greet()); // Output: Hello!