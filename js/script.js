// Temperature
const celsius = 20;
const fahrenheit = (celsius * 9 / 5) + 32;
console.log(fahrenheit);

// Month
const daysInMonth = 31;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log(daysInMonth, hoursInMonth, minutesInMonth);

// Game
let health = 125;
let energy = 100;
health -= 67;
energy -= 69
console.log(health, energy)

// Shop
let totalPrice = 100;
const discount = 10;
const discountPrice = totalPrice - (totalPrice * (discount / 100));
console.log(discountPrice);

// Floor
const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log(roundedDown);


// Floating
const floatString = "45.67";
const parsedFloat = parseFloat(floatString);
console.log(parsedFloat);

// Inting
const intString = "123";
const parsedInt = parseInt(intString);
console.log(parsedInt);

// SQRT
const number = 49;
const sqrtNumber = Math.sqrt(number);
console.log(sqrtNumber);

// Converted
const integer = 42;
const stringNumber = "256";
const convertedInt = parseInt(stringNumber);
const convertedString = integer.toString()
console.log(convertedInt, convertedString);
