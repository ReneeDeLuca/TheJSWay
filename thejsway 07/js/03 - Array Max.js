//Write a program that creates the following array, then calculates and shows the array’s maximum value.


const values = [3, 11, 7, 2, 9, 10];
function compareNumbers(a, b) {
    return a - b;
  }
values.sort(compareNumbers)
console.log(values[values.length-1])