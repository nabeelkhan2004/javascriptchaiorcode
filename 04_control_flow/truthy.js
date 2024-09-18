//In JavaScript, truthy values are those that evaluate to true in a boolean context, including non-zero numbers, non-empty strings, objects, arrays, functions, and the boolean true.
/* List of Truthy values
1. `1`
2. `-1`
3. `"hello"`
4. `"false"`
5. `"0"`
6. `{}`
7. `[]`
8. `true`
9. `function() {}`
10. `new Date()`
11. `Infinity`
12. `-Infinity`
13. `Symbol()`
*/

const userEmail = 'n@nabeel.com'

// if (userEmail.length === 0) {
//     console.log('Array is Empty')    
// } 

const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log('Object is empty')
// }

//Nulish Coalescing Operator (??): Null undefined 

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15

// console.log(val1)

//Turnery Operator

let icecream_Price = 140;

// icecream_Price <= 120 ? console.log(`Icecream price is less than 120` ) : console.log(`Icecream price is more than 120`);