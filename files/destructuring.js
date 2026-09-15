const product = { name: 'Laptop', price: 1000, stock: 5 };


const { name, price, stock } = { name: 'Laptop', price: 1000, stock: 5 };


// const discount = product.price * 0.1;
// const price = product.price;

console.log(name); // Output: Laptop
console.log(price); // Output: 1000
console.log(stock); // Output: 5

const device = { brand: 'Smartphone', price: 500, stock: 10 };


const numbers = [1, 2, 3, 4, 5];
const [first, second, third] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3
