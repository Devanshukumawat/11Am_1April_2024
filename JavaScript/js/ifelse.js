const prompt = require ("prompt-sync")()

// const age = prompt("Enter Age :- ")

// if(age<18){
//     console.log("You are not Eligible for vote")
// }
// else if(age>=18){
//     console.log("You are Eligible for vote")
// }
// else{
//     console.log("Invalid input")
// }


// npm init -y
// npm install/i prompt-sync
// require("prompt-sync")()


// Let create simple calculator
//     Addition 
//     Subtraction
//     Multiplication
//     Division



// npm init -y   -> package.json
// npm i/install prompt-sync   -> package install
// require("prompt-sync")()  -> call


// const prompt = require ("prompt-sync")()

// const num1 = parseInt( prompt("Enter Number (1) :- "))
// const num2 = parseInt(prompt("Enter Number (2) :- "))
// const operator = prompt("Enter Operator (+,-,/,*) :- ")

// let result = ''

// if(operator=="+"){
//     result = num1+num2   // "7"+"7" = "77" -> 7 + 7 = 14
// }
// else if(operator == "-"){
//     result = num1-num2  // "7"-"7" = "0"
// }
// else if(operator=="*"){
//     result = num1*num2  // "7"*"7" = "49"
// }
// else if (operator=="/"){
//     result = num1/num2  // "7"/"7" = "1"
// } 

// console.log(` Calculation :- ${num1} ${operator} ${num2} = ${result} `)


// let firstName = "Devanshu"

// console.log("hello "+firstName)
// console.log(` Hello ${firstName} `)


// let numbers = 4 //-> even
// let numbers = 7 //-> odd


// const num = prompt("Enter Number :- ")

// if(num%2==0){
//     console.log("Even Number")
// }else{
//     console.log("Odd Number")
// }


// Find the grade for input marks
//      "A+ grade" if marks is between 90 and 100.
//      "A grade" if marks is between 80 and 90.
//      "B+ grade" if marks is between 70 and 80.
//      "B grade" if marks is between 60 and 70.
//      "C grade" if marks is between 45 and 60.
//      "D grade" if marks is between 35 and 45.
//      "Fail" if marks is below 35  

// let age = 10
// let num = 90

// if(age == 10){
//     if(num >10){
//         console.log("Number is grater then 10")
//     }else{
//         console.log("Number is not grater then 10")
//     }
// }
// else if(age==20){
//     if(num <10){
//         console.log("Number is less then 10")
//     }else{
//         console.log("Number is not less then 10")
//     }
// }
// else{
//     console.log("number is not equal to 10")
// }


// const height = prompt("Enter Height :-")

// if(height<1){
//     const squaek = prompt("Cannot squeak / Can Squeak (yes/no):- ")
//     if(squaek=="yes"){
//         console.log("Might be a rat")
//     }else if(squaek=="no"){
//         console.log("Might be a squirrel")
//     }else{
//         console.log("Invalid")
//     }
// }
// else if(height>=1){
//     const neck = prompt("Short neck / Long neck (short/long):- ")
//     if(neck=="short"){
//         const nose = prompt("Short Nose / Long Nose (short/long):- ")
//         if(nose=="short"){
//            const stay =  prompt("On land / In water (land/water):- ")
//            if(stay=="water"){
//             console.log("Might be a hippo")
//            }
//            else if(stay=="land"){
//             console.log("Might be rhincorce")
//            }
//            else{
//             console.log("Invalid")
//         }
           
//         }
//         else if(nose=="long"){
//             console.log("Might be a elephant")
//         }
//         else{
//             console.log("Invalid")
//         }
//     }else if(neck=="long"){
//         console.log("Might be a Giraffe")
//     }
//     else{
//         console.log("Invalid")
//     }
// }
// else{
//     console.log("Invalid Height")
// }


//1-10

// 1-50  1-100

// user1 = 30
// user2 = 35

const num1 = prompt.hide("Enter Number {1-10} (User-1) :- ")
const num2 = prompt("Enter Number {1-10} (user-2) :- ")

if(num1==num2){
    console.log(`user1:-  ${num1} user2:- ${num2} result :- Yahhooo... You won.. 🥳 `)
}else{
    console.log(`user1:- ${num1} user2:-  ${num2} result :- Better Luck next time ..😕 `)
}

/*


user input = ""
Devanshu = Dev
Dev = Devanshu
Kizie = Manny
Manny = Kizie



*/








