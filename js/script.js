// Temperature
const celsius = 20;
const fahrenheit = (20 * 9 / 5) + 32;
console.log(fahrenheit);

// Month
const daysInMonth = 31;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log(daysInMonth, hoursInMonth, minutesInMonth);

// Game
const health = 125;
const energy = 100;
console.log(health - 67);
console.log(energy - 69);

// Shop
const totalPrice = 100;
const discount = 10;
const discountPrice = totalPrice / totalPrice * discount;
console.log(discountPrice);

// Floating
const floatString = "45.67";
const parsedFloat = parseFloat(floatString);
console.log(parsedFloat);

// Inting
const intString = "123";
const parsedInt = parseInt(intString);
console.log(parsedInt);

// Converted
const integer = 42;
const stringNumber = "256";
const convertedInt = parseInt(stringNumber);
const convertedString = integer.toString()
console.log(convertedInt, convertedString);
