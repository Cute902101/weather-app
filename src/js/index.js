import * as utility from "./utilities.js"
import apiDataModule from "./utilities.js"

const search = document.querySelector("[data-location-form]");
let locationInput = document.querySelector("[data-location-input]");

async function fetchWeatherData () {
  let location = locationInput.value
  try {
    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=47c174966a23453c98f23538230506&q=Homestead&days=7&aqi=no&alerts=no`)
    let apiData = await response.json();
    apiDataModule.setApiData(apiData);
    apiDataModule.consoleData()
    apiDataModule.renderCurrentWeather()
    apiDataModule.renderHourlyWeather()
  } 
  catch(error) {
    alert("oops! try again")
    console.error("sorry man", error)
  } 
}


(function initPage (){ 
search.addEventListener("submit", (e)=>{
  e.preventDefault();
    fetchWeatherData();
})})()


function createHourlyElements() {
  const parentDiv = document.querySelector(".hourly-container");

  for (let i = 0; i < 24; i++) {
    // Create the main container div
    const hourlyDiv = document.createElement("div");
    hourlyDiv.className = "hourly p-4";
    hourlyDiv.textContent = "hour";

    // Create the grid div
    const gridDiv = document.createElement("div");
    gridDiv.className = "grid p-4";

    // Create the image element
    const img = document.createElement("img");
    img.className = "hourly-condition-img";
    img.src = "#";
    gridDiv.appendChild(img);

    // Create the condition heading
    const conditionHeading = document.createElement("h1");
    conditionHeading.className = "hourly-condition";
    conditionHeading.textContent = "(condition)";
    gridDiv.appendChild(conditionHeading);

    // Create the precipitation paragraph
    const precipitationPara = document.createElement("p");
    precipitationPara.className = "hourly-precipitaion";
    precipitationPara.textContent = "(precipitation)";
    gridDiv.appendChild(precipitationPara);

    // Create the humidity paragraph
    const humidityPara = document.createElement("p");
    humidityPara.className = "hourly-humidity";
    humidityPara.textContent = "(humidity)";
    gridDiv.appendChild(humidityPara);

    // Create the wind paragraph
    const windPara = document.createElement("p");
    windPara.className = "hourly-wind";
    windPara.textContent = "(wind)";
    gridDiv.appendChild(windPara);

    // Append the grid div to the hourly div
    hourlyDiv.appendChild(gridDiv);

    // Append the hourly div to the parent div
    parentDiv.appendChild(hourlyDiv);
  }
}
createHourlyElements()

