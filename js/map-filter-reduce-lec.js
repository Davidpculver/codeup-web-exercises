// array iteration methods
// foreach()

// let output = ''
// let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

//defines variable called item; and optional index variable
// prices.forEach(function (item, index) {
//     output = output + '<p>' + item + ' is at index ' + (index) + '</p>'
//     $('#output').html(output);
// })

// prices.forEach(function (item, index){
//     let tax = (item * 0.0825).toFixed(2);
//     let total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
//     output = output + '<p>Item number ' + (index + 1) + '. Price: $' + item + '. Tax: $' + tax + '. Total of: $' + total + '.' ;
//     $('#output').html(output);
// })


// .map() creates new array where every value in old array is "mapped" onto value in new array

let output = ''
let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

let pricesAfterTax = [];

//dont have to push to pricesAfterTax because map creates new array automatically
// pricesAfterTax = prices.map(function (price) {
//     let tax = (price * 0.0825).toFixed(2);
//     let total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
//     return parseFloat(total);
// })
//
// console.log(pricesAfterTax)
//
// pricesAfterTax.forEach(function (item) {
//     output += `<p> ${item} </p>`;
//     $('#output').html(output);
// })

let things = ['book', 'pencil', 'marker', 'eraser']
// let pluralThings = things.map(function (thing, index) {
//     thing = thing + 's';
//     if(index === 0){
//         output = `<p>You must bring the following items: </p>`;
//         output += `<p> ${thing} </p>`;
//     } else{
//         output += `<p> ${thing} </p>`;
//         $('#output').html(output)
//     }
//     // return thing;
// })
//

//es6 way
// let pluralThings = things.map((thing, index) => {
//     // thing = thing + 's';
//     if(index === 0){
//         output = `<p>You must bring the following items: </p>`;
//     }
//         //add the 's' after the template string
//         output += `<p> ${thing}s </p>`;
//         $('#output').html(output)
// })

const cars = [
    {
        make: 'honda',
        model: 'accord',
        mileage: 145000
    },
    {
        make: 'toyota',
        model: 'camry',
        mileage: 80000
    },
    {
        make: 'chevy',
        model: 'corvette',
        mileage: 10000
    },
]

//See notes below
// const mileages = cars.map(function (car) {
//     return car.mileage;
// })
//es6

//no need for the function {}'s when only one thing being done
const mileages = cars.map((car) => car.mileage)

//separate output - for future, right now seems redundant, but better to separate array from output
mileages.forEach(function (mileage) {
    output = output + `<p> ${mileage} </p>`;
    $('#output').html(output)
})







