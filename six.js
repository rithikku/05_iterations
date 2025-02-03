const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach( (item) =>{
    // console.log(item);
    // return item;
} )

// console.log(values); // forEach loop didn't return any kind of values so it is ...undefined


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// when you use filter so you have to give condition --- Important nd Easy....
const newNums = myNums.filter( (num) => {
    return num > 4
} );

// console.log(newNums);


// through forEach method 
const newNumss = [];

myNums.forEach( (num) => {
    if (num > 4) {
        newNumss.push(num);
    }
} )

// console.log(newNumss);


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

const userBooks = books.filter( (bk) => {
    return bk.genre === 'History';
} )

// console.log(userBooks);

const booksPublish = books.filter( (pub) => {
    return pub.publish >= 1995 && pub.genre === 'History';
} )

console.log(booksPublish);

