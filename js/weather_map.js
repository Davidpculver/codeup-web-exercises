(function () {
    'use strict'

    //Sets opening to San Antonio, TX
    var coordinates = [29.4241, -98.4936];

    //Returns the current conditions and weather forecast for location
    function weatherForecast() {
        $('#forecast').html('');
        $('#current').html('');
        $('#currentCity').html('')
        $.get("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + coordinates[0] + "&lon=" + coordinates[1] + "&exclude=hourly,minutely&appid=" + WEATHER_MAP_TOKEN)
            .done(function (resp) {
                console.log(resp);

                //Gets the location by coordinates and displays the city name
                reverseGeocode(marker.getLngLat(), MAPBOX_ACCESS_TOKEN).then(function (res) {
                    $('#currentCity').append('<h4>' + res.features[2].place_name + '</h4>');
                })

                //outputs the current weather condition
                var currentConditions = '<ul class="currentWeather"><h5>Current Conditions</h5>'
                // Capitalize current weather description
                var weatherConditions = resp.current.weather[0].description;
                var currentWeather = weatherConditions.split(" ");
                //capitalizes the city name
                for (let i = 0; i < currentWeather.length; i++) {
                    currentWeather[i] = currentWeather[i][0].toUpperCase() + currentWeather[i].substr(1);
                }
                currentConditions += '<li>' + currentWeather.join(" ") + '</li>'
                currentConditions += '<li>Temperature: ' + resp.current.temp.toFixed(0) + ' &degF</li>';
                currentConditions += '<li>Feels like: ' + resp.current.feels_like.toFixed(0) + ' &degF</li>';
                currentConditions += '<li>Humidity: ' + resp.current.humidity + '&percnt;</li>';
                currentConditions += '</ul>';
                $('#current').append(currentConditions);

                //if there is a weather alert it will display bold and red background
                if (resp.alerts) {
                    var weatherAlert = resp.alerts[0].description + '<button id="close">Close</button>';
                    $('#alert').append(weatherAlert);

                    //Close weather alert when close button is clicked
                    $('#close').click(function () {
                        $('#alert').addClass('warning')
                    });
                }

                //loop for the daily forecast
                for (var i = 0; i < 5; i++) {
                    var dailyForecast = resp.daily[i];
                    var weatherPic;

                    //sets which weather icons to use based on the weather conditions
                    if (dailyForecast.clouds <= 20) {
                        weatherPic = '<img src="img/sunny.png"class="card-img-top" alt="Mostly sunny">';
                    } else if (dailyForecast.clouds > 20 && dailyForecast.clouds <= 60) {
                        if (dailyForecast.rain >= .2 && dailyForecast.rain < .8) {
                            weatherPic = '<img src="img/rainchance.png"class="card-img-top" alt="Chance of showers">';
                        } else if (dailyForecast.rain >= .8) {
                            weatherPic = '<img src="img/rain.png"class="card-img-top" alt="Rain">';
                        } else {
                            weatherPic = '<img src="img/partlycloudy.png"class="card-img-top" alt="Partly Cloudy">';
                        }
                    } else if (dailyForecast.clouds >= 60) {
                        if (dailyForecast.rain >= .1 && dailyForecast.rain < .8) {
                            weatherPic = '<img src="img/rainchance.png"class="card-img-top" alt="Chance of showers">';
                        } else if (dailyForecast.rain >= .8) {
                            weatherPic = '<img src="img/rain.png"class="card-img-top" alt="Rain">';
                        } else {
                            weatherPic = '<img src="img/mostlycloudy.png"class="card-img-top" alt="Mostly Cloudy">';
                        }
                    }

                    //Changes the date string to readable
                    var date = new Date(dailyForecast.dt * 1000);
                    var humanDay = date.toLocaleString('en-us', {weekday: 'short'});
                    var humanMonth = date.toLocaleString('en-us', {month: 'long'});
                    var humanDate = date.toLocaleString('en-us', {day: 'numeric'});
                    var sunrise = new Date(dailyForecast.sunrise * 1000);
                    var humanSunRise = sunrise.toLocaleTimeString('en-US');
                    var sunset = new Date(dailyForecast.sunset * 1000);
                    var humanSunSet = sunset.toLocaleTimeString('en-US');

                    //Creates each individual days card
                    var newForecast = '<div class="image-flip" ontouchstart="this.classList.toggle(\'hover\');">';
                    newForecast += '<div class="mainflip">';
                    newForecast += '<div class="frontside">';
                    newForecast += '<div class="card">';
                    newForecast += weatherPic;
                    newForecast += '<div class="card-header"><h5>' + humanDay + ' ' + humanMonth + ' ' + humanDate + '</h5></div>';
                    newForecast += '<ul class="list-group list-group-flush">';
                    newForecast += '<li class="list-group-item">High / Low </br>';
                    newForecast += dailyForecast.temp.max.toFixed(1) + '&degF / ';
                    newForecast += +dailyForecast.temp.min.toFixed(1) + ' &degF</li>';
                    newForecast += '<li class="list-group-item">Humidity: ' + dailyForecast.humidity + '&percnt;</li>';
                    newForecast += '<li class="list-group-item">Chance of precipitation: ' + (dailyForecast.pop * 100).toFixed(0) + '&percnt;</li>';
                    newForecast += '</ul>';
                    newForecast += '</div>';
                    newForecast += '</div>';
                    newForecast += '<div class="backside">';
                    newForecast += '<div class="card">';
                    newForecast += '<ul class="list-group list-group-flush">';
                    newForecast += weatherPic;
                    newForecast += '<li class="list-group-item">Dew Point: ';
                    newForecast +=  dailyForecast.dew_point.toFixed(1) + ' &degF</li>';
                    newForecast += '<li class="list-group-item">Winds: ' + dailyForecast.wind_speed + ' mph</li>';
                    newForecast += '<li class="list-group-item">Conditions: ' + dailyForecast.weather[0].description + '</li>';
                    newForecast += '<li class="list-group-item">Sunrise: ' + humanSunRise + '</li>';
                    newForecast += '<li class="list-group-item">Sunset: ' + humanSunSet + '</li>';
                    newForecast += '</ul>';
                    newForecast += '</div>';
                    newForecast += '</div>';
                    newForecast += '</div>';
                    newForecast += '</div>';

                    $('#forecast').append(newForecast);
                }
            });
    }

    weatherForecast();

    //Mapbox functionality below
    map.addControl(new mapboxgl.NavigationControl())

    //Setting marker to San Antonio
    var marker = new mapboxgl.Marker({
        color: 'red',
        draggable: true
    })
        .setLngLat([-98.4861, 29.4260])
        .addTo(map)

    //Updates weather based on marker drag/drop
    marker.on('dragend', function () {
        coordinates = marker.getLngLat();
        coordinates = coordinates.toArray().reverse();
        weatherForecast();
    });

    //Updates weather based on user input and flies to that location
    $("#btn2").click(function () {
        $('#currentCity').html('');
        var userInput = $("#input").val();
        geocode(userInput, MAPBOX_ACCESS_TOKEN).then(function (info) {
            console.log(info);
            var newCenter = {
                lng: info[0],
                lat: info[1]
            };
            marker.setLngLat(newCenter);
            map.flyTo({center: newCenter, zoom: 10});

            //Reverses coordinates to fit weather api
            coordinates = [info[1], info[0]];
            weatherForecast();
        });
    });

    //Utilizes enter key to submit enter city form
    $('#input').keyup(function (event) {
        if (event.keyCode === 13) {
            $('#btn2').click();
        }
    })

})();