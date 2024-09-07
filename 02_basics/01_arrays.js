// array

const myArr = [0, 1, 2, 3, 4, 5];

myArr.push(6); //add value at the end of Array
myArr.pop(); //remove last Array's value

myArr.unshift(6); //add value at start of Array 
myArr.shift(); //remove first Array's value 

// console.log(myArr.slice(2, 5)); //return [2, 3, 4]
// console.log(myArr); //No changes in Array besauce in Non-Mutative method

// console.log(myArr.splice(2, 5)); //return [2, 3, 4, 5]
// console.log(myArr); //array changed besauce it's an Mutative method

// console.log(myArr.includes(6)); //return false because 6 is not included

// console.log(myArr.indexOf(6)); //will always return -1 for unavailable values in Array

// console.log(myArr.indexOf(2)); //will return index numer for available values in Array

const newArray = ['N', 'A', 'B', 'E', 'E', 'L']

// console.log(newArray.join("-")); //Output: combine values into string


// "new Array() has no extra methods, just like [],
// but with a single number, it creates an empty array of that length."

const constructorArray = new Array(5)

// console.log(constructorArray) //Output: [<5 empty Items>]

constructorArray[0] = 10; //Output: return [ 10, <4 empty items>]
constructorArray[1] = 20; //Output: return [ 10, 20, <3 empty items>]
constructorArray[3] = 40; //Output: return [ 10, 20, <1 empty items>, 40, <1 empty items>]

// constructorArray = [1, 2, 3, 4, 5]; //will throw error, Array cannot be replace with another Array because "constrctorArray" declared using "const"

// console.log(constructorArray); //Array is Non-primitve so change would directly impact to original array
 
//Mutative & Non-Mutative methods

//"Mutative methods directly modify the original array in place, such as push(), pop(), and splice()."
/*Mutative Methods:
1. push(...items) - Adds items to the end.
2. pop() - Removes the last item.
3. shift() - Removes the first item.
4. unshift(...items) - Adds items to the beginning.
5. splice(start, deleteCount, ...items) - Removes/updates items from a specific index and optionally adds new items.
6. reverse() - Reverses the order of items.
7. sort(compareFunction) - Sorts the items in place.
8. fill(value, start, end) - Fills elements from start to end with a specified value.
9. copyWithin(target, start, end) - Copies a section of the array to another location within the same array*/ 

//"Non-mutative methods return a new array or value without altering the original array, such as map(), filter(), and slice()."

/*Non- Mutative Methods
1. concat(...arrays) - Returns a new array by combining arrays.
2. slice(start, end) - Returns a shallow copy of a portion of the array.
3. join(separator) - Returns a string by joining array elements.
4 map(callback) - Returns a new array with the results of applying the callback.
5. filter(callback) - Returns a new array with elements that pass the test.
6. reduce(callback, initialValue) - Returns a single value by applying the callback.
7. reduceRight(callback, initialValue) - Similar to reduce but processes elements from right to left.
8. find(callback) - Returns the first element that satisfies the condition.
9. findIndex(callback) - Returns the index of the first element that satisfies the condition.
10. includes(valueToFind, fromIndex) - Checks if an array includes a certain value.0
11. indexOf(valueToFind, fromIndex) - Returns the first index of the specified value.
12. lastIndexOf(valueToFind, fromIndex) - Returns the last index of the specified value.*/