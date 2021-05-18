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
const getBooks = () => {
    fetch('https://awake-faint-phalange.glitch.me/books')
    .then(response => response.json())
    .then(books => {
        console.log(books)
        let htmlStr = '';
        for(let book of books){
            htmlStr = `${htmlStr}<h1>${book.title}</h1><p>by: ${book.author.firstName} ${book.author.lastName}</p>`
        }
        $('#container').html(htmlStr)
    });
}
//

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

$('#addPercy').click(() => {
    fetch('https://awake-faint-phalange.glitch.me/books', postOptions)
        .then(getBooks);
})

//modify existing record
// PUT - update entire resource / object at once. "overwrite". if no defn of property that previously existed removed with put and replaced with object being put
let putThis = {
    "title": "Percy Jackson & The Sea of Monsters",
    "author": {
        "firstName": "Rick",
        "lastName": "Riordan"
    }
}

let putOptions = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    //sending the info as json string
    body: JSON.stringify(putThis),
};


fetch("https://awake-faint-phalange.glitch.me/books/6", putOptions).then(getBooks);

// PATCH
//only updates the property; changes title, keeps author the same. Can change all properties as well, but doesnt have to like PUT does.
let patchThis = {
    "title": "Percy Jackson & The Titan"
}

let patchOptions = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    //sending the info as json string
    body: JSON.stringify(patchThis),
};

//patching to id of 7
fetch("https://awake-faint-phalange.glitch.me/books/7", patchOptions).then(getBooks);



getBooks();
















