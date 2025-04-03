function productOrSum(a, b) {
    const product = a * b;
    return product > 100 ? product : a + b;
}

console.log(productOrSum(20, 5)); 
console.log(productOrSum(20, 6));  