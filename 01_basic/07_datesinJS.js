//----------Dates----------

const myDate = new Date()

// console.log(myDate); //return Current date
// console.log(typeof myDate); //Output: Object
// console.log(myDate.toString()); //return date in string

const myNewDate = new Date(1990, 9, 15, 15, 10);
// console.log(myNewDate); //return desired date

const newDateNow = Date.now()

// console.log(newDateNow); //return time in miliseonds from Jan 01, 1970
// console.log(myDate.getTime()); //return time in miliseonds from Jan 01, 1970

myDate.toDateString()

// console.log(myDate.toLocaleString('default', {
//     weekday: 'short',
//     era: "long"}));
