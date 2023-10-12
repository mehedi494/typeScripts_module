/* type Manus = {
    name: string,
    age: number,
    address: {
        home: string,
        road: string,
        house?:string
    }
}


const manush1: Manus = {
    name: "mehedi",
    age:12,
    address: {
        home: "khulna",
        road: "12.no read",
        house:"Taj mahal"
    }
}
const newHouse = manush1?.address?.house ?? "no house"
console.log(newHouse);
 */

function generateAdder(a: number): (b: number) => number {

  return function(b: number) {

    return a + b;

  };

}



const addTwo = generateAdder(2);

console.log(addTwo(3));

console.log(addTwo(5));