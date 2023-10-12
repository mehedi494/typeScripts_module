interface Person{
    name: string;
    email: string;
    number:string
    
}

type name = Pick<Person, "name">

type name2 = Omit<Person,"email">
type name3 = Partial<Person>
type name4 = Required<Person>

const something:name4 = {
    email:"",
    name: "",
    number:""
}

const something2:Readonly<Person> = {
    name: "string",
    email: "string",
    number:"string"
}


// ..................

// properties
interface Model <TData,Tmethods> {
    data: TData,
    methods:Tmethods
}
interface Iuser{
    firstName: string;
    lastName: string
}
// Methods
interface Imethods{
    fullName(): string;
}

type model = Model<Iuser, Imethods>


class user implements model {
    data: Iuser;
    methods: Imethods;

    constructor(firstName:string,lastName:string) {
        this.data = { firstName, lastName }
        this.methods = {
            fullName: ()=> `${firstName} ${lastName}`
        }
    }
}


const use1 = new user("mehedi", "Hasan")
console.log(use1.methods.fullName());
