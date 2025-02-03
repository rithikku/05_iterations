const coding = ["js", "ruby", "java", "python", "cpp"];

// through normal function
coding.forEach( function (val) {
    // console.log(val);
} )

// through arrow function
coding.forEach( (item) => {
    // console.log(item);
} )

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )

// Object inside array 
// used in database 
const myCoding = [
    {
        languageName : "javascript",
        languageFile : "js"
    },
    {
        languageName : "java",
        languageFile : "java"
    },
    {
        languageName : "python",
        languageFile : "py"
    },
]
myCoding.forEach( (item) => {
    // console.log(item);
    // console.log(item.languageFile);
    // console.log(item.languageName);
})