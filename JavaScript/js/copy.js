// const student1 = {
//     studentName : "devanshu",
//     studentClass: 6,
//     section:"a",
//     RollNo:"5678"
// }


// const student2 = student1

// student1.studentName = "Aman"

// console.log(student1 === student2)
// console.log(student1)
// console.log(student2)

// const student2 = {...student1}

// student1.studentName = "Aman"
// student2.studentName = "Manny"

// console.log(student1===student2)

// console.log(student1)
// console.log(student2)



// const student1 = {
//     studentName : "devanshu",
//     studentClass: 6,
//     section:"a",
//     RollNo:"5678",
//     address:{
//         city:"jaipur",
//         pin_code:5678
//     }
// }

// const student2 = {...student1}
// const student2 = Object.assign({},student1)
// student1.address.city = "Ajmer"

// student1.studentName = "Aman"
// student1.address.pin_code = 456789

// console.log(student1)
// console.log(student2)




// const student1 = {
//     studentName : "devanshu",
//     studentClass: 6,
//     section:"a",
//     RollNo:"5678",
//     address:{
//         city:"jaipur",
//         pin_code:5678
//     },

//     allDetails: function (){
//         console.log(`name:- ${this.studentName} class:- ${this.studentClass} roll-no :- ${this.RollNo}`)
//     }
// }


// let student2 = JSON.parse(JSON.stringify(student1))

// student1.address.city = "Ajmer"
// student2.address.city = "Sambhar"

// console.log(student1)
// console.log(student2)

// const objCopy = require("lodash")

// const student1 = {
//     studentName : "devanshu",
//     studentClass: 6,
//     section:"a",
//     RollNo:"5678",
//     address:{
//         city:"jaipur",
//         pin_code:5678
//     },

//     allDetails: function (){
//         console.log(`name:- ${this.studentName} class:- ${this.studentClass} roll-no :- ${this.RollNo}`)
//     }
// }

// const student2 = objCopy.cloneDeep(student1)

// console.log(student1)
// console.log(student2)









