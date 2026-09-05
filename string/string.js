const country = "USA";
const capital = "Washington, D.C.";
const population = 331000000;
console.log(typeof country); // string
console.log(country.length); // 3
console.log(country[0]); // U

console.log(capital.toUpperCase()); // WASHINGTON, D.C.
console.log(capital.includes("Washington")); // true    
console.log(country + " " + capital); // USA Washington, D.C.
console.log(country.slice(0, 1)); // U