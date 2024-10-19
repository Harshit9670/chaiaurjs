const score = 400
console.log(typeof(score));
const balance=new Number(100)
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(1));

const otherNumber=23.8987
console.log(otherNumber.toPrecision(3));

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));



//++++++++++++++++++++++++++Maths++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.sqrt(225));
console.log(Math.min(5,2,8,3,9));
console.log(Math.max(5,2,8,3,9));

console.log(Math.random());  //This function gives random value betwwen 0 and 1
console.log((Math.random()*10 ));  //This gives between 0 to 10
console.log(Math.floor(Math.random()*10 )+1);   //This gives between 1 to 10

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);  //This gives number between 10 to 20





