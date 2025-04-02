function checkEvenOdd(num) {
    if (isNaN(num)) {
        return "Please enter a valid number";
    }
    return num % 2 === 0 ? `${num} is Even` : `${num} is Odd`;
}

console.log(checkEvenOdd(4));     
console.log(checkEvenOdd(7));     
console.log(checkEvenOdd(0));   
console.log(checkEvenOdd("abc")); 