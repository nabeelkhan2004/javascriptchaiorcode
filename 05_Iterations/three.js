// for of Loop

// ['', '', '']
// [{}, {}, {}]

const myArray = [1, 2, 3, 4, 5]

// for (const val of myArray) {
//     console.log(val); 
// }

const greetings = 'Hello World'

// for (const greet of greetings) {
//     if (greet == " ") {
//         continue;
//     }
//     console.log(greet)    
// }

//Map

/*
Map allows flexible keys (any type), maintains insertion order,
tracks size with .size, offers methods (set, get, has, delete, clear),
supports iteration (for...of, .keys(), .values(), .entries()), 
allows objects as keys, prevents key collision (e.g., 1 vs "1"),
and provides better performance for large datasets. 

1. Key Types
In a Map, keys can be of any data type, including objects, functions, or primitives (like numbers or strings).

2. Insertion Order
Map maintains the order of insertion, meaning items are iterated in the same order they were inserted

3. Size Property
Map has a size property that returns the number of key-value pairs in the map

4. Methods
- set(key, value): Adds or updates an entry in the Map.
- get(key): Returns the value associated with the key.
- has(key): Returns true if the key exists in the Map.
- delete(key): Removes the entry with the specified key.
- clear(): Removes all entries from the Map.

5. Iterables
Map objects are iterable, meaning you can loop over their entries using methods like forEach, for...of, etc.
keys(), values(), entries(): Methods to retrieve keys, values, or key-value pairs, respectively.

6. Objects as Keys
Unlike regular objects where keys are always converted to strings, Map allows objects (or other non-string types) to be used as keys.

7. No Key Collision
In a Map, primitive values (like strings, numbers) and objects are treated as distinct, meaning 1 and "1" would be two separate keys.

8. Performance
Map objects generally offer better performance in frequent addition/removal of key-value pairs compared to plain objects when dealing with large datasets.

JavaScript mein Map ek built-in object hota hai jo key-value pairs ko store karta hai. Yeh kuch unique features offer karta hai jo isse normal JavaScript objects se alag banate hain. Here are some of the key features of a Map:

1. Key Types
In a Map, keys can be of any data type, including objects, functions, or primitives (like numbers or strings).
Example:
javascript
Copy code
let map = new Map();
map.set(1, 'number');
map.set('1', 'string');
map.set({}, 'object');
map.set(() => {}, 'function');
console.log(map);
2. Insertion Order
Map maintains the order of insertion, meaning items are iterated in the same order they were inserted.
Example:
javascript
Copy code
let map = new Map();
map.set('a', 1);
map.set('b', 2);
for (let [key, value] of map) {
  console.log(key, value);
}
3. Size Property
Map has a size property that returns the number of key-value pairs in the map.
Example:
javascript
Copy code
let map = new Map();
map.set('a', 1);
console.log(map.size); // Output: 1
4. Methods
set(key, value): Adds or updates an entry in the Map.
get(key): Returns the value associated with the key.
has(key): Returns true if the key exists in the Map.
delete(key): Removes the entry with the specified key.
clear(): Removes all entries from the Map.
Example:

javascript
Copy code
let map = new Map();
map.set('name', 'Nabeel');
console.log(map.get('name')); // Output: Nabeel
console.log(map.has('name')); // Output: true
map.delete('name');
console.log(map.has('name')); // Output: false
map.clear();
console.log(map.size); // Output: 0
5. Iterables
Map objects are iterable, meaning you can loop over their entries using methods like forEach, for...of, etc.
keys(), values(), entries(): Methods to retrieve keys, values, or key-value pairs, respectively.
Example:
javascript
Copy code
let map = new Map();
map.set('name', 'Nabeel');
map.set('age', 33);

// Iterating over keys
for (let key of map.keys()) {
  console.log(key);
}

// Iterating over values
for (let value of map.values()) {
  console.log(value);
}

// Iterating over entries
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
6. Objects as Keys
Unlike regular objects where keys are always converted to strings, Map allows objects (or other non-string types) to be used as keys.
Example:
javascript
Copy code
let obj = { id: 1 };
let map = new Map();
map.set(obj, 'Object Key');
console.log(map.get(obj)); // Output: Object Key
7. No Key Collision
In a Map, primitive values (like strings, numbers) and objects are treated as distinct, meaning 1 and "1" would be two separate keys.
Example:
javascript
Copy code
let map = new Map();
map.set(1, 'number');
map.set('1', 'string');
console.log(map.get(1)); // Output: number
console.log(map.get('1')); // Output: string
8. Performance
Map objects generally offer better performance in frequent addition/removal of key-value pairs compared to plain objects when dealing with large datasets.

Summary
Flexible keys: Allows keys of any data type.
Ordered: Maintains the insertion order of keys.
Size tracking: Easily retrieve the number of elements with .size.
Efficient: Faster for adding and removing large numbers of key-value pairs compared to regular objects.
*/

const mapObj = {
    PK : 'Pakistan',
    USA : 'United States of America',
    FR : 'France',
}

const map = new Map()
map.set('USA', 'United States of America')
map.set('FR', 'France')
map.set('PK', 'Pakistan')

// console.log(map)

// for (const keys of map) {
//     console.log(keys) // return array or each key and value: ['USA', 'United States of America'][ 'FR', 'France' ][ 'PK', 'Pakistan' ]
// }

// for (const [keys, value] of map) {
//     console.log(keys, ':', value) //USA : United States of America, FR : France, PK : Pakistan
// }

// for (const [keys, value] of mapObj) {
//     console.log(keys, ':', value) //mapObj is not iterable because "for of" loop does not work for map objects
// }

