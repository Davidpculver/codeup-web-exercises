"use strict";

// var userInput = parseFloat(prompt("Please enter an odd number between 1 and 50."));
// console.log("Number to skip is: " + userInput);
// for(var i = 1; i < 51; i += 2){
//     if(i === userInput){
//         console.log("Yikes! Skipping number: " + userInput);
//         continue;
//     }
//     console.log("Here is an odd number; " + i);
// }

// do {
//     var userInput = parseFloat(prompt("You did not enter an odd number."));
//     console.log("Number to skip is: " + userInput);
// } while (isNaN(userInput) === true || userInput % 2 === 0);
//
// for(var i = 1; i < 51; i += 2){
//     if(i === userInput){
//         console.log("Yikes! Skipping number: " + userInput);
//         continue;
//     }
//     console.log("Here is an odd number; " + i);
// }

//
// THIS WORKS!! MY final
// var userInput = parseFloat(prompt("Please enter an odd number between 1 and 50."));
// while (userInput % 2 === 0 || isNaN(userInput) === true || userInput > 50) {
//     userInput = parseFloat(prompt("Enter a different number."));
// }
// console.log("Number to skip is: " + userInput);
// for (var i = 1; i < 51; i += 2) {
//     if (i === userInput) {
//             console.log("Yikes! Skipping number: " + userInput);
//             continue;
//         }
//         console.log("Here is an odd number; " + i);
//     }

// Instructor example:
var oddNumber = 0;
while (oddNumber !== "You're never gonna come up with this"){
    oddNumber = parseFloat(prompt("Please enter an odd number between 1 and 50."));
    if(oddNumber % 2 === 1 || (oddNumber > 0 || oddNumber > 50)){
        break;
    }
}
for (var i = 1; i < 50; i = i + 2){
    if(i === oddNumber){
        console.log("Yikes! Skipping number " + oddNumber);
        continue;
    }
    console.log(i);
}

// while(oddNumber % 2 !== 1 || !(oddNumber > 0 || oddNumber > 50)) {
//     oddNumber = parseFloat(prompt("Please enter an odd number between 1 and 50."));
// }



















