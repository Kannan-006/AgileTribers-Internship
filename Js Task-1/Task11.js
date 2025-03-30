let name = 'John Doe';
let age = 25;
let isStudent = true;

console.log('Before Modification:');
console.log('Name:', name);
console.log('Age:', age);
console.log('Is Student:', isStudent);


name = 'Jane Smith';
age += 1;
isStudent = !isStudent;


console.log('\nAfter Modification:');
console.log('Name:', name);
console.log('Age:', age);
console.log('Is Student:', isStudent);