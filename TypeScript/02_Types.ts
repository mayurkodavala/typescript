function greet(person: string): string {
    return `hello ${person}, Welcome to MyCode`;
}

const username: string = "Mayur";
// console.log(greet(username));


let isActive: boolean = true;
let hasPermission = false; // TypeScript infers 'boolean' type
// console.log(hasPermission);



let decimal: number = 6;        //desimal
let hex: number = 0xf00d;       // Hexadecimal
let binary: number = 0b1010;     // Binary
let octal: number = 0o744;      // Octal
let float: number = 3.14;      // Floating point
// console.log(float);



let color: string = "blue";
let fullName: string = 'Mayur kodavala';
let age: number = 19;
let sentence: string = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;
// console.log(sentence);


const bigNumber: bigint = 9007199254740991n;
const hugeNumber = BigInt(9007199254740991); // Alternative syntax
// console.log(bigNumber);



const uniqueKey: symbol = Symbol('description');
const obj = {
  [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]); // "This is a unique property"

