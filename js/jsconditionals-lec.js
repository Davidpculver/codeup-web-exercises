"use strict";

// Condition will run if value is true.

// var isFive = 5;
// if (isFive === 5){
//     console.log("yes its five");
// }
// var isValid = true;
// if (isValid){
//     console.log("this works too");
// }
//
// function isItANumber(parameter){
//     if (typeof parameter === 'number'){
//         return "yep its a number";
//     } else {
//         return "That is not a number";
//     }
// }
//
// console.log(isItANumber(undefined));
//
// if (hasCow){
//     milkTheCow();
// } else {
//     goToStore();
// }


//only one action will come true. If both hasCow and hasGoat were true, it would break out after running hasCow.
// var hasCow = false;
// var hasGoat = true;
//
// if (hasCow){
//     console.log("I'll milk my cow");
// } else if (hasGoat){
//     console.log("I'll milk the goat today");
// } else {
//     console.log("Guess i have to go the store");
// }

// function isThisThirtyFive(parameter){
//     if (parameter === 35){
//         return "Yes that's 35";
//     } else if (parameter < 35){
//         return "Too bad, " + parameter +" is less than 35";
//     } else if (parameter > 35){
//         return "Too bad, " + parameter +" is greater than 35";
//     } else {
//         return "You must not have entered a number.";
//     }
// }
//
// console.log(isThisThirtyFive(38));

//ternary expression: Expression to set a value based on boolean evaluation. Only true/false, not a chain like if else statements: expression so value that we get back from ternary expression can be set to a variable to use later.
// var message = (booleanValue) ? "operation was true." : "was false";
// whatever value returns from function is set to action var
// var action = (doWeHaveMilk) ? cerealForBreakfast() : goToStore();

// function isItANumber(parameter){
//     return (typeof parameter === "number") ? "yes its a number" : "not a number";
// }
// console.log(isItANumber(5));

// //var isGreater is set to value of "that is less"
// var isGreater = (11 > 12) ? "That is greater" : "That is less";
// console.log(isGreater);

//SWITCH Statement: based on value of a variable
// var color = prompt("What is your favorite color?").toLowerCase();
//
// switch (color){
//     case "green":
//         alert("Thats my favorite");
//         //must include break, will run thru all the cases. acts as return in if/else statements
//         break;
//     case "orange":
//         alert("that's my bros fave color");
//         break;
//     default:
//         alert(color + " is nobody's fave color.");
//         //dont need break on default, but is ok to have
//         break;
// }

// var animal = prompt("What kind of animal do you own?").toLowerCase();
//
// switch (animal){
//     case "cow":
//         console.log("Milk the cow");
//         break;
//     case "goat":
//         console.log("Milk the goat");
//         break;
//     case "camel":
//         console.log("didnt know i could milk a camel");
//         break;
//     default:
//         console.log("Go to the store to get milk");
//         break;
// }

//checking value of variable against value of literals.
// var favoriteSandwich = prompt("What is your favorite sandwich meat?").toLowerCase();
//
// switch (favoriteSandwich){
//     case "olive loaf":
//         alert("That is a bold choice");
//         break;
//     case "brisket":
//         alert("Congrats, that is the right answer!");
//         break;
//     default:
//         alert("Sorry you dont like sandwiches");
//         break;
// }









