function getAgeMessage(age) {
    if (isNaN(age)) {  
        return "Please enter a valid age";
    }
    
    if (age < 0) {
        return "Age cannot be negative";
    }
    
    if (age < 16) {
        return "You can't drive.";
    } else if (age >= 16 && age <= 17) {
        return "You can drive but not vote.";
    } else if (age >= 18 && age <= 24) {
        return "You can vote but not rent a car.";
    } else {
        return "You can do pretty much anything.";
    }
}
console.log(getAgeMessage(15)); 
console.log(getAgeMessage(16)); 
console.log(getAgeMessage(20));  
console.log(getAgeMessage(25));  
console.log(getAgeMessage(-5));  
console.log(getAgeMessage("y")); 