var date = new Date();

var mName = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var today = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function showDate() {
  var tDate = date.getDate();
  var mIndex = date.getMonth();
  var year = date.getFullYear();
  var dIndex = date.getDay();

  if (tDate > 9) {
    var todayDate =
      tDate + " " + mName[mIndex] + " , " + year + " : " + today[dIndex];
  } else {
    var todayDate =
      "0" + tDate + " " + mName[mIndex] + " , " + year + " : " + today[dIndex];
  }
  document.getElementById("date").innerHTML = todayDate;
}

function showTime() {
  var d = new Date();
  var hh = d.getHours();
  var mm = d.getMinutes();
  var ss = d.getSeconds();
  var session = "AM";

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  if (hh >= 12) {
    session = "PM";
  }

  if (hh > 12) {
    hh = hh - 12;
  }

  var time = hh + " : " + mm + " : " + ss + " " + session;

  document.getElementById("time").innerHTML = time;
  setTimeout(showTime, 1000);
}
showDate();
showTime();
// document.write(day);

// const inputBox = document.querySelector(".input_box");
// const searchBtn = document.getElementById("searchBtn");
// const weather_img = document.querySelector(".weather_img");
// const temperature = document.querySelector(".temperature");
// const description = document.querySelector(".description");
// const humidity = document.getElementById("humidity");
// const wind_speed = document.getElementById("wind_speed");
// const weather_body = document.querySelector(".weather_body");
// const location_not_found = document.querySelector(".location_not_found");

// //--------------- Function To Fetch Details from API --------------
// async function checkWeather(city) {
//   const api_key = "7a80feaf1a79b2192a78d8cbfb98b5c6";
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

//   const weather_data = await fetch(`${url}`).then((response) =>
//     response.json()
//   );

//   console.log(weather_data);

//   //------------- Funtion Runs --> When Location Not Found --------------
//   if (weather_data.cod === `404`) {
//     location_not_found.style.display = "flex";
//     weather_body.style.display = "none";
//     return;
//   }

//   weather_body.style.display = "flex";
//   location_not_found.style.display = "none";

//   //----------------------- Setting Temperature Data -----------------------
//   temperature.innerHTML = `${Math.round(
//     weather_data.main.temp - 273.15
//   )}<sup>°C</sup>`;

//   description.innerHTML = `${weather_data.weather[0].description}`;

//   //----------------------- Setting Humidity Data -----------------------
//   humidity.innerHTML = `${weather_data.main.humidity} %`;

//   //----------------------- Setting Wind Speed Data -----------------------
//   wind_speed.innerHTML = `${weather_data.wind.speed} KM/H`;

//   //------------------ Changing Images According to Weather ----------------
//   switch (weather_data.weather[0].main) {
//     case "Clouds":
//       weather_img.src = "images/cloud.png";
//       break;

//     case "Clear":
//       weather_img.src = "images/clear.png";
//       break;

//     case "Rain":
//       weather_img.src = "images/rain.png";
//       break;

//     case "Mist":
//       weather_img.src = "images/mist.png";
//       break;

//     case "Snow":
//       weather_img.src = "images/snow.png";
//       break;
//   }
// }

// //-------------- Function Runs --->When Button Was Clicked -------------
// searchBtn.addEventListener("click", () => {
//   checkWeather(inputBox.value);
// });
