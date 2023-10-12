/**Task -1................
 * Convert the following JavaScript array into a TypeScript tuple
    const userInfo = [101, "Ema", "John", true,  , "2023"]
 */

// const userInfo: [number, string, string, boolean, string] = [101, "Ema", "Jhon", true, "2023"];


/**
 * Task -2..............
 * Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8], the function should return a new array with the elements 2 and 4 because they are present in both arrays.

The function should handle arrays of any length and should return the resulting array in the same order as they appear in the first array.
 */


// const compareFunction = (param1: number[], param2: number[]): number[] => {
//     let newArr :number[]=[]
//     for (const element of param1) {
//         for (const element2 of param2) {
//             if (element === element2) {
//                 newArr.push(element)
//             }
//         }
//     }
//     return newArr
    
// }

// const arr1 = [1,2,3,4,5,6]
// const arr2 = [1,2,6, 3, 7, 8, 4]

// const result = (compareFunction(arr1,arr2))
// console.log(result);

/**
 * Task-3....................
 * 
 * You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.
 */


// interface IProduct{
 
//     id: number,
//     name: string,
//     price: number,
//     category:string
// }
// type Product =IProduct[]

// const getProduct = <T extends keyof IProduct>(param:Product, criteria: T, value: string) :Product=> {
//     return param.filter(product=> product[criteria] === value)

    
// }

// const item1:Product = [
//     {id:101,name:"coke",category:"bevarage",price:25},
//     {id:102,name:"pepsi",category:"bevarage",price:25},
//     {id:103,name:"sprite",category:"soft",price:20}
// ]

// console.log(getProduct(item1,'category',"soft"));

/** Task-4
 * suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.
 */



// type productType = [string, number, number] []



// const totalPrice = <T extends productType>(products:T) :number=> {
//     let sum:number=0
//     products.map(product => {
//         sum += product[1] * product[2]
//         // console.log(sum);
//     })
    
//     return sum
    
// }

// const productArr: productType =[ ["mouse", 5, 5], ["keyboard", 5, 2],["keyboard", 5, 2]]
// console.log(totalPrice(productArr));


/**
 * Task -5
 * 
 * Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?
//  */
// type numberType = number[]

// const findEvenNumber = (numbers:numberType):numberType => {
//     let result =[ ]
//      for (const number of numbers) {
//         if (number % 2 === 0) {
//             result.push(number)
//         }
//     }
//     return result
// }
// console.log(findEvenNumber([1,2,3,4,5,6,4.8,14,78,45,98]));

/**
 * task-6
 * Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.


 */

// interface Person {
//     name: string; age: number; email: string;
//  }
// const findwithEmail = (arr: Person[], email: string): Person[] | null=> {
//     const res = arr.filter(find => {
//         if (find.email === email) {
//             return find
//         }
//         else {
//             return null
//         }
//     })
    
    
//     return null
// }

// const randomPeople :Person[]= [
//    { name: "mrx", age: 24, email: "yahoo" },
//    { name: "mry", age: 12, email: "gmail" },
//    { name: "mrz", age: 29, email: "hotmail" },
//    { name:"mra",age:18, email:"outlook" }
// ]

// console.log(findwithEmail(randomPeople,"1"));

/**
 * Task -7 
 * Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.
 */


// type NumberType = number[]
// const findMinMax = (arr: NumberType): NumberType => {
//     const newArr :number[]=[]
// const max=    Math.max(...arr)
//     const min= Math.min(...arr)
// newArr.push(max,min)
//     return newArr
    
// }

// console.log(findMinMax([1,2,3,45,6,9,8,3,5,2]));


/**
 * Task -8 
 * 
 * Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.
 */



type color = {
    red: string,
    green: string,
    blue: string,

}
const Istruthy = <T extends keyof color>(param:T,param2 ? :boolean) => {
    const result = param2 ? param.toUpperCase() : param.toLowerCase()
   
    return result
}

console.log(Istruthy("green",true));

