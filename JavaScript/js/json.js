const data = {
    product1:{
        name:"Iphone",
        price:"$567",
        desc:"Mobile",
        imgaes:[
            "../media/Animation-PNG-HD.png",
            "../media/Animation-PNG-Photos.png"
        ]
    },
    product2:{
        name:"samsung",
        price:"$57",
        desc:"Mobile"
    },
    product3:{
        name:"Mi",
        price:"$99",
        desc:"Mobile"
    }
}


const {imgaes} = data.product1 

console.log(imgaes[1])

// console.log(data.product1.imgaes[0])
// console.log(data.product3.name)