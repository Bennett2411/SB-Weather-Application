let currenttempupdate = document.querySelector(".current-temp-degree");

function citySearch(event) {
  event.preventDefault();
  console.log("apiUrl");

  let h1 = document.querySelector("h1");
  let cityInput = document.querySelector("#cityName").value;
  h1.innerHTML = cityInput;
  let currenttempupdate = document.querySelector(".current-temp-degree");
  // currenttempupdate.innerHTML = response.data.temperature.current;
  let apiKey = "e2f90841bba6oe00351f9aa2e3877b4t";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayTemperature);
}

function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let currenttempupdate = document.querySelector(".current-temp-degree");
  currenttempupdate.innerHTML = temperature;
}

let form = document.querySelector("#cityfield");
form.addEventListener("submit", citySearch);

//date field//
let now = new Date();

let day = document.getElementById("date");
let hour = document.getElementById("hour");
let minutes = document.getElementById("minutes");

let timeHour = now.getHours();
let timeMin = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let weekDay = days[now.getDay()];

day.innerHTML = `${weekDay}`;
hour.innerHTML = `${timeHour}`;
minutes.innerHTML = `${timeMin}`;

//Weather Integration//
