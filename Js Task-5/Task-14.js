function calculateFractionalParts(numbers) {
    const results = [];
    for (let num of numbers) {
        results.push(num % 1);
    }
    return results;
}

const numbers = [1.5, 2.3, 4.0, 5.7];
console.log(calculateFractionalParts(numbers));