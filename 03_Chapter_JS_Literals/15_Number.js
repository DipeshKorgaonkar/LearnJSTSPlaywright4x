// Topic all the number literal in javascript


// 1. Integer literal

// Decimal (Base 10) - most common

let decimal = 100; // decimal literal

console.log("Decimal: ", decimal); // 100

// Binary (Base 2) - start with 0b or 0B
let binary = 0b1010; // 10 in decimal
console.log("Binary 0b1010:", binary); // 10

// Octal (Base 8) - start with 0o or 0O
let octal = 0o52; // 10 in decimal
console.log("Octal 0o52:", octal); // 42

// Hexadecimal (Base 16) - start with 0x or 0X
let hexadecimal = 0x2A; // 10 in decimal
console.log("Hexadecimal 0x2A:", hexadecimal); // 42


// 2. Floating-point literal

let float1 = 3.14; // floating-point literal
let float2 = -0.5 ;
let float3 = .5; // floating-point literal - to be avoided
let float4 = 5.; // floating-point literal - to be avoided 

// Exponential notation (scientific notation)

let exp1 = 1.5e3; // 1.5 * 10^3 = 1500
let exp2 = 1.5e-3; // 1.5 * 10^-3 = 0.0015
let exp3 = 2E10; // 2 * 10^10 = 20000000000

console.log("Exponential 1.5e3:", exp1); // 1500
console.log("Exponential 1.5e-3:", exp2); // 0.0015
console.log("Exponential 2E10:", exp3); // 20000000000