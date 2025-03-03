const score = 400
// console.log(score);

const balance = new Number(200)
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const num = 3432.343432
// console.log(num.toPrecision(3))

const hundreds = 10000000
// console.log(hundreds.toLocaleString());// us values
// console.log(hundreds.toLocaleString('en-IN'));// indian values

// ++++++++++++++++++++ Mtahs +++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-3))
console.log(Math.round(34.6434))
console.log(Math.ceil(34.3434)) //takes higher value always
console.log(Math.floor(34.9434)) // takes lower value always
console.log(Math.max(2,3,5,2,1,1))

console.log(` Random values - ${Math.random()}`);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

Math.random()