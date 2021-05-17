'use strict'

fetch('https://api.github.com/users/Davidpculver/events/public', {headers: {'Authorization': GITHUB_TOKEN}})
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })