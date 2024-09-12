
// ----------------new String() Method----------

// In JavaScript, when you use new String("String"), 
//you're creating a String object instead of a primitive string. 

const gameName = new String('Nabeel Khan');

// console.log(gameName[0]); //Output: "N"

//-------------funtions for String Method------------

// console.log(gameName.__proto__); //Output: "{}"


// console.log(gameName.length); //Output: "11"
// console.log(gameName.toUpperCase()); //Output: "NABEEL KHAN"

// console.log(gameName.charAt(5)); //Output: "l"
// console.log(gameName.indexOf('e')); //Output: "3"

const newString = gameName.substring(0, 5);
// console.log(newString); //Output: 'Nabee'

const anotherString = gameName.slice(-10, 5); //Output: 'abee'
// console.log(anotherString); //Output: 'abee'

const newAnotherString = '    Nabeel     ';
// console.log(newAnotherString.trim()); //Output: 'Nabeel'

const url = "nabeel.kk1990@gmail-com"
// console.log(url.replace("-", ".")); //Output: "nabeel.kk1990@gmail.com"
// console.log(url.includes('@')); //Output: true

console.log(gameName.split(' ')) //Output: [Nabeel, Khan]



/*In almost all cases, you should avoid using new String() and stick to 
primitive strings for better performance and cleaner code. The 
new String() method can create confusion and unnecessary 
overhead because of the difference in type and behavior.*/