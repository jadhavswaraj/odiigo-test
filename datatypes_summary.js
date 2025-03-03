// //  Primitive

// //  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// // Reference (Non primitive)

// // Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof anotherId);
// myFunction()

// // https://262.ecma-international.org/5.1/#sec-11.4.3


// // Memory Managaement
// // Stack Memory(Primitive) and Heap memory(Non Primitive)

// let myYoutube = "achintyashende.com"
// let anothername = myYoutube 
// anothername = "vidhipatil.com"
// console.log(myYoutube);
// console.log(anothername);

let user1 = {
    email: "achintyashende@gmaikl.com",
    upi: "achinty@oksbi"
}

let user2 = user1
console.log(`befor user1 email ${user1.email}`);
console.log(`befor user2 email ${user2.email}`);

user2.email = "justanotherone@gmail.com"

console.log(`after user1 email ${user1.email}`);
console.log(`after user2 email ${user2.email}`);