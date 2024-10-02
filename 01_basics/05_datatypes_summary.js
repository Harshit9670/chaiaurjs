//According to the way in which data are stored in memory and data are accesed datatypes are divided in two parts

//PRIMITIVE
  //7 types: String,Number,Boolean,null,undefined,Symbol,BigInt
//call by value
 //JavaScript is dynamic language



//NON PRIMITIVE or Reference type
 //These are those values whose refernce are used directly

   //Array,Objects,Functions

   let score;
   console.log(score);
   const id=Symbol("123")
   const anotherId=Symbol("123")
//    console.log(id);
//    console.log(anotherId);
   console.log(id==anotherId);

   const bigNumber=35456789907872n

   
   //Array,Objects,Function
   const heros = ["shaktiman","naagraj","doga"]
 console.log(heros);
 

   let myObj={
   Name: "Harshit",
   age: 21,
   }
   console.log(myObj);
   

   const myFunction=function(){
    console.log("HELLO WORLD");
    
   }
   console.log(myFunction());
   console.log(typeof myFunction);
   console.log(typeof heros);
   console.log(typeof myObj);

   

   console.log(typeof bigNumber);
   
   
   
