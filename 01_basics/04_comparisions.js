//Simple Comparisions

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//javaScript convert string into number for comparison.
// console.log("2" > 1);
// console.log("02" > 1);

//Type coercion is the automatic conversion of values from one data type to another during operations or comparisons in JavaScript but it has some different rule for == operator because == operator never check datatypes but === operator check datatypes.

// console.log( null > 0);
// console.log( null < 0);
// console.log( null == 0);
// console.log( null >= 0);
// console.log( null <= 0);

//When you use Number(null), JavaScript converts null to 0. This is because null represents the absence of any value, but it's still treated as an "empty" value, which converts to 0 in numerical operations.
console.log(null == 0);

//When you use Number(undefined), JavaScript returns NaN (Not-a-Number). This is because undefined is interpreted as "no value has been assigned," which makes it impossible to convert into a meaningful number.
console.log(undefined == 0);