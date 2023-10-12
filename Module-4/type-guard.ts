// // key of guard


// type Alphanumaric = string| number
// function add(param1: Alphanumaric, param2:Alphanumaric):Alphanumaric {
//     if (typeof param1 == "number" && typeof param2 == "number") {
//         return( param1 + param2)
        
//     }
//     else {
//         return param1.toString + param2.toString()
//     }
// }

// add('1', '2')
// add(1, 2)

// // in guard

// type employe = {
//     name: string
// }

// type admin = {
//     name: string,
//     role: string
// }

// function userdefine(param: employe | admin) {
//     if ("role" in param) {
       
// return "wellcome admin"
//     }
//     else {
//         return "Wellcome User"
//     }
    
// }


// //  console.log(userdefine({ name: "kalu", role:"admin" }));

// // INSTANS OF GUARD 
// class Animal{
//     nameIs: string;
//     species: string;
//     constructor(nameIs:string, species:string) {
//         this.nameIs = nameIs
//         this.species = species
//      }
//     makeSound() {
//          console.log("im making Sounding");
//      }
// }


// class horse extends Animal{
//     constructor(nameIs: string, species: string) {
//         super(nameIs,species)
//     }
//     hosreSound() {
//         console.log("The hosrse is calling");
//     }
// }

// class Elephent extends Animal{
//     constructor(nameIs: string, species: string) {
//         super(nameIs,species)
//     }
//     elephentCalling() {
//         console.log('The EleplentCalling');
//     }
// }

// const animal1 = new Elephent("Hati", "ModaHati");
// const animal2 = new horse("sadaHorse", "modaHorse");



// function getAnimal(animal : Animal) {
    
//     if (IsElephent(animal)) {
//        animal.elephentCalling
//     }

//     else if (IsHorse(animal)) {
//         animal.hosreSound()
//     }
//     else {
//         animal.makeSound()
//     }

// }
//    function IsElephent(param: Animal): param is Elephent {
//     return param instanceof Elephent
     
// }
//    function IsHorse(param: Animal): param is horse {
//     return param instanceof horse
     
// }



// getAnimal(animal2)







