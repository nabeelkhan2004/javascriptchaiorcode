// 7 types of Primitive Values

// string, number(NaN), boolean, undefined, null, bigInt, symbol

// Symbol makes values unique desoite same, for Example:
const name1 = Symbol("Nabeel")
const name2 = Symbol("Nabeel")

// console.log(name1 === name2); //result: false

//The maximum safe integer is 2^53 - 1, which equals 9,007,199,254,740,991. Beyond this limit, floating-point precision issues arise, For big number value use "n" at end of number to refer value as "bigint", for example:
const bigNumer = 123456789101112131415n;
// console.log(typeof bigNumer) //result:  bigint

// Reference (Non-Primitive)

// Array, Objects, Functions

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ***************Memory****************

// Stack (Ptimitive) and Heap (Non-Primitive)

// In JavaScript, memory management (allocating and
// deallocating memory) is generally handled by the Garbage
// Collector, which automatically frees up heap memory when
// objects are no longer referenced.

// Stack: Used for storing function calls, local variables, and
// primitive data. It's fast but limited in size.

//Heap: Used for dynamically allocated memory like objects
//and arrays, offering more space but with slower access.

//----------------Stack Memory Data--------------

let myYoutubeName = "Nabeel Khan";

let anotherName = myYoutubeName;
anotherName = "my Another Name";

// console.log(myYoutubeName); //return: "Nabeel Khan"
// console.log(anotherName); //Return: "my Another Name"

// -----------------Heap Momory Data--------------

let userOne = {
    name : "Nabeel Khan",
    DoB : "Sep 15, 1990"
}

let userTwo = userOne

userTwo.email = "nabeelkhan2004@hotmail.com"

// console.log(userTwo.email); //return: "nabeelkhan2004@hotmail.com"

