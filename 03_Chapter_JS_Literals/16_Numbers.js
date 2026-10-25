// 3 Numeric separators (ES2021) - to make large numbers more readable)

let million = 1_000_000; // 1 million

let binarySep =  0b1010_0001; // binary literal with separators

let hexSep = 0xFF_FF; // hexadecimal literal with separators


// 4 BigInt literal (ES2020) - for very large integers

let big = 1234567890123456789012345678901234567890n; // BigInt literal

let big2 = BigInt("1234567890123456789012345678901234567890"); // BigInt constructor

let bigFromNum = BigInt(42); // BigInt from number

console.log("BigInt literal:", big); // 1234567890123456789012345678901234567890n
console.log("BigInt constructor:", big2); // 1234567890123456789012345678901234567890n
console.log("BigInt from number:", bigFromNum); // 42n