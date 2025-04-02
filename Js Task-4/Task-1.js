function checkNumberSign(num) {
    if (num > 0) {
        return `${num} is Positive`;
    } else if (num < 0) {
        return `${num} is Negative`;
    } else {
        return "The number is Zero";
    }
}


console.log(checkNumberSign(10));    
console.log(checkNumberSign(-5));    
console.log(checkNumberSign(0));    