// loop in array through -- for of loop

// ["", "", ""]
// [{}, {}, {}];

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!";

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// agar space aayega toh continue ho jayega 
for (const greet of greetings) {
    if(greet == " "){
        continue;
    }
    // console.log(`Each char is ${greet}`);
}


// Maps -- Only you get unique values, you don't get any duplicate values

const map = new Map();
map.set('IN', "India");
map.set('IN', "India");
map.set("USA", "United State of America");
map.set('FR', "France");

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


// for of in Object 
const myObject = {
    'game1' : "NFS",
    'game2' : 'Spiderman',
}

// Object is not iterable from this way 
for (const [key, value] of myObject) {
    // console.log(key, ':-', value);
}

