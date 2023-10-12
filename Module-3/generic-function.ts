// // /*


// // function genericFunct <X,Y>(param:X,param2:Y):[X,Y] {
// //    return [param,param2]
// // }

// // interface Iobject{
// //    name:string
// // }
// // interface Iage{
// //    age:number
// // }

// // const result = genericFunct<Iobject, Iage>({ name: "bangladesh" }, { age: 20 })




// //  */


// // const testfunct = <T>(data:T) => {
// //    const country = "bangladesh";
// // const newData= {country,...data}
// //    return newData
// // }

// // const info = {
// //    name: "somethin",
// //    age: 123
// // }

// // const result = testfunct(info)

// interface Person {

//   firstName: string;

//   lastName: string;

// }



// function fullName<T extends Person>(person: T): string {

//   return `${person.firstName} ${person.lastName}`;

// }
// console.log(fullName({firstName:10, lastName:"hasan"}))