"use strict";
//
// console.log("Hello from external JavaScript");
//
// var welcome = alert("Welcome to my Website!");
// console.log(welcome);
//
// var favoriteColor = prompt("What is your favorite color?")
//
// var yourFavoriteColor = alert("Great, " + favoriteColor + " is my favorite color too!");
// console.log(yourFavoriteColor);

var littleMermaidDays = parseFloat(prompt("Days you rented Little Mermaid"));
var brotherBearDays = parseFloat(prompt("Days you rented Brother Bear"));
var herculesDays = parseFloat(prompt("Days you rented Hercules"));
var rentalRate = 3;
var totalDue = alert("Your total due is $" + (littleMermaidDays + brotherBearDays + herculesDays) * rentalRate);

console.log(totalDue);

// var googleRate = 400;
// var amazonRate = 380;
// var facebookRate = 350;
// var googleHours = parseFloat(prompt("How many hours did you work this week at Google?"));
// var amazonHours = parseFloat(prompt("How many hours did you work this week at Amazon?"));
// var facebookHours = parseFloat(prompt("How many hours did you work this week at FaceBook?"));
// var totalPay = alert("Your paycheck this week will be: $"+ ((googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours)));
// console.log(totalPay);

// var haveClassAt9 = confirm("Do you have class at 9?");
// var classFull = confirm("Is the class full?");
// var canRegister = alert(!(haveClassAt9 || classFull));
// console.log(canRegister);

// *** better way:
// var classHasRoom = confirm("Is there room in the class?");
// var noScheduleConflict = confirm("Can you take a class at 9?");
// alert("You can have class: " + (classHasRoom && noScheduleConflict));


// var offerValid = confirm("Is the offer valid?");
// var boughtAtLeastTwo = parseFloat(prompt("How many items are you buying today?"));
// var premiumMember = confirm("Are you a premium member?");
// var discountApplies = alert((premiumMember || (boughtAtLeastTwo > 2)) && offerValid);
// console.log(discountApplies);

