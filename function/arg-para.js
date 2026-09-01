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