(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    var planetsJoined = planetsArray.join("<br>");
    console.log(planetsJoined);
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetsList = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";
    console.log(planetsList);

    //instructor example

//     var planetsList = "<ul>";
//     planetsArray.forEach(function(planet) {
//         planetsList += "<li>" + planet + "</li>";
//     })
//     planetsList += "</ul>";
//
//     console.log(planetsList);

    //document.getElementById("planets").innerHTML = planetsJoined;
    document.getElementById("planets").innerHTML = planetsList;

})();
