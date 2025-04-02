function compareNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return "Please enter valid numbers";
    }
    
    if (num1 > num2) {
        return `${num1} is greater than ${num2}`;
    } else if (num2 > num1) {
        return `${num2} is greater than ${num1}`;
    } else {
        return "Both numbers are equal";
    }
}

console.log(compareNumbers(5, 10));   
console.log(compareNumbers(7, 3));   
console.log(compareNumbers(4, 4));   
console.log(compareNumbers("a", 5)); 