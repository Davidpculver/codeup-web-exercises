"use script"
//
// // placed between {} and commas between key/value pairs.
// // var theTruck = {
// //     make: "Toyota",
// //     model: 'Tacoma',
// //     truck: true,
// //     seats: 5,
// //     color: "Blue",
// //     mileage: 10,
// //     bedcover: false,
// //     drive: function () {
// //         console.log("vroom vroom!");
// //     }
// // }
//
// //name of object.property: theTruck.make = "Toyota"
// // change properties. can do the same thing with object property that you can with variables.
//
// // theTruck.mileage = 15;
// // theTruck.bedcover = true;
// //
// // //delete
// // delete theTruck.bedcover;
// //
// // // able to have function inside of object. function inside object is called a method.
// // console.log(theTruck.drive());
//
// //objects within objects
// var theTruck = {
//     make: "Toyota",
//     model: 'Tacoma',
//     truck: true,
//     seats: 5,
//     color: "Blue",
//     mileage: 10,
//     bedcover: false,
//     started: false,
//     start: function () {
//         this.started = true;
//     },
//     stop: function () {
//         this.started = false;
//     },
//     packages: {
//         technology: false,
//         navigation: false,
//         offRoad: true
//     },
//     drive: function () {
//         if(this.started){
//             console.log("vroom vroom!");
//             //does not work: mileage is not defined within the drive function
//             //mileage++;
//             //need to define as:
//             this.mileage++ //looks inside this objects properties, not a different object
//         } else {
//             console.log("You didn't start the truck!");
//         }
//     }
// }
//
// //call: theTruck.packages.offRoad
//
// // mileage works here bc passing parameter (car); pass it theTruck, inside the function evaluates car to theTruck.mileage so its able to reach mileage property.
// // function isNew(car) {
// //     return car.mileage <=15;
// // }
// //
// // console.log(isNew(theTruck));
//
// for(var property in theTruck){
//     console.log(property + ": " + theTruck[property]);
// }

// Math objects;
// Math.random();
//
// Math.floor(Math.random() * 6);
//
// // random number 1-6
// Math.floor(Math.random() * 6) + 1;

// random between 1-20
// Math.ceil(Math.random() * 20);





















