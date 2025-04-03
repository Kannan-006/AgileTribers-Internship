const numbers = [13, 23, 24, 48, 13]; 
const first = numbers[0];
const last = numbers[numbers.length - 1];
const result = first === last;
console.log(`The first and last numbers are ${result ? 'the same' : 'different'}`);