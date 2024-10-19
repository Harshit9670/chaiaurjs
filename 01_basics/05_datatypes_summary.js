//According to the way in which data are stored in memory and data are accesed datatypes are divided in two parts

//PRIMITIVE (Stack memory is used in primitive datatypes)
  //7 types: String,Number,Boolean,null,undefined,Symbol,BigInt
//call by value
 //JavaScript is dynamic language
 //When stack memory is used then a copy is created



//NON PRIMITIVE or Reference type (Heap memory is used in non primitive datatype)
 //These are those values whose refenrnce are used directly
//here reference are used
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



   // *********************************************

   //MEMORY
   //In primitive data types stack memory are used while in non primitive heap memory are used

   let myYoutubename="harshittiwaridotcom"
   let anothername=myYoutubename
   anothername="chaiaurcode"
   console.log(myYoutubename);
   console.log(anothername);

   let userOne={
      email: "tiwarih463@gmail.com",
      upi: "user@ybl"

   }
   let userTwo=userOne
   userTwo.email="harshittiwari@gmail.com"

   console.log(userOne.email)
   console.log(userTwo.email)
   
   
   
   
   
   
