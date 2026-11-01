// let testScore = 95;

// switch (true) { 
//     case (testScore >=90):
//         console.log("A");
//         break;
//     default:
//         console.log("Invalid unvalid provided");
// }


// switch(true){
//     case (testScore >=95):
//         console.log("Outstanding - Top Performer");
//         break;
//     case (testScore >=85):
//         console.log("Excellent - Above expectations")    ;
//         break;
//     case (testScore >=70):
//         console.log("Good - Meet Expections");
//         break;
//     case (testScore >=50):
//         console.log("Need to improvement");
//         break;
//     default:
//         console.log("Unsathifactory - Requires Training")

//     }
// let n =5
// // const n = Number(data.trim());
// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n * i}`);
// }

let n =15;
for (let i = 1; i <= n; i++) { 
    if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }
    else if(i % 5 === 0 && i % 3 === 0){
        console.log("FizzBuzz");
    }
    else { 
        console.log(i)
    }
    
}