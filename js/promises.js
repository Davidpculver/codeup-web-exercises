'use strict'


//mine
// $('#search').click( () => {
//     let userName = $('input').val();
//     fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': GITHUB_TOKEN}})
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             console.log(data)
//             $('#lastCommit').append(`<h3> ${userName}'s last commit was on: ${data[0].created_at}</h3>`);
//         })
// })

//Instructor example
const userLastCommit = userName => {
    //using .ajax, and fetch defaults to a get request
    fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': GITHUB_TOKEN}})
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let lastPush;
            //loop through each object to search for push event
            for(let event of data){
                if(event.type === 'PushEvent'){
                    lastPush = new Date(event.created_at);
                    break;
                }
            }
            console.log(lastPush);
        });
}
 userLastCommit('davidpculver')


//
//
// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

//Did not finish
// function wait(num) {
//     return new Promise((fulfill, reject) => {
//         setTimeout(() => {
//             if(num > 5){
//                 fulfill();
//             } else {
//                 reject();
//             }
//         }, 3000)
//     })
// }

//instructor example
//basic
// const wait = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve();
//         }, ms);
//     })
// }
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

//bonus
const wait = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`You'll see this after ${ms/1000} seconds.`);
        }, ms);
    })
}

wait(1000).then(message => console.log(message));
wait(3000).then(message => console.log(message));


