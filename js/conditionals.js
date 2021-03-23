"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color) {
//     var compareColor = color.toLowerCase();
//     if (compareColor === "blue") {
//         return "Blue is the color of the sky";
//     } else if (compareColor === "red") {
//         return " Strawberries are red";
//     } else if (compareColor === "cyan"){
//         return "I don't know anything about cyan";
//     } else {
//         return "Sorry, " + compareColor + " is not defined."
//     }
// }

// console.log(analyzeColor("Red"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// function analyzeColor(color) {
//     var compareColor = color.toLowerCase();
//     switch (compareColor) {
//         case "blue":
//             return "Blue is the color of the sky.";
//             break;
//         case "red":
//             return " Strawberries are red.";
//             break;
//         case "orange":
//             return "Orange is the color of oranges.";
//             break;
//         case "yellow":
//             return "Sunflowers are yellow.";
//             break;
//         case "green":
//             return "Green is the color of the grass";
//             break;
//         case "indigo":
//             return "I don't know anything about indigo.";
//             break;
//         case "violet":
//             return "Purple is the same color as violet to me.";
//             break;
//         default:
//             return "Sorry, " + compareColor + " is not defined."
//     }
// }
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var yourFavoriteColor = prompt("What is your favorite color?").toLowerCase();
//
// function analyzeColor(color) {
//         switch (color) {
//         case "blue":
//             alert ("Blue is the color of the sky");
//             break;
//         case "red":
//             alert (" Strawberries are red");
//             break;
//         case "cyan":
//             alert ("I don't know anything about cyan");
//             break;
//         default:
//             alert ("Sorry, " + compareColor + " is not defined.");
//             break;
//     }
// }
//
// analyzeColor(yourFavoriteColor);

// **Didnt need to rewrite the above code: Could have called : alert(analyxeColor(yourFavoriteColor)); after declaring yourFavoriteColor var

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckyNumber, totalPrice) {
//     if (luckyNumber === 0){
//         return totalPrice;
//     } else if (luckyNumber === 1){
//         var luckyNumber1 = (totalPrice - (totalPrice * .10)).toFixed(2);
//         return luckyNumber1;
//     } else if (luckyNumber === 2){
//         var luckyNumber2 = (totalPrice - (totalPrice * .25)).toFixed(2);
//         return luckyNumber2;
//     } else if (luckyNumber === 3){
//         var luckyNumber3 = (totalPrice - (totalPrice * .35)).toFixed(2);
//         return luckyNumber3;
//     } else if (luckyNumber === 4){
//         var luckyNumber4 = (totalPrice - (totalPrice * .50)).toFixed(2);
//         return luckyNumber4;
//     } else if (luckyNumber === 5){
//         return 0;
//     } else {
//          return totalPrice;
//     }
// }
//
// console.log(calculateTotal(1, 150.42));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// var yourTotal = parseFloat(prompt("What is your items full price?"));
// function calculateTotal(luckyNumber, totalPrice) {
//     if (luckyNumber === 0){
//         alert("Your lucky number is 0. You're a loser, you do not receive a discount. You pay $" + totalPrice + " sucka.");
//     } else if (luckyNumber === 1){
//         var luckyNumber1 = totalPrice - (totalPrice * .10);
//         alert("Your lucky number is 1. Your final price is: $" + luckyNumber1 + ". Have a great day!");
//     } else if (luckyNumber === 2){
//         var luckyNumber2 = totalPrice - (totalPrice * .25);
//         alert("Your lucky number is 2. Your final price is: $" + luckyNumber2 + ". Have a great day!");
//     } else if (luckyNumber === 3){
//         var luckyNumber3 = totalPrice - (totalPrice * .35);
//         alert("Your lucky number is 3. Your final price is: $" + luckyNumber3 + ". Have a great day!");
//     } else if (luckyNumber === 4){
//         var luckyNumber4 = totalPrice - (totalPrice * .50);
//         alert("Your lucky number is 4. Your final price is: $" + luckyNumber4 + ". Have a great day!");
//     } else if (luckyNumber === 5){
//         alert("Your lucky number is 5. Your entire purchase is free!! You lucky dog.");
//     } else {
//         alert("You just got caught stealing, your going to jail!");
//     }
// }
//
// console.log(calculateTotal(luckyNumber, yourTotal));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
//
// function analyzeNumber() {
//     var enterANumber = confirm("Would you like to enter a number?")
//     if (enterANumber === true){
//     var enteredNumber = parseFloat(prompt("Please enter a number."));
//     if(isNaN(enteredNumber)){
//         alert("You did not enter a number.");
//     } else {
//         if (enteredNumber % 2 === 0) {
//             var evenPlus = (enteredNumber + 100);
//             if(evenPlus >= 0){
//                 alert("Your number is even and positive! " + enteredNumber + " plus 100 equals " + evenPlus + ".");
//             } else {
//                 alert("Your number is even and negative! " + enteredNumber + " plus 100 equals " + evenPlus + ".");
//             }
//         } else {
//             var oddPlus = (enteredNumber + 100);
//             if(oddPlus > 0){
//                 alert("Your number is odd and positive! " + enteredNumber + " plus 100 equals " + oddPlus + ".");
//             } else {
//                 alert("Your number is odd and negative! " + enteredNumber + " plus 100 equals " + oddPlus + ".");
//             }
//         }
//     }
//     } else {
//         alert("You chose not to enter a number. Goodbye.");
//     }
// }
// analyzeNumber();
//
//
//
//***** Instructors example

//var participate = confirm("Would you like to enter a number?");
//
// if (participate){
//     var userNumber = parseFloat(prompt("please enter a number"));
//     if (isNaN(userNumber)){
//         alert("You did not enter a valid number.");
//     } else {
//         if (userNumber % 2 === 0){
//             alert("Your number is even.");
//         } else {
//             alert("Your number is odd.");
//         }
//         if (userNumber > 0){
//             alert("Your number is positive.")
//         } else {
//             alert("Your number is negative.")
//         }
//         alert(userNumber + 100 + " is what your number plus 100 equals.");
//     }
// } else {
//     alert("Ok, you didnt want to enter a number. Bye.");
//}

// **** Shorter and BETTER way:
var participate = confirm("Would you like to enter a number?");
var numberEntry;
function isOddOrEven(numberEntry){
    return (numberEntry % 2 === 0) ? "This number is even." : "This number is odd";
}

function isNegativeOrPositive(numberEntry) {
    return (numberEntry > 0) ? "This number is positive." : "This number is negative.";
}

function plus100(numberEntry) {
    return "Your number plus 100 is " + (parseFloat(numberEntry) + 100);
}

if(participate) {
    numberEntry = prompt("Please enter a number.");
    if (isNaN(numberEntry)){
        alert("Sorry, what you entered was not a number.");
    } else {
        alert(isOddOrEven(numberEntry));
        alert(isNegativeOrPositive(numberEntry));
        alert(plus100(numberEntry));
    }
} else {
    alert("You did not want to enter a number. Bye");
}









