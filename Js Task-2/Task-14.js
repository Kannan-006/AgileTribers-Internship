let numbers = [10, 20, 30, 40, 50];
let sum = numbers.reduce((acc, num) => acc + num, 0);
let average = sum / numbers.length;

console.log("Average:", average); 