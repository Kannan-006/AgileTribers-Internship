const colors = ["Red", "Green", "Blue", "Yellow"];


console.log("Method 1 - For loop:");
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}


console.log("\nMethod 2 - forEach:");
colors.forEach(color => {
  console.log(color);
});


console.log("\nMethod 3 - for...of:");
for (const color of colors) {
  console.log(color);
}