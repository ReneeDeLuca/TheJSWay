//Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.

const fullName = prompt("Enter your full name:")
alert(`Hello, ${fullName}`)

//Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.

const price = prompt("Enter product price:")
console.log(Number(price) * 1.206)
//need to convert % to decimal, otherwise modulus

//Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.
//The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.
let tempC = prompt("What's the current temperature in Celsius?")
console.log("The temperature in Fahrenheit is " + ((Number(tempC) * (9/5)) + 32))

// Variable swapping
// Observe the following program.

let number1 = 5;
let number2 = 3;
//Add the necessary code to swap the values of variables number1 and number2
number1 -= 2
number2 += 2


console.log(number1); // Should show 3
console.log(number2); // Should show 5
