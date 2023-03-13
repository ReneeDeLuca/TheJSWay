//Improve the previous program to check if the word is a palindrome. A palindrome is a word or sentence that’s spelled the same way both forward and backward, ignoring punctuation, case, and spacing. "radar" should be detected as a palindrome, "Radar" too

const yourWord = word => {
    let lowercaseArray = word.match(/[a-z]/g);
    let uppercaseArray = word.match(/[A-Z]/g);
    let vowelsArray = word.match(/[AEIOUaeiou]/g)
    let uppercaseLetters = uppercaseArray.join(", ");
    let lowercaseLetters = lowercaseArray.join(", ");
    let vowels = vowelsArray.join(", ")
    let backwards = word.split("").reverse().join("")
    let isPalindrome 
    if(word.toLowerCase()===backwards.toLowerCase()){
            isPalindrome = "is a palindrome"
    }else{
            isPalindrome = "is not a palindrome"
        }
    
    console.log(`The length of your string is ${word.length}, the lowercase characters are ${lowercaseLetters}, and the uppercase characters are ${uppercaseLetters}.There are ${vowelsArray.length} vowels. The vowels are ${vowels}. The word backwards is: ${backwards}. Your string ${isPalindrome}.`)
}
console.log(yourWord("Words Are Hard"))
console.log(yourWord("Racecar"))