function isLeapYear(year) {
    if (isNaN(year) || year <= 0) {
        return "Please enter a valid year";
    }
    
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a leap year`;
    } else {
        return `${year} is not a leap year`;
    }
}


console.log(isLeapYear(2020));  
console.log(isLeapYear(2021));  
console.log(isLeapYear(2000));  
console.log(isLeapYear(1900));  
console.log(isLeapYear("abc")); 