const myNums = [1, 2, 3];

// reduce function
const myTotal = myNums.reduce( (acc, currval) => {
    // console.log(`acc: ${acc} currval: ${currval}`); // to see acc value and currval value -- not needed

    return acc + currval
}, 0) // here 0 is kaha se acc start karna chah rhe ho...

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => {
    return acc + item.price;
}, 0);
console.log(priceToPay);
