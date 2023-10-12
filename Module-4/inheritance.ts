class Persone{
    constructor(public nameIs: string, public address: string, public age: number, public gender: string) {
        
    }
}

class Munna extends Persone{
    constructor(nameIs: string, address: string, age: number, gender: string, public designation:string) {
        super(nameIs, address, age,gender)
        this.designation = designation;
    }

    aboutPerson(x:string) {
        console.log(`${x} ${this.nameIs}. address is ${this.address}. gender is ${this.gender}, title of ${this.designation}`);
    }
}



const persone1 = new Munna("Munna","Khulna", 26, "Male", "student");

persone1.aboutPerson("Hi")