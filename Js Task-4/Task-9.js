function checkLeapYear(year) {
    
    if (isNaN(year) || !Number.isInteger(Number(year))) {
        return "Please enter a valid year (integer)";
    }
    
    const yearNum = parseInt(year);
    if ((yearNum % 4 === 0 && yearNum % 100 !== 0) || yearNum % 400 === 0) {
        return `${yearNum} is a leap year`;
    } else {
        return `${yearNum} is not a leap year`;
    }
}


function interactiveLeapYearChecker() {
    const year = prompt("Enter the year:");
    alert(checkLeapYear(year));
}
console.log(checkLeapYear(2024)); 
console.log(checkLeapYear(2023));  
console.log(checkLeapYear(2000));  
console.log(checkLeapYear(1900));  
console.log(checkLeapYear("abc")); 

