//Write a program that asks you for a word then shows its length, lowercase, and uppercase values

const yourWord = word => {
    let lowercaseArray = word.match(/[a-z]/g);
    let uppercaseArray = word.match(/[A-Z]/g);
    let uppercaseLetters = uppercaseArray.join(", ");
    let lowercaseLetters = lowercaseArray.join(", ")
    console.log(`The length of your string is ${word.length}, the lowercase characters are ${lowercaseLetters}, and the uppercase characters are ${uppercaseLetters}.`)
}
console.log(yourWord("Ella Bean"))

//notes:to create an array of the letters found:
//       let arrayName = function(str) {
//          return str.match(/[a-z]/g);
//       }