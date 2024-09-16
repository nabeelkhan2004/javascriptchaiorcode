const user = {
    username: 'nabeel',
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website `); //We use "this" keyword for current context
        // console.log(this);
    }
    
}

// user.welcomeMessage()
// user.username = 'Sam'
// user.welcomeMessage()


// console.log(this); // {}

// function func () {
//     let username = 'Nabeel'
//     console.log(this.username);
// }

// func()

// const func = function () {
//     let username = 'Nabeel'
//     console.log(this.username);
// }

//Arrow function

const func = () => {
    let username = 'Nabeel'
    console.log(this); //this doesn't uses in function
}

// func()

//Arrow function with "explicit return"

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//Arrow function with "implicit return"

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(3, 4)) // 7 

const addTwo = (num1, num2) => ({username: 'Nabeel'}) //() uses in Arrow function body for return objects

console.log(addTwo()) // { username: 'Nabeel' }

// const myArray = [2, 3, 3, 7, 8]

// myArray.forEach()