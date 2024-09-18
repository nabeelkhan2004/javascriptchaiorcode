//Control Flow

// if statement
//Conparassion Operator <, >, <=, >=, ==, !=, ===, !==
/*
**JavaScript Operators Classification**

1. Arithmetic Operators
   Addition (`+`)
   Subtraction (`-`)
   Multiplication (`*`)
   Division (`/`)
   Modulus (`%`)
   Increment (`++`)
   Decrement (`--`)

2. Assignment Operators
   Assignment (`=`)
   Addition Assignment (`+=`)
   Subtraction Assignment (`-=`)
   Multiplication Assignment (`*=`)
   Division Assignment (`/=`)

3. Comparison Operators
   Equal to (`==`)
   Strict Equal to (`===`)
   Not Equal to (`!=`)
   Strict Not Equal to (`!==`)
   Greater than (`>`)
   Less than (`<`)
   Greater than or Equal to (`>=`)
   Less than or Equal to (`<=`)

4. Logical Operators
   Logical AND (`&&`)
   Logical OR (`||`)
   Logical NOT (`!`)
   Nulish Coalescing Operator (`??`)

5. Bitwise Operators
   AND (`&`)
   OR (`|`)
   XOR (`^`)
   NOT (`~`)
   Left Shift (`<<`)
   Right Shift (`>>`)

6. Ternary Operator
   Conditional (`? :`)

7. **Type Operators**
   `typeof`
   `instanceof`

8. String Operator
   Concatenation (`+`)

9. Comma Operator
   Comma (`,`)

10. Unary Operators
   Unary Plus (`+`)
   Unary Negation (`-`)

11. Spread and Rest Operators
   Spread/Rest (`...`)

12. Nulish Coalescing Operator
    (??)
*/

const isUserLoggedIn = true
const temperature = 42

// if (temperature <= 41 ) {
//     console.log('temperature is less than or equal to 41')
// } else {
//     console.log(`temperature is greater than 41` )
// }

// console.log('executed')

const score = 200

// if (score > 100) {
//     const power = `Fly`
//     console.log(`user power: ${power}`)
// } 

// console.log(`user power: ${power}`)

const balance = 800

// if (balance > 500) console.log('test') //implicit Scope (accessable from global scope)

//implicit scope occurs when a variable is used without being explicitly declared using var, let, or const, causing it to be added to the global scope.

// if (balance < 500) {
//     console.log(`less than`, 500)
// } else if (balance < 750) {
//     console.log('less than', 750)
// } else if (balance < 900) {
//     console.log('Less than', 900)
// } else {
//     console.log('greater than', 900)
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false

if ((userLoggedIn && debitCard) && (loggedInFromEmail || loggedInFromGoogle)) {
    console.log(`allow to buy courses`)
}