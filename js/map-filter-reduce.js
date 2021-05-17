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

// let userEmails = users.map(user => user.email)


// let threeLangs = users.filter(function (user) {
//     if(user.languages.length >= 3){
//         return user;
//     }
// })

// const threeLangs = users.filter((user) => {
//     if(user.languages.length >= 3){
//         return user;
//     }
// })
//
// //instructor example
// let trilinguals = users.filter(function (user) {
//     return user.languages.length >= 3;
// })


//mine
const totalYears = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0)

//instructor example
let totalYearsOfExperience = users.reduce(function (total, user) {
    let yearsOfExperience = user.yearsOfExperience;
    return total + yearsOfExperience
}, 0)

console.log(totalYears)


const averageYears = totalYears / users.length;
console.log(averageYears);

//mine
const longestEmail = users.reduce((longest, current) =>{
    if(current.email.length > longest.email.length){
        return current;
    } else {
        return longest;
    }
}).email;

// console.log(longestEmail)

//instructor example
// returns array of emails:
// let emails = users.reduce(function (accumulator, user) {
//     accumulator.push(user.email);
//     return accumulator;
// }, [])
// console.log(emails)

let emails = users.reduce(function (accumulator, user, index, usersArray) {
    if(index === usersArray.length - 1){
        accumulator.push(user.email);
        accumulator.sort(function (email, email2) {
            return email2.length - email.length;
        })
        return accumulator[0];
    }else {
        accumulator.push(user.email);
        return accumulator;
    }
}, [])
console.log(emails)






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


// console.log(usersNames)


//instructor example
let names = users.reduce(function (accumulator, user) {
    //gives output of array of names.
    accumulator.push(user.name);
    return accumulator;
}, [])

let namesNicelyJoined = users.reduce(function (accumulator, user,index, usersArray) {
    if(index === usersArray.length - 1){
        accumulator.push(user.name);
        let niceJoin = accumulator.join(', ');
        niceJoin += 'Your instructors are: ' + niceJoin + '.';
        return niceJoin;
    } else {
        accumulator.push(user.name);
        return accumulator;
    }
}, []);

console.log(namesNicelyJoined)





