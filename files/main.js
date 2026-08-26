function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

let name = fullName("Joynal", "Abedin");

document.getElementById("demo").innerHTML = "The name is  " + name;