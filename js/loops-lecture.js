"use strict";

//While loop

// var slices = 8;
// while (slices > 0){
//     console.log("I'll have a slice!")
//     slices = slices - 1;
//     if(slices > 1 || slices === 0) {
//         console.log("Now there's " + slices + " slices left!")
//     } else{
//         console.log("Now there's only " + slices + " slice left!")
//     }
// }
// console.log("No more pizza.");


// ask user for input over and over again: total up shopping cart

// Pseudocode: Write out logic of program without syntax
// Ask the user for input
// Get the user input
// declare a user input variable
// store user input in the variable
// declare a variable to store the total (accumulator)
// add the cost of new item to the total
// keep storing totals in accumulator
// tell the user how to end the program (sentinel value)
// loop back around and do again until user tells to stop

// var priceOfItem = parseFloat(prompt("Enter the price of your first item."));
// alert("The price of your item was " + priceOfItem);
// // create accumulator variable
// var totalCost = priceOfItem;
// // without userInput, infinate loop since parsefloat, never able to return STOP
// var userInput = "";
// // create a sentinel value
// while(userInput !== "STOP") {
//     userInput = (prompt("Enter the price of your next item. \r\n\ Enter STOP when you are done."));
//     if(userInput === "STOP"){
//         alert("Your final price is: $" + totalCost.toFixed(2))
//     } else {
//         priceOfItem = parseFloat(userInput);
//         totalCost = totalCost + priceOfItem;
//         alert("Your total is now " + totalCost.toFixed(2));
//     }
// }

// Do while loop
// only {} around the block of "do" code

// var number = Math.floor(Math.random() * 6) + 1;
// var guess;
//
// do {
//     guess = parseFloat(prompt("Enter a number between 1 and 6"));
// } while(guess !== number);
//
// alert("Your guess of " + guess + " matches the number " + number + "!");

// FOR loops - most common in programming
// short hand for while loops. For example:
// var count = 100;
// while (count >= 0){
//     console.log(count);
//     count = count -1;
// }

// var count = 0;
// while (count <= 100){
//     console.log(count);
//     count = count + 1;
// }

// after the block runs, the increment happens.
// var count;
// for (count = 0; count <= 100; count = count +1){
//     console.log(count);
// }


// often use i for the variable

// for (var i = 0; i<=100; i++ ){
//     console.log(i);
// }










