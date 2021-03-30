"use strict";

// Elements inside do not have to be same data type
var testArray = [];
var instructors = ["David", "Jay", "Javier", "Cody the Duck"];
var falsyValues = [false, null, "", 0, undefined, NaN];

// Can count the length of our arrays.
// Counts the number of elements in the array.
// Length on variable, as well as the literal (Literal array with 4 elements)
// console.log(instructors.length);
// console.log([].length);
// console.log([1,2,1,4,30].length);
//
// // Can access individual values in array. Zero indexed. (last element= -1 length)
// console.log(instructors[2]);
// console.log([1, 2, 3][0]); //literal - can't be used again unless saved to variable
// console.log(testArray[9]); //always returns undefined, longer than the array length.


//var randomIndex = Math.floor(Math.random() * instructors.length); // number multiplied is non inclusive maximum (-1 of what number puts) this 0-3, not 4. A good thing with arrays since zero indexed.

//alert("One of your instructors is named: " + instructors[randomIndex]);
//inside of square brackets to access index, able to put variable.

// console.log(instructors); //logs the arrays. Expand to list by clicking arrow next to the number of elements. Helpful for troubleshooting

// Access each index of array to work with elements within
// ITERATION:
// Zero indexed < .length, not <= .length
// for (var i = 0; i < instructors.length; i++){
//     console.log("One of your instructors is named: " + instructors[i]);
// }

// function testAllForFalsy(array) {
//     var finalVal = -1;
//     for (var j = 0; j < array.length; j++) {
//         if (array[j]) {    //Equivalent to: (Boolean(array[j]) === true)
//             alert("Truthy value detected at index: " + j);
//             finalVal = j;
//         }
//     }
//     if (finalVal === -1){ //-1 means that value does not exist inside of the array.
//         alert("All values of array are falsy.");
// }
//     return finalVal;
// }
// testAllForFalsy(falsyValues);
//
// // Use -1:
// // indexOf() method with -1 - value that is never going to be index of something inside of arry.
// console.log(instructors.indexOf("Geoff")); //returns  -1 because not in array.
// console.log(instructors.indexOf("Jay"));

// ForEach loop: 3 different parameters (names can change, but what they represent is set). - element is not optional (touches each element inside of array), index and array are optional. Index: at the time of iteration (first loop = 0, next = 1, etc). Array: referencing back to the array itself
// arrayOfSorts.forEach(function(element, index, array){
//         ..do things here...
// })

// instructors.forEach(function(instructor, index, array) {
//     if (index % 2 !== 0){
//         console.log("Instructor #" + (index + 1) + " of " + array.length + " is named: " + instructor);
//     }
// })

// var numbers = [17, 22, 34, 52, 6];
// numbers.forEach(function (number, index){
//     if (index % 2 === 0){
//     console.log(number * 2);
//     }
// })

// forEach loops do not function like other loops. Calls function on each individual element within the array. You cannot break out of a forEach loop.

// function testEachForFalsy(array) {
//     var truthyFound;
//     array.forEach(function (element, i){
//         if(element) {  //same as (Boolean(element) === true)
//             alert("Truthy value detected at index: " + i);
//             truthyFound = i;
//         }
//     })
//     if(truthyFound){
//         return truthyFound;
//     }
//     alert("All values of array are falsy");
//     return -1;
// }
//
// console.log(testEachForFalsy(falsyValues));

//*** forEach loops: "each of these elements are going to have the same thing happen to it, unless a condition is met."

// instructors.forEach(function (inst) {
//     console.log(inst);
// })


// *** Manipulating Arrays

// Update whats inside rather than reassigning
// May be interacting with data where we wont be able to see it directly.
var cheeses = ["Muenster", "kraft", "pepper Jack", "string"];

cheeses.push("cheddar"); //adds to end of array

function logTheCheeses() {
    cheeses.forEach(function (cheese) {
        console.log(cheese)
    })
}

// logTheCheeses();

cheeses.unshift("Gouda"); //adds to the beginning
// logTheCheeses();


//can add more than one argument at a time.
cheeses.push("White cheddar", "Colby jack");
cheeses.unshift("Red windsor", "ragstone");
// logTheCheeses();


// To remove elements (only one at a time)
cheeses.shift(); // removes first element of array - takes no argument

cheeses.pop(); // removes the last element of array

// will return the value that was removed and save it to variable:
var removedCheese = cheeses.shift();
// console.log(removedCheese + " was removed from the array");
cheeses.push(removedCheese);

//find the index in array
// console.log(cheeses.indexOf("kraft"));

var myFaveNumbers = [17, 34, 22, 17, 19, 17];
// // console.log(myFaveNumbers.indexOf(17));
// // console.log(myFaveNumbers.lastIndexOf(17));
//
// // Slicing: return value from either one or two arguments.
//
// //use +1 to include "string" since zero indexed
// // does not remove from the array. By assigning return from the slice method to variable, can call on its value.
//
// var myFaveCheeses = cheeses.slice(cheeses.indexOf("kraft"), cheeses.indexOf("string")+1)
//
// var otherCheeses = cheeses.slice(3); //from index 7 and returns array to the end.
// // logTheCheeses();
// // console.log(myFaveCheeses);
// // console.log(otherCheeses);
//
//
// // copy of array by using slice with no arguments.
// function copyOfArray(array) {
//     return array.slice();
// }
//
// //rand new array, does not affect cheeses variable.
// var reversedCheeses = copyOfArray(cheeses).reverse();

// logTheCheeses();
// console.log("////");
// reversedCheeses.forEach(function (cheese) {
//     console.log(cheese);
// })

//typeof [1, 2, 3] returns "object". unlike primitive data type, if you affect one, you affect the other: both variable refer to the same object.

// var reversedCheeses = cheeses;
// reversedCheeses.reverse();

// Sort method:

// cheeses.sort();
// logTheCheeses();

//sort method returns the array that it sorted - do not need to set to a variable modifies it immediately. Therefore able to chain another method to it.
// console.log(myFaveNumbers.sort().reverse());

//best to use .sort() with same data time
//console.log([6, 19, 55, "Walter", "jesse", 22].sort());


// To split string into an array so you can iterate through it.
var csvNames = "David, Javier, Jay, Cody the duck";
var names = csvNames.split(",");
console.log(names);

// reverses elements and joins the array into string.
csvNames = names.reverse().join("**"); //can join using anything: if nothing, default joins with commas.
console.log(csvNames);

// joining two arrays together and makes a copy of the arrays. does not affect alphaTeam or goldTeam
var alphaTeam = ["David", "Jay", "javier"];
var goldTeam = ["Winston", "Riley", "Bandit"];

var staff = alphaTeam.concat(goldTeam);

// if:  var staff = alphaTeam + goldTeam; it concatenates as a string rather than array.

// console.log(alphaTeam);
// console.log(goldTeam);
// console.log(staff);


//does not affect the cheeses array, just returns a copy with element removed.
function removeAtIndex(array, index) {
    var arr1 = array.slice(0, index);
    var arr2 = array.slice(index + 1); //to include the value
    return arr1.concat(arr2);
}

console.log(cheeses);
console.log(removeAtIndex(cheeses, cheeses.indexOf("kraft")));





















