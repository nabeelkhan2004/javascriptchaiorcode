const coding = ['js', 'ruby', 'java', 'python', 'cpp']

coding.forEach((val) => val ) //forEach() is a Mutative method & that executes a provided function once for each array element, allowing easy iteration without returning a new array.

// console.log(coding) //[ 'js', 'ruby', 'java', 'python', 'cpp' ]

function printMe(val) {
    console.log(val)
}

// coding.forEach(printMe) //return complete Array (no need to call array just provide reference)

// coding.forEach((val, ind, arr) => console.log(val, ind, arr) ) //return value, index & full Array

const myCoding = [
    {
        languageName: 'javaScript',
        lanuageFileName: 'js'
    },
    {
        languageName: 'Java',
        lanuageFileName: 'java'
    },
    {
        languageName: 'Python',
        lanuageFileName: 'java'
    }
]

// myCoding.forEach((val) => console.log(val['languageName']))


/* Higher-order functions are functions that take other functions
as arguments or return them, enabling powerful functional programming
 techniques, such as callbacks and function composition.*/