/*
function buttonClicked1() {
  //var country = document.getElementById("countryInput").value;//get the searched country

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=china&appid=9fd7a449d055dba26a982a3220f32aa2`)
    //https://www.boredapi.com/api/activity?type=${type}
    //https://api.imgflip.com/get_memes
    //http://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?fmt=json
    //https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=9fd7a449d055dba26a982a3220f32aa2
    //https://v2.jokeapi.dev/joke/Any?safe-mode
    .then((response) => response.json())

    .then((data) => {
      //var cel
      document.getElementById("weather").console = console.log(data.weather)
      console.log(data)

      //document.getElementById();
      //var urlg = data.data.memes[5].url;
      //console.log(urlg)

      //document.getElementById("image").scr = urlg
      //document.getElementById("display").innerHTML = urlg
            

      //looping
      //for(var i = 0; i < 10 ; i++)
      //document.getElementById("image").scr = data.memes[0].name;
      //document.getElementById("display").innerHTML = data.memes[0].url;

      document.getElementById("display").innerHTML = {}

      //kelvin
      console.log("city temp in kelvin: ", data.main.temp)

      //celsius
      cel = data.main.temp - 273.15
      console.log("city temp in celsius: ", cel.toFixed(1))

      //Humidity level
      console.log("city humid level: ", data.main.humidity)

      //Time, Date, Timezone
      timestamp = data.dt;
      date = new Date(timestamp * 1000);
      const timezone_offset = data.timezone;
      const timezone_hours = timezone_offset / 3600;
      const timezone_zon = `UTC${timezone_hours >= 0 ? '+' : '-'}${Math.abs(timezone_hours)}`;
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formatted_date = date.toLocaleDateString(undefined, options);
      console.log(`Current Date: ${formatted_date}`);
      var timestamp = data.dt;
      var date = new Date(timestamp * 1000);
      const time = date.toLocaleTimeString();
      console.log(`Current Time: ${time}`);
      console.log(`Time zone: (${timezone_zon})`);

      //wind spped
      console.log("city wheather: ", data.wind.speed)
          
      //
      //
      //console.log("city wind speed", data.wind.speed)
      //document.getElementById("display").innerHTML = "Tesmp in celsius :" + cel.toFixed(1) + "<br>" + " Wind speed: " + data.wind.speed + "km/h";
      //output the API into console.
    });
}
*/

//open Wheter map
// When the window is loaded, call the displayWeather function
window.onload = function() {
  displayWeather();
}
// Function to display the weather for a given city and divId
function displayWeather(city, divId) {
  // Fetch weather data from OpenWeatherMap API using the city name and API key
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
  // Parse the response JSON data
    .then((response) => response.json())
    .then((data) => {
      // Get the weather information div element by ID
      const weatherInfoDiv = document.getElementById(divId);
      // Convert temperature from Kelvin to Celsius and format it to one decimal place
      const cel = (data.main.temp - 273.15).toFixed(1);
      // Calculate the timezone offset in seconds and convert it to hours
      const timezone_offset = data.timezone;
      const timezone_hours = timezone_offset / 3600;
      // Format the timezone string to show UTC offset
      const timezone_zon = `UTC${timezone_hours >= 0 ? '+' : '-'}${Math.abs(timezone_hours)}`;
      // Format the date and time strings using options object
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formatted_date = new Date(data.dt * 1000).toLocaleDateString(undefined, options);
      const time = new Date(data.dt * 1000).toLocaleTimeString();
      // Get wind speed, humidity, weather description, and city name from weather data object
      const windSpeed = data.wind.speed;
      const humidity = data.main.humidity;
      const weatherDescription = data.weather[0].description;
      const cityName = data.name;
      // Create HTML content with weather information
      const weatherHtml = `
      <h3 style="color: white;">Current weather in ${data.name}, ${data.sys.country}</h3>
      <p style="color: white;">Temperature in Celsius: <span style="color: red;">${cel}</span></p>
      <p style="color: white;">Humidity: ${humidity}%</p>
      <p style="color: white;">Wind speed: ${windSpeed} m/s</p>
      <p style="color: white;">Weather description: ${weatherDescription}</p>
      <p style="color: white;">Current Date: ${formatted_date}</p>
      <p style="color: white;">Current Time: ${time} (${timezone_zon})</p>
      `;
      // Set the HTML content of weather information div to the created HTML
      weatherInfoDiv.innerHTML = weatherHtml;
    })
    // Handle errors in fetching and parsing weather data
    .catch((error) => {
      console.error(error);
      // Get the weather information div element by ID and set its content to an error message
      const weatherInfoDiv = document.getElementById(divId);
      weatherInfoDiv.innerHTML = "Error getting weather information.";
    });
}
// Call the displayWeather function with different cities and div IDs to display weather information in different locations
displayWeather("Beijing,china,CN", "#display1");
displayWeather("Zhangjiakou,china,CN", "#display2");
displayWeather("Shanghai,china,CN", "#display3");


