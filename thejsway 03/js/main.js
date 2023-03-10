//Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account

const todayIs = prompt("What day is today?")
if(todayIs.toLowerCase() == "monday"){
    console.log("Tomorrow is Tuesday")
}else if(todayIs.toLowerCase() == "tuesday"){
    console.log("Tomorrow is Wednesday")
}else if(todayIs.toLowerCase() == "wednesday"){
    console.log("Tomorrow is Thursday")
}else if(todayIs.toLowerCase() == "thursday"){
    console.log("Tomorrow is Friday")
}else if(todayIs.toLowerCase() == "friday"){
    console.log("Tomorrow is Caturday")
}else if(todayIs.toLowerCase() == "saturday"){
    console.log("Tomorrow is Sunday")
}else if(todayIs.toLowerCase() == "sunday"){
    console.log("Tomorrow is Monday")
}else if(todayIs.toLowerCase() == "caturday"){
    console.log("Everyday is Caturday when you're a cat")
}else{
    console.log("That is not a day of the week.")
}

//Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases

let numA = Number(prompt("Enter a number"))
let numB = Number(prompt("Enter another number"))
if(numA > numB){
    console.log(numA + " is higher than " + numB)
}else if(numA < numB){
    console.log(numB + " is higher than " + numA)
}else if(numA === numB){
    console.log("It's a tie!")
}else{
    console.log("Invalid input! Try again.")
}

//Take a look at the following program.
let nb1 = Number(prompt("Enter nb1:")); //1. nb1=nb2=nb3=4 
let nb2 = Number(prompt("Enter nb2:")); //2. nb1=4,nb2=3,nb3=2
let nb3 = Number(prompt("Enter nb3:")); //3. nb1=2,nb2=4,nb3=0

if (nb1 > nb2) {
    nb1 = nb3 * 2;
} else {
    nb1++;
    if (nb2 > nb3) {
        nb1 += nb3 * 3;
    } else {
        nb1 = 0;
        nb3 = nb3 * 2 + nb2;
    }
}
console.log(nb1, nb2, nb3);

//Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their initial values.

//Initial values:  
//1. nb1=nb2=nb3=4
//2. nb1=4,nb2=3,nb3=2
//3. nb1=2,nb2=4,nb3=0

//nb1 final value
//1. 0
//2. 4
//3. 3

//nb2 final value
//1. 4
//2. 3
//3. 4

//nb3 final value
//1. 12
//2. 2
//3. 0

//Check your predictions by executing the program.


//Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

let month = prompt("What month of the year is it?(Enter a number from 1-12)")

if(Number(month) === 1 || Number(month) === 3 || Number(month) === 5 || Number(month) === 7 || Number(month) === 8 || Number(month) === 10 || Number(month) === 12){
    console.log("The month has 31 days.")
}else if(Number(month) === 4 || Number(month) === 6 || Number(month) === 9 || Number(month) === 11){
    console.log("The month has 30 days.")
}else if(Number(month) === 2){
    console.log("The month has 28 days.")
}else{
    console.log("Input is not a number between 1 and 12")
}


//Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account

//This is not as simple as it seems… Look at the following results to see for yourself:
// • 14h17m59s ⇒ 14h18m0s
// • 6h59m59s ⇒ 7h0m0s
// • 23h59m59s ⇒ 0h0m0s (midnight)

let timePlusOne = function(hours,minutes,seconds){
    if(seconds < 59){
        seconds++
        console.log("Time plus one second is:" + hours + "h" + minutes + "m" + seconds + "s")
    }else if(seconds === 59 && minutes <59){
        seconds = 0
        minutes++
        console.log("Time plus one second is:" + hours + "h" + minutes + "m" + seconds + "s")
    }else if(seconds === 59 && minutes === 59 && hours < 23){
        seconds = 0
        minutes = 0
        hours++
        console.log("Time plus one second is:" + hours + "h" + minutes + "m" + seconds + "s")
    }else if(seconds === 59 && minutes === 59 && hours === 23){
        seconds = 0
        minutes = 0
        hours = 0
        console.log("Time plus one second is:" + hours + "h" + minutes + "m" + seconds + "s")
    }else{
        console.log("Time is construct.")
    }
}

console.log(timePlusOne(17,34,23)) //17h34m24s
console.log(timePlusOne(17,34,59)) //17h35m0s
console.log(timePlusOne(17,59,59)) //18h0m0s
console.log(timePlusOne(23,59,59)) //0h0m0s