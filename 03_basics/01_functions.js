//Functions: Functions are used to make code reusable, organized, and easier to maintain by encapsulating tasks into manageable blocks.

//Without function we write this line again & again:
    // console.log('N');
    // console.log('A');
    // console.log('B');
    // console.log('E');
    // console.log('E');
    // console.log('L');

//Same code by using function

function sayMyName() {
    console.log('N');
    console.log('A');
    console.log('B');
    console.log('E');
    console.log('E');
    console.log('L');
}

// console.log(sayMyName); // Output: [Function: sayMyName] (Without parentheses - this returns the function reference, not execution) 

// sayMyName(); //Output: "N A B E E L"

//Function with Parameters

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}


// addTwoNumbers(); //Output: NAN, because no arguements were provided
// addTwoNumbers(5, 5); //Output: 10
// addTwoNumbers(5, 5); //Output: 10

//types of Parameters

/*
1. Formal Parameters: Parameters defined in the function declaration.
2. Actual Parameters (Arguments): The values passed to the function when it is called.
3. Default Parameters: Parameters that have a default value if no argument is provided.
4. Rest Parameters: Allows a function to accept an indefinite number of arguments as an array.
5. Named Parameters: Not directly supported in JavaScript, but can be mimicked using objects.
6. Destructured Parameters: Destructuring can be used to extract values from objects or arrays passed as parameters.
*/

// const result = addTwoNumbers(5, 3);

// console.log(result) //Output: 8 and undefined because function not retured any value)

function return_Result(number1, number2) {
    return number1 + number2 //function returning value
    console.log('Hello'); //Code would be unreachable bqz code ended at return
}

const function_value_stored = return_Result(10, 30); //function return value stored in a variable

// console.log(function_value_stored); //Output: 40

 function loginUSerMessage (username) {
    return `${username} successfully logged in`
 }
 
loginUSerMessage('Nabeel'); //nothing would be print unless value saved in a variable

// console.log(loginUSerMessage('Nabeel')); //Output: "Nabeel successfully logged in" 

// console.log(loginUSerMessage()); //Output: "undefined successfully logged in" because username variable value is undefine


 function loginUSerMessage2 (username) {
    if(username === undefined) /*condition would be true if value is undefined*/ {
        return console.log("please define a username")
    }
    return console.log(`${username} successfully logged in`)
 }
 
 // loginUSerMessage2(); //Output: "please define a username", due to if condition was true because no arguement was given 
 
 function loginUSerMessage3 (username = "Nabeel") /*Default value "Nabeel" would accept if username was not given8*/ {
     if(!username) /*another way to make false condition trueby using ! sign*/ {
        return console.log("please define a username")
    }
    return console.log(`${username} successfully logged in`)
 }

// loginUSerMessage3(); //Output: "please define a username", due to if condition was true because no arguement was given 


