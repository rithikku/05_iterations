const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map method 
const newNum = myNumbers.map( (num) => {
    return num + 10;
})

// console.log(newNum);


// Chaning....
// Multiple map filter....
const newNums = myNumbers.map( (num) => {
    return num * 10;
})
.map( (num) => {
    return num + 1;
})
.filter( (num) => {
    return num >= 40;
})

console.log(newNums);




