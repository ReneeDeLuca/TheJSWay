/* Complete the following program so that it offers the four basic arithmetical operations: addition,
subtraction, multiplication and division. You can use either a function declaration or a function
expression.*/
// TODO: complete program
let calculate = function(num1,operator,num2){
    let answer
    if(operator === "+"){
        answer = num1 + num2
    }else if(operator === "-"){
        answer = num1 - num2
    }else if(operator === "*"){
        answer = num1*num2
    }else{
        if(num2 === 0){
        answer = "Infinity"
        }else{
            answer = num1/num2
        }
    } return answer
}

console.log(calculate(4, "+", 6)); // Must show 10
console.log(calculate(4, "-", 6)); // Must show -2
console.log(calculate(2, "*", 0)); // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity
