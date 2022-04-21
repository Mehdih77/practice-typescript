let x: number = 2;

let user: string;

user = "lorem"

let temp: number = 33;

temp = 24

let check: Boolean;

check = true

///////////////////

let newObject: {
    name: string,
    age: number
};

newObject = {
    name: "peter",
    age: 24
};

let testString: string[];

testString = ["jack","jim", "22"]

let testNumber: number[];

testNumber = [1,2,3,4]

///////////////////////////

let advance: {
    name: string,
    age: number
}[];

advance = [
    {
        name:"mmm",
        age: 22
    },
    {
        name:"sss",
        age: 36
    },
]

///////////////
//! type inference

let temp7 = "React - TypeScript";

temp7 = "Hello World";

///////////////////////////////////
//! Union type

let union: string | number;

union = "bye bye";
union = 12;

/////////////////////////
//! Aliases type
type myType = {
    name: string,
    age: number,
    isActive: Boolean
}

let ggg: myType;

ggg = {
    name: "name",
    age: 33,
    isActive: true
}

///////////////////

function add(a: number, b:number) : number | string {
    return a + b;
}

// console.log(add(1,"2"));  ====>> Error


//////////////////
//! Generics

// function generic(array: any[], value: any) {
//     const newArray = [...array, value];
//     return newArray; 
// }
function generic<T>(array: T[], value: T) {
    const newArray = [...array, value];
    return newArray; 
}

const demoArray = [1, 2, 3];
const test11 = generic(demoArray, -1); // [1,2,3,-1]
const test22 = generic(["1","2","3"], "-1");