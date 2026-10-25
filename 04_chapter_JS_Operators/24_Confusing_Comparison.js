// Rule of Thumb

// == -> loose equality 

// === -> strictly equality 

// 1. empty string vs 0 vs "0" ()

console.log("" ==0); // "" coered to Number -> 0

console.log("0" ==0); // "0" coered to Number -> 0

console.log("" === "0"); // both are string which are compared as it is 

// (transitivity broken) -> coerced


// Always use triple equal 

console.log("" ===0); 

console.log("0" ===0); 

console.log("" === "0"); 