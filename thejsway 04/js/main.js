//Try to code each exercise twice, once with a while loop and the other with a for, to see for yourself which one is the most appropriate.

//Carousel
//Write a program that launches a carousel for 10 turns, showing the turn number each time.

let turns = 0
console.log(turns)
while(turns < 10){
    turns++
    console.log(turns)
    }


for(i=0; i <= 10 ; i++){
    console.log(i)
    }

//When it’s done, improve it so that the number of turns is given by the user.

let turn = Number(prompt("Enter a number less than 10"))
console.log(turn)
while(turn < 10){
    turn++
    console.log(turn)
    }

 
for(turn2 = Number(prompt("Enter a number less than 10")); turn2 <= 10 ; turn2++){
    console.log(turn2)
    }

//Parity
//Check the following program that shows even numbers (divisible by 2) between 1 and 10.

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    }
}
//Improve the program so that it also shows odd numbers and replaces the initial number 1 by a number given by the user.

for(let i = Number(prompt("Enter a number between 1 and 10")); i <=10; i++){
    if(i%2 === 0){
        console.log(`${i} is even`)
    }else{
        console.log(`${i} is odd`)
    }
}


//This program must show exactly 10 numbers including the first one, not 11 numbers!


//Input validation

//Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.  

let numberEntered = Number(prompt("Enter a number:"))
while(numberEntered < 100){
    numberEntered = Number(prompt("Enter a number:"))
    console.log(`Your number is ${numberEntered}`);
}

//When you are done with the above, improve the program so that the terminating number is between 50 and 100.

let numberEntered2 = Number(prompt("Enter a number:"))
while(numberEntered2 <= 50 || numberEntered2 >= 100){
    numberEntered2 = Number(prompt("Enter a number:"))
    console.log(`Your number is ${numberEntered2}`);
}


//Multiplication table

//Write a program that asks the user for a number, then shows the multiplication table for this number.
let pickNum = Number(prompt("Enter a number:"))
for(let i = 0; i<= 15; i++){
    let multiple = pickNum * i
    console.log(`${pickNum} times ${i} is: ${multiple}`);
}

//When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

let pickNum2 = Number(prompt("Enter a number between 1 and 10:"))
if(pickNum2 <= 1 || pickNum2 >= 10){
    console.log("Not a number between 1 and 10")
}else{
    for(let i = 0; i<=15; i++){
        let multiple2 = pickNum2 * i
        console.log(`${pickNum2} times ${i} is: ${multiple2}`);
    }
}


//Neither yes nor no

//Write a program that plays “neither yes, nor no” with the user. Specifically, the programs asks the user to enter text until either “yes” or “no” is typed, which ends the game.
let words = prompt("Enter text:").toLowerCase()
while(!(words === 'yes' || words === 'no')){
    words = prompt("Try again:").toLowerCase()
}

//Notes: ! condition would not work unless it was on the whole statement inside braces.



//FizzBuzz
//Write a program that shows all numbers between 1 and 100 with the following exceptions:
//• It shows "Fizz" instead if the number is divisible by 3.
//• It shows "Buzz" instead if the number is divisible by 5 and not by 3.
//When it’s done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

for(let i = 1; i<=100; i++){
    if(i % 3 === 0 && i % 5 !== 0){
        console.log("Fizz")
    }else if(i % 5 === 0 && i % 3 !== 0){
        console.log("Buzz")
    }else if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    }else{
        console.log(i)
    }
}

