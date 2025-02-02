// loop in Object through -- for in loop

const myObject = {
    js : 'Javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in loop in array -- in for of loop direct value utha leta tha, but yaha pe key dega
const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    // console.log(programming[key]);
}


const map = new Map();
map.set('IN', "India");
map.set('IN', "India");
map.set("USA", "United State of America");
map.set('FR', "France");

// it is not iterable 
for (const key in map) {
    // console.log(key);
}