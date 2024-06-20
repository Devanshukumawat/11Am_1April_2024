//Code to generate random id/OTP unique every time.


// let myArray = ["Devanshu","Aman",67,true]  // 4
// //                 0          1    2   3

// for(let i =0; i<myArray.length; i++ ){
//     console.log(myArray[i])
// }


// let i = 0 ------ 0<4 true = Devanshu i++ i=1
// let i = 1 ------ 1<4 true = aman i++  i=2
// let i = 2 ------ 2<4 true = 67   i++  i=3
// let i = 3 ------ 3<4 true = true i++  i=4
// let i = 4 ------ 4<4 false breake


// id 

// let charectar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"

// let randomId = ""

// function Id(length){
//     for(let i =1; i<=length; i++ ){
//         const randomNum = Math.floor(Math.random()*charectar.length)
//         randomId +=  charectar.charAt(randomNum)
//     }

//     return randomId
// }

// console.log(Id(5))


// let a;
// console.log(a)

const myArray = ['ghj','ghj']

// const Rvalur =  myArray.forEach((value,index)=>{
//    return value
// })

// console.log(Rvalur)

const Rvalue = myArray.map((value,index)=>{
    return value
})

// const Rvalue = ['ghj','ghj']


console.log(Rvalue)
