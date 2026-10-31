// Not created to user input, but created to show how to use the UI class in Playwright

let num = prompt("Enter a number:"); 
num = Number(num); // Convert string to number

if (num %2 ===0){
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}
