// interface Ivehicle{
//     startEngine(): void;
//     stopEngine(): void;
//     move(): void;
// }

// class Car implements Ivehicle {
//     constructor(
//         public name: string,
//         public brand: string,
//         public model: string,
//     ) { }
    
//     startEngine(): void{
// console.log("Starting engine");
//     };
//     stopEngine(): void{
//         console.log(`stoping engin`);
    
//     }
//     move(): void{
//         console.log('moving engine')
//     }
// }

// const car = new Car('Car', "Toyota", "2002")

// car.startEngine()

abstract class Vehicle{
     constructor(
        public name: string,
        public brand: string,
        public model: string,
    ) { }
    
    abstract startEngine(): void
//     {
// console.log("Starting engine");
//     };
    abstract stopEngine(): void
    // {
    //     console.log(`stoping engin`);
    
    // }
 abstract   move(): void
    // {
    //     console.log('moving engine')
    // }
}

class newCar extends Vehicle{
    startEngine(): void {
        console.log("start engine");
    }
    stopEngine(): void {
        console.log("stop engine");
    }
    move(): void {
        console.log("move ");
    }

}

const newCar1 = new newCar("car", "TOYOTA", "2011")
newCar1.startEngine()