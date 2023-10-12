// Task 1..............
/* const userInfo = [101, "Ema", "John", true, , "2023"]; 
const newUserInfo: [number, string, string, boolean, string] = [101, "Ema", "John", true, "2023"] */
// console.log(newUserInfo);



// Task 2...............
/* function newResult(param1: number[], param2: number[]) {
    let newarr:number[]=[];
    
    for (const element of param1) {
       
        for (const element2 of param2) {
            if (element === element2) {
           
            newarr.push(element)
            }
        }
    }

    return newarr;
    
}


const arr1:number[]= [1, 2, 3, 4, 5]
const arr2 :number[]= [2, 4, 6, 8,3] */

// const result = newResult( arr1,arr2)
// console.log(result);

// Task 3................






// interface IProduct {
//     id: number,
//     name: string,
//     category: string,
//     price:number
   
// }


// function genericFunction <T extends keyof  IProduct>(products: IProduct[], type:T, value:IProduct[T]):IProduct[] {
//     return products.filter(product => product[type]=== value )
// }


// const Product = [
//     {id:101,category:"food", name:"cake",price:35},
//     {id:102,category:"food", name:"biscut",price:20},
//     {id:103,category:"food", name:"energy",price:10},
//     {id:104,category:"food", name:"fit",price:28},
  
// ]
// const result = genericFunction(Product,"name","energy")
// console.log(result)

// Task 4..................


// type obj = {
//     name: string,
//     price: number,
//     quantity:number
// }
// type productType = obj[];
// // const product: productType = ["mouse",12,12]

// const Calculator = <T extends productType>(param: T) => {
//     let price = 0;

   
//  param.map(newparam => {
//          price = price+ newparam.price * newparam.quantity
    
//     })
//    return price

// }

// const arrOfProduct :productType= [
//     {
//         name:"mouse",price:2,quantity:3
//     },
//     {
//         name:"keyboard",price:2,quantity:2
//     },
//     {
//         name:"monitor",price:2,quantity:2
//     }
// ]

// const result = Calculator(arrOfProduct)
// console.log(result);

// TASK-5...............


// type nunberType = number[]




// function EvenNumber(param: number[]) {
//     let total =0
    
//     for (const number of param) {
//         if (number % 2 === 0) {
//            total+=number
//        }
//         // const sum = number % 2
//         // if (sum === 0) {
//         //   total= total+number
//         // }
// }
//     return total
    
// }
// const NumberArray = [ 2, 4,  6]

// const result = EvenNumber(NumberArray)
// console.log(result);


// Task 6 ...........
// interface Iperson {
//     name: string,
//     age: number,
//     email: string,

// }
// type PersonType = object[];

// const findPeople = (param: Iperson[], email: string):Iperson|null => {
//     for (const person of param) {
//         if (person.email === email) {
//         return person
//     }
//     }
//     return null
    
// }

// const randomPeople :Iperson[]= [
//     { name: "mrx", age: 24, email: "yahoo" },
//     { name: "mry", age: 12, email: "gmail" },
//     { name: "mrz", age: 29, email: "hotmail" },
//     { name:"mra",age:18, email:"outlook" }
// ]

// // console.log(findPeople(randomPeople, "outloo"));

// tasl 7............

// const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9,2487];

// const findNumber = (...param:number[]  ):number[] => {
//   const max =  Math.max(...param)
//     const min = Math.min(...param)
//     return [min,max]
// }
// const [min, max] = findNumber(...numberArray)
// console.log(`Min ${min}, Max ${max} `);

// task 8................

// type color = "red" | "green" | "blue" 
// const something = (color:color,istrue?:boolean ) => {
    
//  return istrue?color.toUpperCase(): color.toLowerCase()

    
// }
// const red = something("blue")
// console.log(red);

