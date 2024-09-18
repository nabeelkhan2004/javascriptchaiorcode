/*
Types of Loop

Loop Statement
1. for loop
2. while loop
3. do...while loop
4. For in Loop (iterates over the enumerable properties of an object)
5. For of Loop (iterates over the values of an iterable object like arrays, strings, etc.)

Array Iteration Methods
forEach()
map()
filter()
reduce()
reduceRight()
some()
every()
find()
findIndex()
entries() (returns an iterator with key/value pairs)
keys() (returns an iterator with keys)
values() (returns an iterator with values)

Other Iterators
Object.keys(), Object.values(), Object.entries() (to iterate over object properties)
Set and Map iterators (forEach, keys, values, entries)

Advanced Iterators and Patterns
1. Symbol.iterator
2. Generators (function*)
3. Async Iterators (for await...of)
4. WeakMap and WeakSet Iterators
5. Object Iteration with Reflect
6. Promise.all and Promise.race (asynchronous iteration patterns)
7. Recursive Iteration

Source: ChatGPT
*/

//For Loop

/*
for (Declaration; Condition; Updation) {
    ///////////Code///////////
}
*/

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element)
//     if (element === 5) {
//         break; //Break Keyword use to terminate Loop
//     }
// }

// console.log(element) //ReferenceError: element is not defined


// for (let i = 1; i <= 50; i++) {
//     if ((i % 2) === 0  ) {
//         console.log(`${i} is an Even Number`) //Find an Even Number
//     } else {
//         console.log(i)
//     }
// }

// for (let i = 10; i > 0; i--) {
//     if (!(i === 0)) {
//         for (let j = 0; j <= 10; j++) {
//         console.log(`number ${i} of ${j} `)
//         }    
//     }
// }

// let myArray = ['Flash', 'Batman', 'Superman'];

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i]
//     console.log(`Index ${i}: ${myArray[i]}`)
// }

//Break & Continue

// for (let i = 1; i <= 20; i++) {
//     if (i === 5) {
//         console.log(`Detected 5`)   
//         break;     
//     }
//      console.log(`Value of i is ${i}`) 
// }

// for (let i = 1; i <= 20; i++) {
//     if (i === 5) {
//         console.log(`Detected 5`)
//         continue; //Skip rest of code and continue for loop
//     }
//      console.log(`Value of i is ${i}`) 
// }