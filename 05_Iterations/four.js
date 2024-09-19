const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple'
}

// for (const key in myObject) {
//    console.log(`${key} shortcuy is for ${myObject[key]}`)
// }

const programming = ['js', 'rb', 'py', 'java', 'cpp']

// for (const key in programming) {
//     console.log(programming[key]) //return index of Array
// }

const map = new Map()
map.set('USA', 'United States of America')
map.set('FR', 'France')
map.set('PK', 'Pakistan')

// for (const key in map) {
//     console.log(key); //nothing will return because the for...in loop doesn't work on Map, it only iterates over an object's enumerable properties, while Map is iterable and supports the for...of loop instead. (enumrable mean "countable" or "Listable")   
// }

//for...in: Works on objects and their properties.

const myArray = [1, 2, 3, 4, 5]

// for (const key in myArray) {
//     console.log(key); //it access index of Array but its not recommended becuase it could access some unwanted properties of prototype
// }

// for (const key of myArray) {
//     console.log(key); // 1, 2, 3, 4, 5
// }

/*Key Differences:
for...in: Iterates over object properties (keys), suitable for objects, not recommended for arrays.
for...of: Iterates over values of iterable objects, ideal for arrays and Map. */
