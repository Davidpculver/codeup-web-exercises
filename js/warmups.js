'use strict'


// function fizzBuzz() {
//     for(let i = 1; i <= 30; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log("FizzBuzz")
//         } else if(i % 3 === 0){
//             console.log("Fizz")
//         } else if(i % 5 === 0){
//             console.log("Buzz")
//         } else {
//             console.log(i)
//         }
//     }
// }
// fizzBuzz();

// const returnSeven = () => 7;
//
// console.log(returnSeven());

// function timesFive(num) {
//     if(typeof num !== "number"){
//         return 0;
//     } else {
//         return num * 5;
//     }
// }

// const timesFive = num => typeof num === "number" ? num * 5 : 0;
//
// console.log(timesFive(true));

const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// fruits.pop();
console.log(fruits);

// fruits.splice(1, 2);
// console.log(fruits);

fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);