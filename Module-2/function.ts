
// normal functio
function norlamFunction(num1: number, num2: number) :number{
    return num1 + num2;
}

//arrow functio

const arrowfunction = (num1: number, num2: number): number => {
    
    return num1 + num2
}

const arr:number[] = [2, 4, 5, 6];
const newArray = arr.map((elmt: number) => elmt * elmt)
// console.log(newArray);

const person: {
    name: string,
    balance: number,
     addMoney(money:number):string
}= {
    name: "mehedi",
    balance: 10,
    addMoney (money: number){
        return `current balance is ${this.balance+ money}`
    }
}
// console.log(person.addMoney(20));

const myFriends: string[] = ["a","b","c","d"]
const newFriend: string[] = ["e", "f", "g"]
 myFriends.push(...newFriend)

// console.log(myFriends);

// rest parametr
const greadtFriends = (...friends:string[]): void => { friends.forEach(elm=>console.log(elm))
    // console.log(friend);
}
// greadtFriends("abul","babul","kabul","bangla","english")

const [bestFriend] = myFriends[1]
console.log(bestFriend);