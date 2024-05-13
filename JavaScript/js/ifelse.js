const prompt = require ("prompt-sync")()

const age = prompt("Enter Age :- ")

if(age<18){
    console.log("You are not Eligible for vote")
}
else if(age>=18){
    console.log("You are Eligible for vote")
}
else{
    console.log("Invalid input")
}


// npm init -y
// npm install/i prompt-sync
// require("prompt-sync")()


// Let create simple calculator
//     Addition 
//     Subtraction
//     Multiplication
//     Division
