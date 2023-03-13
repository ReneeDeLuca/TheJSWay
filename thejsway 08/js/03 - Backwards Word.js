//Improve the previous program so that it shows the word written backwards

const yourWord = word => {
    let lowercaseArray = word.match(/[a-z]/g);
    let uppercaseArray = word.match(/[A-Z]/g);
    let vowelsArray = word.match(/[AEIOUaeiou]/g)
    let uppercaseLetters = uppercaseArray.join(", ");
    let lowercaseLetters = lowercaseArray.join(", ");
    let vowels = vowelsArray.join(", ")
    let backwards = word.split("").reverse().join("")
    console.log(`The length of your string is ${word.length}, the lowercase characters are ${lowercaseLetters}, and the uppercase characters are ${uppercaseLetters}.There are ${vowelsArray.length} vowels. The vowels are ${vowels}. The word backwards is: ${backwards}`)
}
console.log(yourWord("Words Are Hard"))