// for 

for(let i = 0; i <= 10; i ++){
    const element = i;
    if(element == 5){
        // console.log("5 is best number");
    }
    // console.log(element);
}

for(let i = 0; i <= 10; i ++){
    // console.log(`Outer loop value : ${i}`);
    for(let j = 0; j <= 10; j ++){
        // console.log(`Inner loop value : ${j} and inner loop ${i}`);
    }
}

// Printing table 
for(let i = 0; i <= 5; i ++){
    // console.log(`Outer loop value : ${i}`);
    for(let j = 0; j <= 10; j ++){
        // console.log(i * j);
    }
}

let myArray = ["flash", "batman", "superman"];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue
for(let i = 1; i <= 20; i ++){
    if(i == 5){
        // console.log(`Detected 5`);
        break;
    }
    // console.log(`Value of i is ${i}`);
}
for(let i = 1; i <= 20; i ++){
    if(i == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}

// break output -- Control execution ko direct bahar fek dete hain
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5

// continue output -- ek baar maaf kardo, ek baar ke liye condition skip kardo
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5
// Value of i is 6
// Value of i is 7
// Value of i is 8
// Value of i is 9
// Value of i is 10
// Value of i is 11
// Value of i is 12
// Value of i is 13
// Value of i is 14
// Value of i is 15
// Value of i is 16
// Value of i is 17
// Value of i is 18
// Value of i is 19
// Value of i is 20



