import * as utility from "./utilities.js"
import apiDataModule from "./utilities.js"

const search = document.querySelector("[data-location-form]");
let locationInput = document.querySelector("[data-location-input]");

async function fetchWeatherData () {
  let location = locationInput.value
  try {
    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=47c174966a23453c98f23538230506&q=Miami&days=7&aqi=no&alerts=no`)
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


