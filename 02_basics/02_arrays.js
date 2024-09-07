let myArr = ['Muhammad', 'Nabeel']

let newArr = ['Khan', 'Khattak']

// myArr.push(newArr); //Output will push the whole Array at last index

// console.log(myArr); //Output: ['Muhammad', 'Nabeel', ['Khan', 'Khattak']]

//Concate method can merge Array values instead of Arrays itself

let conArr = myArr.concat(newArr); //concatenate Array into new Array because "concat" method is Non-Mutative

// console.log(conArr); //Output: [ 'Muhammad', 'Nabeel', 'Khan', 'Khattak' ]

//Merging Array values an also achieve using Spread Operators

const spreadOperatorArray = [...myArr, ...newArr];

// console.log(spreadOperatorArray);

//Array additional methods

// console.log(Array.isArray(spreadOperatorArray)); //Output: ture (because "spreadOperatorArray" Array is available)
// console.log(Array.from('HELLOWORLD')); //Output: ['H','E','L','L','O','W','O','R','L','D']
// console.log(Array.from({name: 'Nabeel'})); //Output: return empty Array

/*
Type-Checking methods

### 1. **`typeof`**
   - Kisi variable ka primitive type check karne ke liye.

### 2. **`instanceof`**
   - Check karta hai ke koi object kisi specific class ya constructor ka instance hai ya nahi.

### 3. **`Array.isArray()`**
   - Check karta hai ke koi value array hai ya nahi.

### 4. **`Object.prototype.toString.call()`**
   - Detailed type checking ke liye, jo accurate type return karta hai.

### 5. **`isNaN()`**
   - Check karta hai ke koi value NaN hai ya nahi (Not-a-Number).

### 6. **`isFinite()`**
   - Check karta hai ke koi value finite number hai ya nahi.

### 7. **`Number.isInteger()`**
   - Check karta hai ke koi value integer hai ya nahi.

### 8. **`Number.isNaN()`**
   - NaN ko check karne ka zyada reliable tareeqa.

### 9. **`Number.isSafeInteger()`**
   - Check karta hai ke koi integer JavaScript ke safe range mein hai ya nahi.

### 10. **`Object.is()`**
   - Strict equality comparison ke liye (even for NaN and -0 vs +0).*/

const num1 = 100;

const num2 = 200;

const num3 = 300;

console.log(Array.of(num1, num2, num3)); //Output: [ 100, 200, 300 ] (Create & return Array of multiple elements) 