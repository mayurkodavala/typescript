let response : any = "42";
let numericLength : number = (response as string).length

type book = {
    name : string
}
let bookString = '{"name : "One thing"}';
let bookObject = JSON.parse(bookString) as book

console.log(bookObject);

const InputElement = document.getElementById("username") as HTMLInputElement


let value : any
value = 'chai'
value = [1,2,3]
value = 3.5
value.toUpperCase();

let newValue : unknown;
newValue = 'chai';
newValue = [1,2,3]
newValue = 3.5
// newValue.toupperCase()

if(typeof newValue === 'string') {
    newValue.toUpperCase();
}

try {
    
} catch (error : any) {
    if(error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
    
}

const data : unknown = "chai time"
const strData : string = data as string
console.log(strData);

//never type assertion
function throwError(message : string) : never {
    throw new Error(message);
}

function fail() : never {
    return throwError("Something failed");
}