function greet(name){
    return  `Hello, ${name}`;
}

const greet1 = function(name){
     return  `Hello, ${name}`;
}

const greet2 = (name2) => `Hello, ${name}`;

console.log(greet("Dipesh"));
console.log(greet1("Dipesh"));
console.log(greet2("Dipesh"));