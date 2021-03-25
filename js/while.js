"use strict";

// var number = 1;
// var counter = 0
// while (counter < 16){
//     number = number * 2;
//     console.log(number);
//     counter++;
// }

//instructor example

var num = prompt("What number do you want to start with?");
var originalNumber = num;
var exponent = 2
// num = num * originalNumber;
// console.log(originalNumber + " to the power of " + exponent + " = " + num);
// exponent = exponent + 1;
// num = num * originalNumber;
// console.log(originalNumber + " to the power of " + exponent + " = " + num);
// exponent = exponent + 1;
while (exponent < 17){
    num = num * originalNumber;
    console.log(originalNumber + " to the power of " + exponent + " = " + num);
    exponent = exponent + 1;
}
