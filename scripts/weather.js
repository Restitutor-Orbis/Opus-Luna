var weather = null;
var visible = false;

function initWeather() {
    var place;

    if(localStorage.getItem("place") == "") {
        place = "Copenhagen";
    } else {
        place = localStorage.place;
    }

    document.getElementById("weatherInput").placeholder = place;

    weather = new Weather(place);
    weather.getWeather;   
}


function weatherToggle() {
    if(!visible) {
        document.getElementById("weatherInput").style.visibility = "visible";
        document.getElementById("weatherButton").style.visibility = "hidden";
        visible = true;
    } else {
        document.getElementById("weatherInput").style.visibility = "hidden";
        document.getElementById("weatherButton").style.visibility = "visible";
        visible = false;
    }
}


function changeLocation(event) {
    if(event.key == "Enter") {
        var city = document.getElementById("weatherInput").value;

        //update the location of the weather
        //make sure the city is valid before editing local storage
        try {
            var weather = new Weather(city);
            weather.getWeather;
        }
        catch(error) {
            console.log(error);
            document.getElementById("weatherInput").value = "";
        }
    }
}


/* Weather class made by user...
*
*
*/
var tempCity;

class Weather {
    constructor(location) {
      this.location = location;
      tempCity = location;
    }
  
    get getWeather() {
      return this.fetchWeather(this.handleWeather);
    }
  
    handleWeather(res) {
      let temperature = Math.round(res.main.temp),
          weather     = res.weather[0].main,
          icon        = 'wb_sunny',
          color       = 'sunny';

          localStorage.place = tempCity;
          var city = localStorage.place;

          document.getElementById("weatherInput").placeholder = city;
          document.getElementById("weatherInput").value = "";
          document.getElementById("weatherButton").innerHTML = `${temperature}ºC`;
    }
  
    fetchWeather(callback) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=metric&appid=50a34e070dd5c09a99554b57ab7ea7e2`)
        .then(res  => res.json())
        .then(json => JSON.stringify(json))
        .then(json => JSON.parse(json))
        .then(data => callback(data))
        .catch(err => {
            console.log(err);
            document.getElementById("weatherInput").value = "";
            console.warn('Weather API returned an error.');
        });
    }
  }