//Immediately Invoked Function Expressions (IIFE)
//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs immediately after it is defined, providing encapsulation by creating a local scope.

//IIFE Example 

(function func () { //IIFE is wrapped in parentheses to treat it as an expression instead of declaration, enabling immediate invocation
    console.log('DB Connected') //DB Connected
})(); //The semicolon at the end of an IIFE is necessary to prevent issues when the IIFE follows another statement, ensuring proper syntax and avoiding errors.

//ASI (Automatic Semicolon Insertion) is a JavaScript feature that automatically adds semicolons where they are omitted, but it can sometimes cause unexpected behavior

//IIFE Arrow Function
(() =>  console.log('DB Connected Two'))(); //DB Connected Two


//IIFE Function passing value
((name) =>  console.log(`Welcome ${name}`))(`Nabeel`) //Welcome Nabeel