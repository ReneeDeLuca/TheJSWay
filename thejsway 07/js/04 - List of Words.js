//Write a program that asks the user for a word until the user types "stop". The program then shows each of these words except "stop".
const exceptStop = function(word){
    let wordArray = []
    while(!(word.toLowerCase() === "stop")){
        wordArray.push(word)
        word = prompt("Enter a word")        
    }
        console.log(wordArray)
    }


console.log(exceptStop(prompt("Enter a word")))

//notes: spent WAY TOO MUCH TIME not realizing that the C in .toLowerCase was not capitalzied...