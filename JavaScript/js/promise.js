//What are promises?

// fetch("http://test/1").then((res)=>{}).catch((error)=>{}).finally((always)=>{})

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Promise Created....Async Task complete...")
//         reject()

//     },2000)
// }).then((res)=>{
//     console.log("Hello")
// }).catch((error)=>{
//     console.log("Error")
// })

// let myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async Task....")
//         let task = false
//         if(task){
//             resolve({name:"Devanshu",age:34})
//         }else{
//             reject({Error:"Kuch to gadbad hai"})
//         }
//     },2000)
// })

// myPromise.then ((res)=>{
//     console.log(res.name)
// })

// myPromise.catch((error)=>{
//     console.log(error)
// })

// myPromise.finally(()=>{
//     console.log("Always Run finally")
// })

// fetch("https://dummyjson.com/products").then((res)=>{
//     return res.json()
// }).then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })

// let myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async Task....")
//         let task = false
//         if(task){
//             resolve({name:"Devanshu",age:34})
//         }else{
//             reject({Error:"Kuch to gadbad hai"})
//         }
//     },2000)
// })

// async function Add(){

//     try {
//         let data = await myPromise
//     console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// Add()

async function data() {
  try {
    let product = await fetch("https://dummyjson.com/products/300");
    const data = await product.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

data();
