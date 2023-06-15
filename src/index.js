const currentIcon = document.querySelector("[data-current-icon]");
const currentTemp = document.querySelector("[data-current-temp]");
const search = document.querySelector("[data-location-form]");
let locationInput = document.querySelector("[data-location-input]");

(async function getCurrentWeather () {
  let location = locationInput.value
  try {
    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=47c174966a23453c98f23538230506&q=London&days=7&aqi=no&alerts=no`)
    let getData = await response.json();
    renderCurrentWeatherIcon(getData);
    renderCurrentTemp(getData)
    console.log(getData)
  } catch(error){
    console.error("sorry man", error)
  }
 
})()

function renderCurrentWeatherIcon (getData) {
  currentIcon.src = getData.current.condition.icon
}

function renderCurrentTemp (getData) {
  currentTemp.innerText = getData.current.temp_f + "°F"
}

search.addEventListener("submit", (e)=>{
  e.preventDefault();
    getCurrentWeather();
})



