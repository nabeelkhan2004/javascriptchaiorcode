// const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// const values = coding.forEach((Val) => console.log(Val))

// console.log(values)//ForEach doest not return any value it will always return undefined

//Arra.filter()

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const bigger_Than_4 = myNums.filter((val) => val > 4 ) //Array.filter() is Non-Mutative method
// console.log(bigger_Than_4) // [ 5, 6, 7, 8, 9, 10 ]

const newNums = []

myNums.forEach((val) => val > 4 && newNums.push(val)) //Same method with forEach() //The && operator in JavaScript allows for concise conditional execution; if the first condition is true, the second expression is evaluated and executed, enabling cleaner code in methods like forEach.

// console.log(newNums) //[ 5, 6, 7, 8, 9, 10 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks

//   userBooks = books.filter((val) => val.genre === "History") //Filter is Non-Mutative
  
  userBooks = books.filter((val) => val.publish >= 1995 && val.genre == "History") //Filter is Non-Mutative
  console.log(userBooks)