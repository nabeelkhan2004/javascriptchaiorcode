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

console.log(typeof stringNumber);