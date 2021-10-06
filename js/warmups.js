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

// const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// // fruits.pop();
// console.log(fruits);
//
// // fruits.splice(1, 2);
// // console.log(fruits);
//
// fruits.sort();
// console.log(fruits);
// fruits.reverse();
// console.log(fruits);
//
//
//
// function splitString(){
//     let testString = "I have a lovely bunch of coconuts";
//     let noLetterA = [];
//     let words = testString.split("");
//     for (let i = 0; i<words.length; i++){
//         if (words[i] !== "a"){
//             if (words[i] !== "o"){
//                 noLetterA.push(words[i]);
//             }
//         }
//     }
//     console.log(noLetterA.join(''));
// }
//
// splitString();


function reverseSentence(sentence) {
    console.log(sentence.split("").reverse().join(''));
}

reverseSentence("This sentence is reversed");


//sums the numbers together
function sumOfNumber(num) {
    let sum = 0;
    let splitNum = num.toString().split("");
    for (let i = 0; i < splitNum.length; i++) {
        sum += parseInt(splitNum[i]);
    }
    console.log(sum);
}

sumOfNumber(123456);


function multTable(x) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${x} x ${i} = ${(x * i)}`);
    }
}

multTable(5);

// for (let i = 0; i <= 10; i++){
//     let ranNumb = Math.floor(Math.random() * 10) + 1;
//     if (ranNumb % 2 === 0){
//         console.log(`${ranNumb} is even.`)
//     } else {
//         console.log(`${ranNumb} is odd.`)
//     }
//     // console.log(ranNumb);
// }

// function fizzbuzz(num) {
//     for (let i = 1; i <= num; i++){
//         if(i % 3 === 0 && i % 5 === 0) {
//             console.log("Fizzbuzz");
//         } else if (i % 3 === 0){
//             console.log("Fizz");
//         } else if (i % 5 === 0){
//             console.log("Buzz");
//         } else {
//             console.log(i)
//         }
//     }
// }
//
// fizzbuzz(50);

function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let num3;
    console.log(num1);
    console.log(num2);
    for (let i = 0; i < num; i++) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
        console.log(num3);

    }
    console.log(`The fibonacci of ${num} is ${num3}! `);
}

fibonacci(15);


function fibArray(num) {
    let array = [0, 1];
    for (let i = 2; i <= num; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }
    console.log(array.join(', '));
}

fibArray(6);


function coins(num) {
    let counter = 0;
    console.log(num);
    for (let i = 0; i < num; i++) {
        console.log(num);
        if (num % 5 === 0) {
            counter += 1;
            num -= 5;
            continue;
        } else if (num % 3 === 0) {
            counter += 1;
            num -= 3;
            continue;
        } else if (num === 0) {
            console.log(num);
            console.log(counter);
        } else {
            counter += 1;
            num -= 1;
            continue;
            console.log(num);
        }
    }
}

coins(10);