//open Wheter map
function handleButtonClick(id) {
  buttonClicked(id);
}

// Function that is called when the user types something in the "Type" input field
function typing(type) {
  // Get the value of the "Type" input field
  var type = document.getElementById("Type").value;
  // Call the buttonClicked function with the value of the input field as argument
  buttonClicked(type);
}

// Function that is called when the user clicks the "Search" button or hits enter
function buttonClicked(type) {
  // Make a fetch request to the OpenWeatherMap API with the user's input as the city to search for
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${type},china,CN&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => {
      // Extract relevant data from the JSON response and display it on the page

      // Get the weather information div element by ID
      const weatherInfoDiv = document.getElementById("weather-info");
      const cel = (data.main.temp - 273.15).toFixed(1);
      const timezone_offset = data.timezone;
      const timezone_hours = timezone_offset / 3600;
      const timezone_zon = `UTC${timezone_hours >= 0 ? '+' : '-'}${Math.abs(timezone_hours)}`;
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formatted_date = new Date(data.dt * 1000).toLocaleDateString(undefined, options);
      const time = new Date(data.dt * 1000).toLocaleTimeString();
      const windSpeed = data.wind.speed;
      const humidity = data.main.humidity;
      const weatherDescription = data.weather[0].description;
      const cityName = data.name;
      // Create HTML content with weather information
      const weatherHtml = `
      <h3>Current weather in ${data.name}, ${data.sys.country}</h3>
        <p>Temperature in Celsius: ${cel}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind speed: ${windSpeed} m/s</p>
        <p>Weather description: ${weatherDescription}</p>
        <p>Current Date: ${formatted_date}</p>
        <p>Current Time: ${time} (${timezone_zon})</p>
      `;
      weatherInfoDiv.innerHTML = weatherHtml;
    })
    // Handle errors in fetching and parsing weather data
    .catch((error) => {
      console.error(error);
      const weatherInfoDiv = document.getElementById("weather-info");
      weatherInfoDiv.innerHTML = "Error getting weather information.";
    });
}


//Attraction

    //You should get your API key at https://opentripmap.io
    // API key for OpenTripMap
    const apiKey = "5ae2e3f221c38a28845f05b6143bb03eedf7b9b0eb7e1ea946618e44";
    // Function to make API calls to OpenTripMap
    function apiGet(method, query) {
      return new Promise(function (resolve, reject) {
          // Construct API URL with method and API key

            var otmAPI =
                "https://api.opentripmap.com/0.1/en/places/" +
                method +
                "?apikey=" +
            apiKey;
          // Add query parameters if specified
            if (query !== undefined) {
                otmAPI += "&" + query;
          }
          // Fetch data from API URL and resolve the promise with the response data
            fetch(otmAPI)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(function (err) {
                    console.log("Fetch Error :-S", err);
                });
        });
    }
// Number of results to display per page
    const pageLength = 5;
// Variables to keep track of the current offset, longitude, latitude, and count
    let offset = 0;
    let lon = 0;
    let lat = 0;
    let count = 0;

function onShowPOI(data) {
      // Get the DOM element for the Point of Interest (POI)
  let poi = document.getElementById("poi");
  // Clear the POI element
  poi.innerHTML = "";
  // If there is a preview image, add it to the POI element
        if (data.preview) {
            poi.innerHTML += `<img src="${data.preview.source}">`;
  }
  // Add the description of the POI to the POI element
        poi.innerHTML += data.wikipedia_extracts
            ? data.wikipedia_extracts.html
            : data.info
                ? data.info.descr
                : "No description";
// Add a link to the OpenTripMap website for more information on the POI
        poi.innerHTML += `<p><a target="_blank" href="${data.otm}">Show more at OpenTripMap</a></p>`;
    }

function createListItem(item) {
      // Create an <a> DOM element for each item in the list
  let a = document.createElement("a");
  // Add a class to the <a> element
  a.className = "list-group-item list-group-item-action";
  // Set a custom data attribute with the xid of the item
  a.setAttribute("data-id", item.xid);
  // Add the name and category of the item to the <a> element
        a.innerHTML = `<h5 class="list-group-item-heading">${item.name}</h5>
          <p class="list-group-item-text">${getCategoryName(item.kinds)}</p>`;
// Add an event listener to the <a> element to display the POI when clicked
        a.addEventListener("click", function () {
            document.querySelectorAll("#list a").forEach(function (item) {
                item.classList.remove("active");
            });
          // Remove the "active" class from all <a> elements
          this.classList.add("active");
          // Get the xid of the clicked item
          let xid = this.getAttribute("data-id");
          // Call the OpenTripMap API to get the details of the clicked item
            apiGet("xid/" + xid).then(data => onShowPOI(data));
        });
        return a;
    }

