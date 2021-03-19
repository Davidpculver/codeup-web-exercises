"use strict"
// immediately invoked function expression (IIFE's) helps protect your js console, prevents your local variables from being displayed in console. closing })(); at the bottom of page.
(function () {


// define a function:
    function doTheThing(input) {
        //do not need the var output: Can return input + "";
        var output = input + " was pulled into the function. Now it is this concatenated string.";
        return output;
    }

    console.log(doTheThing("Hot dog"));

//function keyword, name of function, parameters(can be named anything)
    function addStuff(x, y) {
        return x + y;
    }

    console.log(addStuff(17, 18));

// example of a "bad" function
    function logToConsole(info) {
        return console.log(info + " is something important to keep in mind.");
        //no value to return from console.log, doesnt hold on to the info, just logs to console
    }

//can use console.log to debugg
    function addingToString(str) {
        var finalString = str + " is a string.";
        //test to make sure function is working properly
        console.log(typeof finalString);
        finalString += " And if it wasnt a string it is now!";
        //test final result
        console.log(finalString);
        return finalString;
    }

//calling function(argument)
    addingToString("Antleope");

// global vs local variables

    var global = "Earth"
// global available to entire application
// console.log(global);
//
// function getGlobalAndLogIt() {
//     console.log(global);
// }

// getGlobalAndLogIt();

//local variables
    function getGlobalAndLogIt() {
        var local = "Neptune";
        console.log(global);
        console.log(local);
    }

    getGlobalAndLogIt();

// another way to define functions (already gave the function name as var)
    var coolGuyFunction = function (string) {
        return string + ", but with sunglasses.";
    }

    console.log(coolGuyFunction("skunk"));
})();

//following will not run, since it is outside of the IIFE.
console.log(coolGuyFunction("David"));