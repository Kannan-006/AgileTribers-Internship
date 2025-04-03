function countEvenOdd(numbers) {
    let evenCount = 0;
    let oddCount = 0;
    
    for (let num of numbers) {
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    
    console.log(`Even numbers: ${evenCount}, Odd numbers: ${oddCount}`);
}

const numbers = [25, 4, 5, 25, 5, 21, 3, 44, 8];
countEvenOdd(numbers);