


const balance = new Number(100.12345)
// console.log(balance); //Output: [Number: 100]

// console.log(balance.toString()); //Output: "100"
// console.log(balance.toFixed(2)); //Output: "100.00"

// console.log(balance.toPrecision(4)); //Output: "100.1"

const numberValue = 1000000000

// console.log(numberValue.toLocaleString()); //Output: "1,000,000,000"

// console.log(numberValue.toLocaleString("en-IN")); //Output: "1,00,00,00,000"

// console.log(numberValue.toLocaleString("fi-FI")); //Output: "1 000 000 000"

// console.log(numberValue.toLocaleString("en-US", {"style" : "currency", "currency" : "USD"})); //Output: "$1,000,000,000.00"

/*Number/String objects wrap primitives for extra methods, but are less used compared to primitives. Ordinary objects store custom key-value pairs.
Primitives are basic types (like number, string) and
non-primitive (objects, arrays) are complex structures.*/

// console.log(Math); //Output: Object [Math] {}

// console.log(Math.abs(-10)); //Output: 10 //will return always positive value
// console.log(Math.round(5.1)); //Output: 5 //remove decimal numbers & return integer 
// console.log(Math.ceil(5.1)); //Output: 6 //return max value of decimal integar
// console.log(Math.floor(5.9)); //Output: 5 //return min value of decimal integer 

// console.log(Math.min(1, 0, 15, 20, 25, 3, 8, 10, 9, 21)); //Output: 0 //return minimum value in array
// console.log(Math.max(1, 0, 15, 20, 25, 3, 8, 10, 9, 21)); //Output: 25 //return maximun value in array

// console.log( Math.random()) //return random numbers between 0 - 1
// console.log( Math.ceil(Math.random() * 6)); //return random numbers from 1 - 6

// console.log( (Math.round(Math.random() * 11) + 10)); //Output will return numbers from 10 - 21