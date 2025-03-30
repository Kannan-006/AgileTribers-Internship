const name = "Alex Johnson";                   
const age = 28;                                 
const dob = "1995-05-15";                        
const height = 1.75;                             
const weight = 68.5;                           
const degree = "Master of Computer Science";     
const gender = "Male";                         


console.log("=== PERSONAL DETAILS ===");
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Date of Birth: ${dob} (Type: ${typeof dob})`);
console.log(`Height: ${height}m (Type: ${typeof height})`);
console.log(`Weight: ${weight}kg (Type: ${typeof weight})`);
console.log(`Degree: ${degree} (Type: ${typeof degree})`);
console.log(`Gender: ${gender} (Type: ${typeof gender})`);

console.log("\nFormatted Summary:");
console.log(`${name}, ${age} years old`);
console.log(`Born on ${dob}`);
console.log(`${height}m tall, ${weight}kg`);
console.log(`Education: ${degree}`);
console.log(`Gender: ${gender}`);