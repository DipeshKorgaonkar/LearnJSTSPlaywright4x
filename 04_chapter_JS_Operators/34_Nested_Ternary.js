// Nested Ternary
// Multiple Conditions
// age = 26
// age > 18 -> Go Goa, age > 25 -> Drink

let age =22;

let is_pramod_enjoy = (age > 18)? (age > 25 ?"Goa and Drink": "No Drink, Only go to Goa"): "No Gao";
console.log(`Pramod can enjoy ${is_pramod_enjoy}`)