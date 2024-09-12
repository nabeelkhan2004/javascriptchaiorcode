//Singleton : Ensures a class has only one instance and provides a global access point to that instance.
// const webUser = new Object();

const newUser = {};


newUser.firstName = 'Nabeel',
newUser.lastName = 'Khan';
newUser.id = '12345';
newUser.isLoggedIn = false;

// console.log(newUser); //Output: object {}

const regularUser = {
    email: "someone@gmail",
    fullName: {
        userfullname: {
            firstName: 'Nabeel',
            lastName: 'Khan'
        }
    }
}

// console.log(regularUser['fullName']['userfullname']['firstName']); //Output: 'Nabeel'

//Merge Objects
const obj1 = { 1: 'a', 2: 'b' };
const obj2 = { 3: 'a', 4: 'b' };

//method 1

const obj3 = {...obj1, ...obj2}; //Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// const obj3 = {obj1, obj2}; //Output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// console.log(obj3)

//method 2

const obj4 = Object.assign({}, obj1, obj2)

// console.log(obj4); //Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


//Methods of Objects

// console.log(newUser); //Output: { firstName: 'Nabeel', lastName: 'Khan', id: '12345', isLoggedIn: false}

// console.log(Object.keys(newUser)); //Output: [ 'firstName', 'lastName', 'id', 'isLoggedIn' ]
// console.log(Object.values(newUser)); //Outut: [ 'Nabeel', 'Khan', '12345', false ]
// console.log(Object.entries(newUser)); //Output: [ [ 'firstName', 'Nabeel' ], [ 'lastName', 'Khan' ],  [ 'id', '12345' ],  [ 'isLoggedIn', false ] ]

// console.log(newUser.hasOwnProperty('id')); //Output: true (use for check property availability)

//Some important object methods

/*
Object.keys: Get property names.
Object.values: Get property values.
Object.entries: Get key-value pairs.
Object.assign: Merge objects.
Object.freeze: Prevent modifications.
Object.seal: Prevent property additions/removals.
Object.create: Create objects with prototypes.
Object.getPrototypeOf: Get prototype.
Object.setPrototypeOf: Set prototype.
Object.defineProperty: Define or modify properties.
Object.defineProperties: Define or modify multiple properties. */

//Destructuring

const deStrObj = {
    fistName: 'Nabeel',
    lastName: 'Khan',
    ID: 12345,
    userStatus: 'deactive',

}

const {userStatus} = deStrObj

// console.log(userStatus); //Output: 'deactive' (use object key as variable)

const {userStatus : status} = deStrObj

// console.log(status); //Output: 'deactive' (use status as variable)
