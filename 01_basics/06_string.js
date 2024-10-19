 const name="hitesh" //Strinng DEclaration
 console.log(name)
const repoCount=50
// console.log(name+repoCount+" value") This is out dated
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`); //This is modern method here we can also use various function like name.upper it changes the name into upper case

//Another way to declare string
const gameName=new String('Harshit-gaming-com')
console.log(gameName)
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))  //Here also zero indexing occurs
console.log(gameName.indexOf('g'))


const newString=gameName.substring(0,4)
console.log(newString)

const anotherString=gameName.slice(-13,-11) //In slice -ve index can be given
console.log(anotherString);

const newStringOne="   apple  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="harshit%20google.com"
console.log(url.replace('%20','-'));
console.log(url.includes('harshit'))
console.log(url.includes('abhi'))

console.log(gameName.split('-'));
