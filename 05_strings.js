const name = "Achintya"
const repoCount = 50

// console.log(name + repoCount + " values");
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

// string decelration
const myName = "Achintya"
const gameName = new String("Among-Us")

console.log(myName);
console.log(myName[0]);
console.log(gameName);
console.log(gameName[0]);
console.log(gameName[2]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(0,4)
console.log(newString);

const newStr = "   achintya she dededjen  "
console.log(newStr);
console.log(newStr.trim());


const url = "https://achintyashende%20versal.app"

console.log(url.replace('%20', '-'));
console.log(url.includes('achintya'));


console.log(gameName.split('-'));
