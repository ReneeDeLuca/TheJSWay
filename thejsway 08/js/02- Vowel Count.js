//Improve the previous program so that it also shows the number of vowels inside the word

const yourWord = word => {
    let lowercaseArray = word.match(/[a-z]/g);
    let uppercaseArray = word.match(/[A-Z]/g);
    let vowelsArray = word.match(/[AEIOUaeiou]/g)
    let uppercaseLetters = uppercaseArray.join(", ");
    let lowercaseLetters = lowercaseArray.join(", ");
    let vowels = vowelsArray.join(", ")
    console.log(`The length of your string is ${word.length}, the lowercase characters are ${lowercaseLetters}, and the uppercase characters are ${uppercaseLetters}.There are ${vowelsArray.length} vowels. The vowels are ${vowels}.`)
}
console.log(yourWord("Words Are Hard"))