function loadList() {
      // Call the OpenTripMap API to get a list of nearby POIs
        apiGet(
            "radius",
            `radius=1000&limit=${pageLength}&offset=${offset}&lon=${lon}&lat=${lat}&rate=2&format=json`
        ).then(function (data) {
          // Get the DOM element for the list of POIs
          let list = document.getElementById("list");
          // Clear the list element
          list.innerHTML = "";
          // Create an <a> element for each POI in the list and add it to the list element
          data.forEach(item => list.appendChild(createListItem(item)));
          // Get the DOM element for the "Next" button
          let nextBtn = document.getElementById("next_button");
          // If there are no more POIs to load, hide the "Next" button
            if (count < offset + pageLength) {
              nextBtn.style.visibility = "hidden";
            // Otherwise, show the "Next" button and update its text
            } else {
                nextBtn.style.visibility = "visible";
                nextBtn.innerText = `Next (${offset + pageLength} of ${count})`;
            }
        });
    }

    function firstLoad() {
      // Send a request to the OpenTripMap API to get the count of objects with description in a 1km radius around the specified location
      apiGet(
          "radius",
          `radius=1000&limit=${pageLength}&offset=${offset}&lon=${lon}&lat=${lat}&rate=2&format=count`
      ).then(function (data) {
          // Save the count of objects to a variable
          count = data.count;
          // Set the initial offset to 0
          offset = 0;
          // Add a message to the "info" element with the count of objects
          document.getElementById(
              "info"
          ).innerHTML += `<p>${count} objects with description in a 1km radius</p>`;
          // Load the initial list of objects
          loadList();
      });
  }

// Attach an event listener to the search form to handle when the form is submitted
document
    .getElementById("search_form")
    .addEventListener("submit", function (event) {
        // Get the search query from the text input field
        let name = document.getElementById("textbox").value;
        // Send a request to the OpenTripMap API to search for a geoname with the specified name
        apiGet("geoname", "name=" + name).then(function (data) {
            // Set the message to display in the "info" element to "Name not found" by default
            let message = "Name not found";
            // If the search was successful, update the message with the name of the geoname and its country, and load the list of objects for that location
            if (data.status == "OK") {
                message = data.name + ", " + getCountryName(data.country);
                lon = data.lon;
                lat = data.lat;
                firstLoad();
            }
            // Set the text of the "info" element to the message
            document.getElementById("info").innerHTML = `<p>${message}</p>`;
        });
        // Prevent the default form submission behavior
        event.preventDefault();
    });

// Attach an event listener to the "Next" button to handle when it is clicked
document
    .getElementById("next_button")
    .addEventListener("click", function () {
        // Increase the offset by the page length and load the next page of objects
        offset += pageLength;
        loadList();
    });



//MealDB

// Define a function to list Chinese cuisine
function listChineseCuisine() {
  // Get the element to show the cuisine list
  var cuisineList = document.getElementById("cuisineList");

  // Clear the list first
  cuisineList.innerHTML = "";

  // Fetch data from the Meal DB API for Chinese cuisine
  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese")
    // Convert the response to JSON format
    .then((response) => response.json())
    // Process the data
    .then((data) => {
      // Log the data in the console
      console.log(data);

      // Loop through the meals and create a list item for each meal
      data.meals.forEach((meal) => {
        var listItem = document.createElement("li");
        listItem.innerHTML = meal.strMeal;
        cuisineList.appendChild(listItem);
      });
    });
}




//MEAL DB

// Function to retrieve meal data from API
function Meal() {
  var meal = document.getElementById("meal").value
// Fetch meal data from API using user input
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
      .then((response) => response.json())
      .then((data) => {
          console.log(data) // Log the retrieved data to the console
      // Display meal information on the webpage
      var mealData = data.meals[0];
      document.getElementById("Food").innerHTML = mealData.strMeal; // Display meal name
      document.getElementById("Category").innerHTML = `Category: ${mealData.strCategory}`; // Display category
      document.getElementById("Instructions").innerHTML = mealData.strInstructions; // Display instructions
      document.getElementById("YouTube").innerHTML = `<a href="${mealData.strYoutube}" target="_blank">Watch on YouTube</a>`; // Display YouTube link
      document.getElementById("MealImage").src = mealData.strMealThumb; // Display image

      // Display ingredients
      var ingredientsList = document.getElementById("ingredientList");
      ingredientsList.innerHTML = ""; // Clear the list first
      for (var i = 1; i <= 20; i++) { // Maximum number of ingredients in the API is 20
          var ingredient = mealData[`strIngredient${i}`];
          var measure = mealData[`strMeasure${i}`];
          if (ingredient) { // Only add to list if there's an ingredient
              var listItem = document.createElement("li");
              listItem.innerHTML = `${ingredient} - ${measure}`;
              ingredientsList.appendChild(listItem);
          }
      }
  });

}




/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}


