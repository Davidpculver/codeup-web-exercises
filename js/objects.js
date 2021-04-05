(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "David",
        lastName: "Culver"
    }

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return "Hello from " + this.firstName + " " + this.lastName + "!"
    }

    //instructors example:
    // var person = {
    //     firstName: "David",
    //     lastName: "culver",
    //     sayHello: function () {
    //         console.log("Hello from " + this.firstName + " " + this.lastName + "!")
    //     }
    // }

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

   shoppers.forEach(function (purchase) {
        if (purchase.amount > 200){
         console.log(purchase.name + ", the amount before your discount was: $" + purchase.amount.toFixed(2) + ". After the discount your final total is: $" +(purchase.amount.toFixed(2) - (purchase.amount.toFixed(2) * .12)));
        } else {
            console.log(purchase.name + ", you get no discount. Your purchase price is: $" + purchase.amount.toFixed(2));
        }
    });

    //instructors example:
    // shoppers.forEach(function (shopper) {
    //     var shopperName = shopper.name;
    //     var amountSpent = "$" + shopper.amount.toFixed(2);
    //     var discount = 0
    //     if (shopper.amount > 200){
    //         discount = shopper.amount * .12;
    //     }
    //     var amountAfter = shopper.amount - discount;
    //     amountAfter = "$" + amountAfter.toFixed(2);
    //     discount = "$" + discount.toFixed(2);
    //     var message = shopperName + " spent " + amountSpent + ". Their discount is " + discount + ". The amount after discount is $" + amountAfter + ".";
    //     console.log(message);
    // });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

var books = [
        {
        title: "To Kill a Mockingbird",
        author: {
            firstName: "Harper",
            lastName: "Lee"
            }
        },
        {
            title: "The Great Gatsby",
            author: {
                firstName: "F Scott",
                lastName: "Fitzgerald"
            }
        },
        {
            title: "Things Fall Apart",
            author: {
                firstName: "Chinua",
                lastName: "Achebe"
            }
        },
        {
            title: "Moby Dick",
            author: {
                firstName: "Herman",
                lastName: "Melville"
            }
        },
        {
            title: "Hamlet",
            author: {
                firstName: "William",
                lastName: "Shakespeare"
            }
        }
    ]


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function (book) {
        console.log("Book # " + (books.indexOf(book) + 1) + "\nTitle: " + book.title + "\nAuthor: " + book.author.firstName + " " + book.author.lastName);
    })

    // books.forEach(function (book, index) {
    //     var bookNumber = index + 1;
    //     console.log("Book # "+ bookNumber);
    //     console.log("Title: " + book.title);
    //     console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    // });

    // for(var i = 0; i < books.length; i++){
    //     var bookNumber = i + 1;
    //     console.log("Book # "+ bookNumber);
    //     console.log("Title: " + books[i].title);
    //     console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
    // }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, authorFirst, authorLast) {
        books.push({
            title: title,
            author: {
                firstName: authorFirst,
                lastName: authorLast
            }
        });
    }

    createBook("A Brief History of Time", "Stephen", "Hawking");

    function showBookInfo(){
        books.forEach(function(book) {
            console.log("Book # " + (books.indexOf(book) + 1) + "\nTitle: " + book.title + "\nAuthor: " + book.author.firstName + " " + book.author.lastName);
        })
    }
    //
    createBook("The Bible", "Jehovah", "God");
    showBookInfo();


    //instructor example
    // function createBook(title, author) {
    //     var nameArray = author.split(" ");
        // var firstName = nameArray[0];
        // var lastName = nameArray[1];
        // return {
        //     title: title,
        //     author: {
        //         firstName: firstName,
    //             lastName: lastName
    //         }
    //     }
    // }
    //
    // books.push(createBook("My book", "David Culver"));
    //
    //
    // function showBookInfo(book, bookNumber) {
    //         console.log("Book # " + (bookNumber + 1));
    //         console.log("Title: " + book.title);
    //         console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    //     }
    //
    // books.forEach(showBookInfo);


    // function showBookInfo(book) {
    //     console.log("Book # " + (books.indexOf(book) + 1) + "\nTitle: " + book.title + "\nAuthor: " + book.author.firstName + " " + book.author.lastName);
    // }




})();
