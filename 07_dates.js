// Dates 
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate)

// let myCreatedDate = new Date(2004, 0, 2)
let myCreatedDate = new Date("01-02-2004")
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth()+1) // in it month stats from 0

newDate.toString('default',{
    weekday: "long"
})

console.log(newDate);