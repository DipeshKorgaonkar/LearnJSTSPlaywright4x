// Problem Statement;

// Score - 0 to 100

// Score > 90 -> A

//Score 80 to 90 -> B

//Score 70 to 80 -> C

// Score 60 to 70 -> D

// Score 50 to 60 -> E

// Score less then 60 -> F (FAIL)

let score = 56;

// Score will be int alway as mentioned in the problem statement which will be inclusive of 0 to 100 

if (score > 100 || score < 0) {
    console.log("Invalid Score");
}
else {

    if (score > 90) {
        console.log("Grade A - Excellent");
    }
    else if (score > 80 && score <= 90) {
        console.log("Grade B - Very Good");
    }
    else if (score > 70 && score <= 80) {
        console.log("Grade C - Good");
    }
    else if (score > 60 && score <= 70) {
        console.log("Grade D - Average");
    }
    else if (score > 50 && score <= 60) {
        console.log("Grade E -Need the improvment");
    }
    else {
        console.log("Grade F - Fail");
    }
}