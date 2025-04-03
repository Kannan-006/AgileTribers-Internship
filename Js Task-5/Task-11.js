function checkVowelOrConsonant(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerChar = char.toLowerCase();
    
    if (vowels.includes(lowerChar)) {
        console.log(`${char} is a vowel`);
    } else {
        console.log(`${char} is a consonant`);
    }
}

checkVowelOrConsonant('a');
checkVowelOrConsonant('b'); 