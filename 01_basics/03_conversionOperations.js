let score = null

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


//conversion of data type in to number by using "Number" method.
// "33" => 33
// "33abc" => NaN (will show number when we check value by using "typeof" method)
// null => 0
// true => 1 & false = 0
// undefined => 0

// numbers of data types and their types
// null => object
// undefined => undefined
// NaN =>  NaN
// "value" => string
// 123 => number

let isLoggedIn = 1;

let isBooleanLoggedIn = Boolean(isLoggedIn);

// console.log(isBooleanLoggedIn);

//conversion of data type in to boolean by using "Boolean" method.

// 0 
// -0
// null
// undefined
// NaN
// ""
// false
// all these values are "falsy values" means these values represents false boolean value type.
// all values other than "falsy values" will return true Boolean value.


let someNumber = 123;

let stringNumber = String(someNumber);

// console.log(typeof stringNumber);


// ***********************Operations****************

let value = 10
// console.log(value)
let negValue = -value
// console.log(negValue)


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(3%2);

let name1 = "Hello"
let name2 = " Nabeel"
// console.log(name1 + name2);

// console.log(1 + "2")
// console.log("1" + 2)
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

// console.log(3 + 4 * 2 % 4);

// console.log(+true);
// console.log(+"5")
// console.log(typeof(+"5"))
// console.log(+"Nabeel")

let incValue = 10;
let increment = incValue++;
// console.log(increment); 