function calculatePower(base, exponent) {
    if (isNaN(base) || isNaN(exponent)) {
        return "Both inputs must be numbers";
    }
    return `${base}^${exponent} = ${Math.pow(base, exponent)}`;
}

console.log(calculatePower(5, 2));    
console.log(calculatePower(2, 3));    
console.log(calculatePower(10, 0));   
console.log(calculatePower("a", 2));  