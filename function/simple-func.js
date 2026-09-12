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

const green = (name) => `Hello ${name}`;
console.log(green("Joy")); // Output: Hello Joy
console.log(green("Rahim")); // Output: Hello Rahim

//annonymous function
document.getElementById("btn").addEventListener("click", function() {
    console.log("Button clicked!");
});

//arrow function
document.getElementById("btn").addEventListener("click", () => {
    console.log("Button clicked!");
});

//callable function
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8

// callable function with addeventlistener
document.getElementById("btn").addEventListener("click", function() {
    console.log(add(5, 3)); // Output: 8
}); 

document.getElementById("btn").addEventListener("click", () => {
    console.log(add(5, 3)); // Output: 8
}   