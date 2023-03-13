/* Write a program containing two functions to calculate the circumference and area of a circle
defined by its radius. Test it using user input.
Here are some tips for solving this exercise:
• The value of number π (Pi) is obtained with Math.PI in JavaScript.
• You might want to use the exponentiation operator² ** to perform computations.*/

//notes: r = radius, c = circumference, a = area
// c= 2PIr, a = PIr^2

let circle = function(radius){
    let circumference = 2*Math.PI*radius
    let area = Math.PI*(Math.pow(radius,2))
    console.log(`${circumference} is the circumference, and ${area} is the area.`)
}

console.log(circle(prompt("Enter the radius of the circle:")))