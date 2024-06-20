// const Arrow = ( )=>{
//     console.log("Arrow fun")
// }

// Arrow()

// const MyArray = [45,78,98,67,56,89,4,2,34,5,56]

// const valueOfFilter = MyArray.filter((value)=>{
//     return value>50
// })

// console.log(valueOfFilter)

// setTimeout(()=>{
//     console.log("Ha ha i am fun")
// },5000)


// setInterval(() => {
//     console.log("You can Repet Any time")
// },2000 );

// let Product1 = {
//     ProductName:"I-phone",
//     ProductPrice:"$567",
//     ProductDesc:"Mobile",
//     ProductRating:4.5,
//     AllDetails:function (){
//         console.log(`Product Price:- ${this.ProductPrice} Product Name :- ${this.ProductName} Product Rating :- ${this.ProductRating} Product Desc :- ${this.ProductDesc}`)
//     }
// }

// Product1.AllDetails()

// let Product2 = {
//     ProductName:"Samsung",
//     ProductPrice:"$678",
//     ProductDesc:"Mobile",
//     ProductRating:4.9,
// }

// Product1.AllDetails.call(Product2)


// const AllDetails = function (address){
//             console.log(`Product Price:- ${this.ProductPrice} Product Name :- ${this.ProductName} Product Rating :- ${this.ProductRating} Product Desc :- ${this.ProductDesc} Address :- ${address}`)
//         }


// let Product1 = {
//         ProductName:"I-phone",
//         ProductPrice:"$567",
//         ProductDesc:"Mobile",
//         ProductRating:4.5,
        
//     }
    
//     let Product2 = {
//         ProductName:"Samsung",
//         ProductPrice:"$678",
//         ProductDesc:"Mobile",
//         ProductRating:4.9,
//     }
    

    // AllDetails.call(Product1,"Jaipur")
    // AllDetails.call(Product2,"Ajmer")

    // AllDetails.apply(Product1,["Jaipur"])
    // AllDetails.apply(Product2,["Ajmer"])

    // let copyOfFun = AllDetails.bind(Product1,"Jaipur")

   
    // copyOfFun()

    // let copyOfFun2 = AllDetails.bind(Product2,"Ajmer")

    // copyOfFun2()


const AllDetails = function (address,pincode){
            console.log(`Product Price:- ${this.ProductPrice} Product Name :- ${this.ProductName} Product Rating :- ${this.ProductRating} Product Desc :- ${this.ProductDesc} Address :- ${address} Pincode:- ${pincode}`)
        }


let Product1 = {
        ProductName:"I-phone",
        ProductPrice:"$567",
        ProductDesc:"Mobile",
        ProductRating:4.5,
        
    }
    
    let Product2 = {
        ProductName:"Samsung",
        ProductPrice:"$678",
        ProductDesc:"Mobile",
        ProductRating:4.9,
    }
    

    // AllDetails.call(Product1,"Ajmer")
    // AllDetails.call(Product2,"Jaipur")

    // AllDetails.apply(Product1,["Jaipur",45678])
    // AllDetails.apply(Product2,["Ajmer",45667])

    const bindObj = AllDetails.bind(Product1,"Ajmer",5678)

    console.log(bindObj)

    bindObj()

    const bindObj1 = AllDetails.bind(Product2,"Jaipur",56789)

    console.log(bindObj1)

    bindObj1()

    // call apply bind







