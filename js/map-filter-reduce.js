'use strict'

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// let userEmails = users.map(function(user) {
//     user = user.email;
//     return user;
// })

let userEmails = users.map(user => user.email)


// let threeLangs = users.filter(function (user) {
//     if(user.languages.length >= 3){
//         return user;
//     }
// })

const threeLangs = users.filter((user) => {
    if(user.languages.length >= 3){
        return user;
    }
})

//instructor example
let trilinguals = users.filter(function (user) {
    return user.languages.length >= 3;
})



const totalYears = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0)

console.log(totalYears)

const averageYears = totalYears / users.length;
console.log(averageYears);

const longestEmail = users.reduce((longest, current) =>{
    if(current.email.length > longest.email.length){
        return current;
    } else {
        return longest;
    }
})
console.log(longestEmail)


const usersNames = users.reduce((collection, current) => {
    let allNames = `${collection} ${current.name}`;
    return allNames;
}, 'Your instructors are: ')

// function userNames() {
//     // const allNames = '';
//     const userNames = users.reduce((collection, current) => {
//         const allNames = collection.name + current.name;
//         return allNames;
//     })
// }


console.log(usersNames)






