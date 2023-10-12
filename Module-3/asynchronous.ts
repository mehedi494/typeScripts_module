// const makePromise = ():Promise<string> => {
//     return  new Promise<string>((resolve, rejects) => {
//         const data: string = "data fatched";
        
//         if (data) {
//             resolve(data)
//         }
//         else {
//             rejects("not found something")
//         }

//     })
// }
     
// // const someResult = makePromise()
// // const getPromiseData = async ():Promise <void> => {
// //     const someResult = await makePromise()
// //     console.log(someResult);
// //     // return someResult;
    
// // }

// interface iTodo {
//     userId: string, 
//     id: number,
//     title: string,
//     completed:boolean
// }
// const getTodo = async ()  => {
    
//     const res = fetch("https://jsonplaceholder.typicode.com/todos/2")
//     const data = (await res).json()
//        return  data
    
// }
// const getData = async() => {
//     const data = await getTodo()
//     console.log(data);
// }
// const resulTod = getData()
