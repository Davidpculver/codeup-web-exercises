//have the ability to pass in options that specify what we want from requests. Not the norm for get since its the default.
// let getOptions = {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// }
//
// fetch('https://awake-faint-phalange.glitch.me/books', getOptions)
//     .then(response => response.json())
//     .then(data => console.log(data));

//is the same as below:

// fetch('https://awake-faint-phalange.glitch.me/books')
//     .then(response => response.json())
//     .then(books => {
//         let htmlStr = '';
//         for(let book of books){
//             htmlStr = `${htmlStr}<h1>${book.title}</h1><p>by: ${book.author.firstName} ${book.author.lastName}</p>`
//         }
//         $('#container').html(htmlStr)
//     });

//Get back specific reference to book: added /1 inside the url - attaches to the id of the book.
//id property most important to have inside an object
// fetch('https://awake-faint-phalange.glitch.me/books/1')
//     .then(response => response.json())
//     .then(book => console.log(book))



//create record to be added: POST
//any changes that are made to the db.json file does not update immediately.
let newBook = {
    "title": "Percy Jackson & The Lightning Thief",
    "author": {
        "firstName": "Rick",
        "lastName": "Riordan"
    }
};

let postOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    //sending the info as json string
    body: JSON.stringify(newBook),
};

fetch('https://awake-faint-phalange.glitch.me/books', postOptions)
    .then(response => response.json())
    .then(book => console.log(book))













