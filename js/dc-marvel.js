var like = document.getElementById('like');
var dontLike = document.getElementById('dontlike');
// var preference = "dc";
var dc = document.getElementById('dc');
dc.innerHTML = dc.innerHTML + " Animated Universe";
// var output = dontLike.innerHTML + ' ' + document.getElementById(preference).innerHTML
// alert(output);
var output = like.innerHTML + ' ' + dc.innerHTML
// alert(output);

var marvel = document.getElementById('marvel');
//below sets marvel to class hotpink (to see open console in browser)
marvel.setAttribute('class', 'hotpink');

dc.setAttribute('class', 'hotpink');
//grab every element with class name of hotpink. hotpinks is an array(or object) called nodelist that represents elements.
var hotPinks = document.getElementsByClassName('hotpink');

// hotPinks[0].style.color = '#5aad5a';
// hotPinks[1].style.color = 'green';

for (var i = 0; i < hotPinks.length; i++){
    hotPinks[i].style.color = 'blue';
    hotPinks[i].style.fontFamily = 'sans-serif';
}

// CSSOM - css object model - for outside class study

// grabbing content of form imput using js
var submitButton = document.getElementById('colorSubmission');
//when submitButton is clicked, the function runs
submitButton.onclick = function () {
    var colorInput = document.getElementById('colorPreference');
    var paragraphs = document.getElementsByTagName('p');
    colorPreference = colorInput.value;
    //alert(colorPreference);
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = colorInput.value;
    }
    colorInput.value = ''; //without this, the user input stays on page inside the form. sets the value to empty string.
}

















