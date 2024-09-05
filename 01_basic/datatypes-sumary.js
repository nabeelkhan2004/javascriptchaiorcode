// 7 types of Primitive Values

// string, number(NaN), boolean, undefined, null, bigInt, symbol

// Symbol makes values unique desoite same, for Example:
const name1 = Symbol("Nabeel")
const name2 = Symbol("Nabeel")

// console.log(name1 === name2); //result = false

//BigInt Example

const bigNumer = 123456789101112131415n;
console.log(typeof bigNumer)

// Reference (Non-Primitive)

// Array, Objects, Functions