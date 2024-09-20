//Reduce Method

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce((accumulator, CurrentValue) => {
//     console.log(`accumulator: ${accumulator} & CurrentValue: ${CurrentValue}`)
//     return accumulator + CurrentValue}, 0 )

const myTotal = myNums.reduce((accumulator, CurrentValue) => accumulator + CurrentValue, 5 )

// console.log(myTotal);

const shoppingCart = [
    {
        itemName : 'Js Course',
        price : 999
    },
    {
        itemName : 'mobile course',
        price : 2999
    },
    {
        itemName : 'mobile dev course',
        price : 5999
    },
    {
        itemName : 'data science course ',
        price : 22999
    }
]

const priceToPay = shoppingCart.reduce((accumulator, CurrentValue) => accumulator + CurrentValue.price, 0)

console.log(priceToPay)