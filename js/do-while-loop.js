"use strict";
// Ice cream cone exercise
// var allCones = Math.floor(Math.random() * 50) + 50;
// // console.log("You have " + allCones + " cones to sell.");
// // // add if statement inside do
// // do {
// //     var conesBought = Math.floor(Math.random() * 5) + 1;
// //     console.log("Thank you for buying " + conesBought + " ice cream cones.")
// //     allCones = allCones - conesBought;
// //     console.log(allCones + " left to sell.");
// //     if(conesBought > allCones && allCones > 0){
// //         console.log("Sorry, you want to buy " + conesBought + " cones, but I only have " + allCones + " left to sell.")
// //         allCones = 0;
// //     }
// // } while(allCones > 0);
// // console.log("I sold all of my cones!! ");


// added confirm statement below

// var allCones = Math.floor(Math.random() * 50) + 50;
// console.log("You have " + allCones + " cones to sell.");
// // add if statement inside do
// do {
//     var conesBought = Math.floor(Math.random() * 5) + 1;
//     console.log("Thank you for buying " + conesBought + " ice cream cones.")
//     allCones = allCones - conesBought;
//     console.log(allCones + " left to sell.");
//     if(conesBought > allCones && allCones > 0){
//         console.log("Sorry, you want to buy " + conesBought + " cones, but I only have " + allCones + " left to sell.")
//         var buyTheRest = confirm("Would you like to buy them?")
//         if(buyTheRest){
//             console.log("Thank you for your business.");
//             allCones = allCones - conesBought;
//         }
//     }
// } while(allCones > 0);
// console.log("I sold all of my cones!! ");
//issue: returning negative number left to sell.

// instructors solution:

// var allCones = Math.floor(Math.random() * 50) + 50;
//
// do {
//     var conesBought = Math.floor(Math.random() * 5) + 1;
//     console.log(conesBought + " cones sold.");
//     if(conesBought > allCones){
//         console.log("Cannot sell you " + conesBought + " cones, I only have " + allCones);
//     }
//     allCones = allCones - conesBought;
// } while(allCones > 0);
// console.log("Yay! I sold them all!");

// var allCones = Math.floor(Math.random() * 50) + 50;
// do {
//     var conesBought = Math.floor(Math.random() * 5) + 1;
//     if(conesBought > allCones){
//         console.log("I can't sell "+ conesBought + " cones, I only have " + allCones + " left.");
//     } else {
//         allCones = allCones - conesBought;
//         console.log("I sold " + conesBought + " and have " + allCones + " left to sell.");
//     }
// } while (allCones > 0);
// console.log("I sold all my cones.")

