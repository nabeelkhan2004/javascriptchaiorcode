//Singleton : Ensures a class has only one instance and provides a global access point to that instance.
//object.create();

//Object Literals

const mySym = Symbol("myKey1");

// console.log(typeof mySym)

const myObj = {
   'first Name': 'Nabeel',
   'last Name': 'Khan',
   [mySym]: 'key1',
   age: 33,
   city: 'Karachi',
   hobbies: ['Swimming', 'Coding', 'Learing'],
   isLoggedIn: false   
}

//There are two ways to access object properties
// console.log(myObj.age); //Output: 33
// console.log(myObj['first Name']); //preffered way //Output: 'Nabeel'

// console.log(typeof myObj[mySym]); //Output: string (string output is not the type of key, it is value type of)

//Freezing for changing an Object

// console.log(myObj) //Output: [mySym] will be shown as [Symbol(myKey1)]

// Object.freeze(myObj);

myObj.age = 34;

// console.log(myObj.age); //Output: 34 (despite changing on line 92)

myObj.greeting = function greet() {
   console.log(`Hello JS World, ${this["first Name"]}`)
   return "tested"
}

// console.log(myObj.greeting()); //Output: "Hello JS World Nabeel" & it returns "tested"

// console.log(myObj);
