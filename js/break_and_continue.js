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
// var userInput = prompt("Enter an odd number between 1 and 50.");
// // do {
// //
// //     if(typeof userInput !== Number){
// //         userInput = parseFloat(prompt("You did not enter an odd number."));
// //
// //     }
// //     for(var i = 1; i < 51; i += 2){
// //     if(i === userInput){
// //         console.log("Yikes! Skipping number: " + userInput);
// //         continue;
// //     }
// //     console.log("Here is an odd number; " + i);
// // }
// // } while (typeof userInput !== Number);
//
//
// while (userInput % 2 !== 0 && userInput < 50){
//     console.log("congrats0");
//     break;
// }


var userInput = parseFloat(prompt("Please enter a number"));
while (userInput % 2 === 0 || isNaN(userInput) === true || userInput > 50) {
    userInput = parseFloat(prompt("Enter a different number."));
}
console.log("Number to skip is: " + userInput);
for (var i = 1; i < 51; i += 2) {
    if (i === userInput) {
            console.log("Yikes! Skipping number: " + userInput);
            continue;
        }
        console.log("Here is an odd number; " + i);
    }



