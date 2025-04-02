function calculateGrade(score) {
    if (isNaN(score)) {
        return "Please enter a valid score";
    }
    
    if (score < 0 || score > 100) {
        return "Score must be between 0 and 100";
    }
    
    if (score >= 90) return "Grade: A";
    if (score >= 80) return "Grade: B";
    if (score >= 70) return "Grade: C";
    if (score >= 60) return "Grade: D";
    return "Grade: F";
}

console.log(calculateGrade(95)); 
console.log(calculateGrade(85));  
console.log(calculateGrade(75));  
console.log(calculateGrade(65));  
console.log(calculateGrade(55));  
console.log(calculateGrade(105)); 
console.log(calculateGrade("x")); 