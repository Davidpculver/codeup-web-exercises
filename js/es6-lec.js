'use strict'

//var vs let vs const
//var declared with var are function scoped: if variable declared anywhere else besides a func using var it will always exist in global scope

// for(var i = 0; i< 5; i++){
//     console.log(i)
// }
//able to reassign i outside since it is not in a function.
// i = 'hello';
// console.log(i); //logs 0 1 2 3 4 hello
//
// if (i === 'hello'){
//     var bubbles = 'bubblesssss';
// }
//
// bubbles = 'pop!'
// console.log(bubbles); //only log's pop since redefined
//
// function test (){
//     var logMe = 'Hello';
//     bubbles = 'floating';
//     return logMe;
// }
//
// console.log(test());
//below wont work since var is defined within the function - cannot be accessed
// console.log(logMe);


//const: is block-scoped. Variable declared with const cannot be redeclared or reassigned.

// const num = 4;
// console.log(num);
//cannot reassign the const variable num
// num = 6;

//cant redeclare const variable
// const name = 'David';
// const name = 'Bob';

// able to redeclare using var
// var name = 'David';
// var name = 'Bob';

//Block-scope:
// var number = 5;
//
// if(number === 5){
//     const cardNumber = 1234;
// }
//not able to call const variable outside function, below will not work
// console.log(cardNumber);

//if const is declared outside function - its global and can be called anywhere

// Let: define variables that are block-scoped. As with variables declared with const, the variables with let cannot be redeclared.

//can redeclare name variable
// let name = 'jay'
// let name = 'javier'
//
// //reassignment
// let name = 'jay';
// name = 'javier';


// function foo(n) {
//     if (n === 6){
//         let num = 2;
//     }
//     console.log(num) //wont log anything because let variable is inside the {} - block scoped
// }
// foo(6);

//this works with var
// for (var i = 0; i < 3; i++){
//     console.log(i)
// }
//
// console.log('i outside of the loop', i)

// let i;
// for (i = 0; i < 3; i++){
//     console.log(i); //this logs
// }
//
// console.log('i outside of the loop', i) //this does not work since let i is not global scoped

//***Template strings***//

// Allows for interpolation in strings. Variables and expressions can be read in template strings. use back-ticks to recognize variables and expressions.

let name = 'David';
console.log(`My name is ${name}`);

console.log(`My name is ${name.toUpperCase() + ' Culver'} in all caps.`)

let parks = ['yosemite', 'rocky mountain', 'grand canyon'];

let parkslist = `<ul>
<li>${parks[0]}</li>
<li>${parks[1]}</li>
<li>${parks[2]}</li>
</ul>`

document.write(parkslist)

//****** for... of loop *******//

// Works with node lists

//loops log each park
//regular for loop
// for (let i = 0; i < parks.length; i++){
//     console.log(parks[i]);
// }
//
// //for each loop; has access to index (optional)
// parks.forEach(function (park, index) {
//     console.log(index)
//     console.log(park)
// })
//
// //for... of loop structure
// // for(variable(what we are calling each item in array) of iterable/collection(array we are iterating thru)){
// //     statement
// // }
//
// //does not have access to index
// for(let park of parks){
//     console.log(park)
// }

// let listItems = document.getElementsByTagName('li');
// console.log(listItems);
//
//can use const or let
// for(const listItem of listItems){
//     console.log(listItem.innerHtml += ' is a great park.')
// }

// *** Arrow functions

//function declaration
// function test() {
//     return 'Hello from test function';
// }
//
// console.log(test());
//
// //function expression
// var test2 = function () {
//     return 'Hello from test2 function'
// }
//
// console.log(test2())
//
// //can use const because functions dont normally change
// //if had parameters place inside of ()
// const test3 = () => 'Hello from test3 function';
//
// console.log(test3())
//
// //single param does not need paren
// const sayHello = name => {
//     var nameInCaps = name.toUpperCase();
//     return nameInCaps;
// }

// multiple parameters inside of paren
// const sayHello = (firstName, lastName) => {
//     let fullName =  `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
//     return fullName;
// }
//
// console.log(sayHello('michael', 'jordan'))


// parks.forEach(function(park) {
//     blah blah
// })
//
// parks.forEach(park => {
//     let parkUpper = park.toUpperCase();
//     console.log(parkUpper)
// })


// Default Function parameter values

//old way
// function add(num1, num2) {
//     if(num1 === undefined){
//         num1 = 2;
//     }
//     if(num2 === undefined){
//         num2 = 2;
//     }
//     return num1 + num2;
// }
//
// console.log(add());
// console.log(add(5));
// console.log(add(5,5))


// New way
// const add = (num1 =2, num2=4) => {
//     return num1 + num2;
// }
//
// console.log(add());
// console.log(add(5));
// console.log(add(5,5))

//** Object property variable assignment
//old way
// var trailName = 'Loopy Trail';
// var distance = 4.5;
// var difficulty = 'moderate';
// var isPaved = true
//
// var trail = {
//     trailName: trailName,
//     distance: distance,
//     difficulty: difficulty,
//     isPaved: isPaved
// }
// console.log(trail)

//new way
let trailName = 'Loopy Trail';
let distance = 4.5;
let difficulty = 'moderate';
let isPaved = true
//
// //both the name and value of each properties
let trail = {
    trailName,
    distance,
    difficulty,
    isPaved
}

console.log(trail)


//** object destructuring
// old way
// let nameOfTrail = trail.name;
// let distanceOfLoopTrail = trail.distance;

//New way
// let myObject = {
//     movieName: 'the incredibles',
//     length: '1hr 43min',
//     genre: 'kids'
// }
//
// let {movieName, genre} = myObject;
// console.log(movieName, genre);
//
let movies = [
    {
    title: 'Fast and the Furious',
    description: 'Fast cars and Vin diesel'
    },
    {
        title: 'The bee movie',
        description: 'Movie about bees'
    },
    {
        title: 'Zootopia',
        description: 'Rodents vs predators'
    }
]

// function getMovieInfo(listOfMovies) {
//     for(let movie of listOfMovies) {
//         let {title, description} = movie;
//         console.log(`The movie you selected is ${title}. Description: ${description}`)
//     }
// }
//
// getMovieInfo(movies);




//old way obj destructuring

// function describeTrail(trailObject) {
//     var name = trailObject.name;
//     var distance = trailObject.distance;
//     return name + ' is ' + distance + 'mi long'
// }
//
// console.log(describeTrail(trail))


// let describeTrail = trailObj => {
//     let {trailName, distance} = trailObj;
//     return trailName + ' is ' + distance + 'mi long';
// }
//
// console.log(describeTrail(trail))


//Array destructuring
//Old way
var faf = movies[0];
var beeMovie = movies[1]
// console.log(faf, beeMovie);

//New way
// (assigning variables to objects in array)
//cannot access second or third object, without listing all that come before. ex; cant let[z] - will return first object
let [x, y, z] = movies;
console.log(y)



let [firstMovie, ...restOfMovies] = movies;
console.log(firstMovie);
console.log(restOfMovies)




// function sayHello(name) {
//     return 'Hello, ' + name + '!';
// }

const sayHello = (name) => `Hello, ${name}!`









